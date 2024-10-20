import { config } from "dotenv"
import { realTimeTrends } from "google-trends-api"
import { flow, get, map, property } from "lodash/fp"
import OpenAI from "openai"
import { GenerateLinkedInPostParams, PostContent } from "./types"

config()

/**
 * Initialize OpenAI API client with the API key from environment variables.
 */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

/**
 * Fetches trending topics from Google Trends API.
 *
 * @returns A promise that resolves to an array of trending topic strings.
 */
export const getTrendingTopics = async (): Promise<string[]> => {
  try {
    const result = await realTimeTrends({ geo: "US", category: "b" })
    const parsed = JSON.parse(result)
    return flow(get(["storySummaries", "trendingStories"]), map(property("title")), (queries: string[]) =>
      queries.filter((query: string) => true),
    )(parsed)
  } catch (error: unknown) {
    console.error("Error fetching trending topics:", error)
    return []
  }
}

/**
 * Generates ideas for a LinkedIn post based on a given topic using OpenAI's gpt-4o model.
 *
 * @param topic - The main topic for idea generation.
 * @returns A promise that resolves to an array of idea strings.
 */
export const generateIdeas = async (topic: string): Promise<string[]> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: `Generate 5 unique and engaging ideas for a LinkedIn post about "${topic}". Each idea should be a brief sentence.`,
        },
      ],
      max_tokens: 200,
      temperature: 0.7,
    })

    const content = response.choices[0].message?.content
    if (!content) throw new Error("No ideas generated")
    return content.split("\n").filter((idea: string) => idea.trim() !== "")
  } catch (error) {
    console.error("Error generating ideas:", error)
    throw error
  }
}

/**
 * Generates a LinkedIn post based on the provided parameters using OpenAI's gpt-4o model.
 *
 * @param params - The parameters for generating the LinkedIn post.
 * @returns A promise that resolves to a PostContent object.
 */
export const generateLinkedInPost = async ({
  topic,
  template,
  userInput,
  idea,
}: GenerateLinkedInPostParams): Promise<PostContent> => {
  try {
    const [postContent, imagePrompt] = await Promise.all([
      openai.chat.completions
        .create({
          model: "gpt-4o",
          messages: [
            {
              role: "user",
              content: template.gptPrompt(topic, `${userInput} Idea: ${idea}`),
            },
          ],
          max_tokens: 500,
          temperature: 0.7,
        })
        .then((response) => response.choices[0].message?.content?.trim() ?? ""),
      Promise.resolve(template.dallePrompt(topic)),
    ])

    if (typeof postContent !== "string" || typeof imagePrompt !== "string") {
      throw new Error("Invalid response from OpenAI API")
    }

    return { postContent, imagePrompt }
  } catch (error: unknown) {
    console.error("Error generating post:", error instanceof Error ? error.message : String(error))
    throw error
  }
}
