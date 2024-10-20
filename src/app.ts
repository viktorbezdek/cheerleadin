import inquirer from "inquirer"
import { isEmpty } from "lodash/fp"
import { templates } from "./templates.js"
import { getTrendingTopics, generateIdeas, generateLinkedInPost } from "./api"
import { savePostToFiles } from "./utils"

/**
 * Generates ideas and prompts the user to select one.
 * This function is called recursively if the user chooses to generate new ideas.
 *
 * @param selectedTopic - The selected trending topic.
 * @param selectedTemplate - The selected post template.
 * @param userInput - Additional user input to guide post generation.
 */
const generateIdeasAndSelect = async (
  selectedTopic: string,
  selectedTemplate: (typeof templates)[0],
  userInput: string,
): Promise<void> => {
  try {
    const ideas = await generateIdeas(selectedTopic)
    const { selectedIdea } = await inquirer.prompt([
      {
        type: "list",
        name: "selectedIdea",
        message: "Select an idea for your post:",
        choices: [...ideas, "Generate new ideas"],
      },
    ])

    if (selectedIdea === "Generate new ideas") {
      await generateIdeasAndSelect(selectedTopic, selectedTemplate, userInput)
    } else {
      await generateAndApprove(selectedTopic, selectedTemplate, userInput, selectedIdea)
    }
  } catch (error: unknown) {
    console.error("Error generating ideas:", error instanceof Error ? error.message : String(error))
  }
}

/**
 * Generates a post and prompts the user for approval.
 * If approved, saves the post content and image prompt to files.
 * If not approved, offers the option to regenerate or cancel.
 *
 * @param selectedTopic - The selected trending topic.
 * @param selectedTemplate - The selected post template.
 * @param userInput - Additional user input to guide post generation.
 * @param idea - The selected idea for the post.
 */
const generateAndApprove = async (
  selectedTopic: string,
  selectedTemplate: (typeof templates)[0],
  userInput: string,
  idea: string,
): Promise<void> => {
  try {
    const { postContent, imagePrompt } = await generateLinkedInPost({
      topic: selectedTopic,
      template: selectedTemplate,
      userInput,
      idea,
    })

    console.log("\nGenerated Post Content:\n")
    console.log(postContent)
    console.log("\nGenerated Image Prompt:\n")
    console.log(imagePrompt)

    const { isApproved } = await inquirer.prompt([
      {
        type: "confirm",
        name: "isApproved",
        message: "Do you approve this post?",
        default: true,
      },
    ])

    if (isApproved) {
      const { textFileName, imagePromptFileName } = await savePostToFiles(postContent, imagePrompt)

      console.log("\nYour LinkedIn post has been saved!")
      console.log(`Post text saved to: ${textFileName}`)
      console.log(`Image prompt saved to: ${imagePromptFileName}`)
    } else {
      const { regenerate } = await inquirer.prompt([
        {
          type: "confirm",
          name: "regenerate",
          message: "Would you like to regenerate the post?",
          default: true,
        },
      ])

      if (regenerate) {
        const { additionalInput } = await inquirer.prompt([
          {
            type: "input",
            name: "additionalInput",
            message: "Enter additional input to guide the regeneration (or press Enter to skip):",
          },
        ])

        userInput = additionalInput
        await generateAndApprove(selectedTopic, selectedTemplate, userInput, idea)
      } else {
        console.log("Post generation cancelled.")
      }
    }
  } catch (error: unknown) {
    console.error("Error:", error instanceof Error ? error.message : String(error))
  }
}

/**
 * Main function to run the LinkedIn post generation process.
 * This function orchestrates the entire flow of fetching trending topics,
 * allowing user selection, generating ideas, and creating the final post.
 */
export const main = async (): Promise<void> => {
  try {
    const topics = await getTrendingTopics()
    if (isEmpty(topics)) {
      console.log("No trending topics available. Exiting.")
      return
    }

    const { selectedTopic, selectedTemplateName } = await inquirer.prompt([
      {
        type: "list",
        name: "selectedTopic",
        message: "Select a trending topic:",
        choices: topics,
      },
      {
        type: "list",
        name: "selectedTemplateName",
        message: "Select a post template:",
        choices: templates.map((template) => template.name),
      },
    ])

    const trimmedTemplateName = selectedTemplateName.trim()
    const selectedTemplate = templates.find((template) => template.name === trimmedTemplateName)

    if (!selectedTemplate) {
      console.error("Selected template not found.")
      return
    }

    let userInput = ""

    await generateIdeasAndSelect(selectedTopic, selectedTemplate, userInput)
  } catch (error: unknown) {
    console.error("An error occurred:", error instanceof Error ? error.message : String(error))
  }
}
