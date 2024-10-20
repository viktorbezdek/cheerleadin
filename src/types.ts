import { Template } from "./templates.js"

/**
 * Represents the content of a generated LinkedIn post.
 *
 * @property postContent - The main text content of the post.
 * @property imagePrompt - A prompt for generating an image to accompany the post.
 */
export type PostContent = {
  postContent: string
  imagePrompt: string
}

/**
 * Parameters required to generate a LinkedIn post.
 *
 * @property topic - The main topic of the post.
 * @property template - The template to use for generating the post.
 * @property userInput - Additional user input to guide post generation.
 * @property idea - The specific idea for the post.
 */
export type GenerateLinkedInPostParams = {
  topic: string
  template: Template
  userInput: string
  idea: string
}
