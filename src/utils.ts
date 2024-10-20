import { promises as fs } from "fs"

/**
 * Saves the generated LinkedIn post content and image prompt to files asynchronously.
 *
 * @param postContent - The main text content of the post.
 * @param imagePrompt - The prompt for generating an image to accompany the post.
 * @returns A promise that resolves to an object containing the file names where the content was saved.
 */
export const savePostToFiles = async (
  postContent: string,
  imagePrompt: string,
): Promise<{ textFileName: string; imagePromptFileName: string }> => {
  const textFileName = `linkedin_post_${Date.now()}.txt`
  const imagePromptFileName = `linkedin_image_prompt_${Date.now()}.txt`

  await Promise.all([fs.writeFile(textFileName, postContent), fs.writeFile(imagePromptFileName, imagePrompt)])

  return { textFileName, imagePromptFileName }
}
