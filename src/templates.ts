/**
 * Represents a template for generating LinkedIn posts and image prompts.
 */
export type Template = {
  /** The name of the template */
  name: string
  /**
   * Function to generate the GPT prompt for the LinkedIn post
   * @param topic - The main topic of the post
   * @param userInput - Optional additional input from the user
   * @returns A string containing the GPT prompt
   */
  gptPrompt: (topic: string, userInput?: string) => string
  /**
   * Function to generate the DALL-E prompt for the image
   * @param topic - The main topic of the post
   * @returns A string containing the DALL-E prompt
   */
  dallePrompt: (topic: string) => string
}

/**
 * An array of predefined templates for generating LinkedIn posts and image prompts.
 * Each template includes a name, a function to generate the GPT prompt, and a function to generate the DALL-E prompt.
 */
export const templates: Template[] = [
  // Template 1
  {
    name: "Personal Success Story with Lessons Learned",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post sharing a personal success story about overcoming challenges in ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- The challenges faced`,
        `- Actions taken`,
        `- Lessons learned`,
        `Conclude with a motivational message for professionals facing similar challenges.`,
        `Use an engaging and authentic storytelling tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `An illustrative image representing overcoming challenges in ${topic}, professional setting, uplifting, modern art`,
  },
  // Template 2
  {
    name: "Inspirational Story of Overcoming Adversity",
    gptPrompt: (topic, userInput) =>
      [
        `Craft a compelling LinkedIn post about overcoming significant adversity related to ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Highlight:`,
        `- The struggle endured`,
        `- The turning point`,
        `- The outcome achieved`,
        `Inspire others to persevere through their own challenges. Use a heartfelt and motivational tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `An inspiring image symbolizing triumph over ${topic}, professional context, vivid colors, realistic style`,
  },
  // Template 3
  {
    name: "Industry Insights and Trend Analysis",
    gptPrompt: (topic, userInput) =>
      [
        `Write an informative LinkedIn post analyzing the current trend of "${topic}".`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- A brief overview of the trend`,
        `- Its impact on the industry`,
        `- Predictions for the future`,
        `Encourage professionals to consider how this trend affects their work. Use an authoritative and insightful tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `A professional infographic illustrating the trend of "${topic}", clean design, modern graphics`,
  },
  // Template 4
  {
    name: "Helpful Tips and How-To Guides",
    gptPrompt: (topic, userInput) =>
      [
        `Create a LinkedIn post that provides a step-by-step guide on how to ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- An introduction to the importance of the topic`,
        `- Clear, numbered steps`,
        `- A conclusion encouraging implementation`,
        `Use a clear and instructional tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An illustrative diagram showing steps to ${topic}, minimalist style, professional`,
  },
  // Template 5
  {
    name: "Thought-Provoking Questions to the Community",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post that asks the question: "${topic}".`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Provide context: Discuss the relevance of this question in today's industry.`,
        `Encourage the community to share their thoughts and experiences.`,
        `Use an engaging and inquisitive tone. Keep it within 200 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An image symbolizing contemplation about "${topic}", abstract art, professional tone`,
  },
  // Template 6
  {
    name: "Celebrating Team Achievements",
    gptPrompt: (topic, userInput) =>
      [
        `Craft a LinkedIn post celebrating the achievement of ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Highlight:`,
        `- What the achievement is`,
        `- The effort the team put in`,
        `- Gratitude towards the team members`,
        `Encourage others to acknowledge their teams' hard work.`,
        `Use a grateful and proud tone. Keep it within 250 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `A joyful team celebrating ${topic}, realistic photo, professional setting`,
  },
  // Template 7
  {
    name: "Sharing Useful Resources or Tools",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post sharing the resource "${topic}".`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- A brief description of the resource`,
        `- How it benefits professionals`,
        `- A personal endorsement or experience`,
        `Encourage others to check it out.`,
        `Use an informative and enthusiastic tone. Keep it within 200 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An image representing the resource ${topic}, clean design, professional look`,
  },
  // Template 8
  {
    name: "Highlighting Customer Success Stories",
    gptPrompt: (topic, userInput) =>
      [
        `Create a LinkedIn post highlighting how ${topic} achieved success using our services.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- The challenges the customer faced`,
        `- How your solution helped`,
        `- The results they achieved`,
        `Celebrate their success and express excitement for their future.`,
        `Use a congratulatory and professional tone. Keep it within 250 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An image of a happy professional representing ${topic}'s success, realistic style`,
  },
  // Template 9
  {
    name: "Discussing Failures and Lessons Learned",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post about experiencing ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- The context of the failure`,
        `- The emotions felt`,
        `- The lessons learned`,
        `Encourage others to embrace failures as learning opportunities.`,
        `Use an honest and reflective tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An image symbolizing growth after failure, abstract art, inspirational feel`,
  },
  // Template 10
  {
    name: "Sharing Personal Anecdotes that Humanize Professional Experience",
    gptPrompt: (topic, userInput) =>
      [
        `Craft a LinkedIn post sharing a personal anecdote about ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- The story details`,
        `- The insight gained`,
        `- How it applies to professional life`,
        `Use a personable and engaging tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An artistic representation of ${topic}, warm colors, inviting atmosphere`,
  },
  // Template 11
  {
    name: "Sharing Industry Research Findings",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post summarizing the key findings from recent research on ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- An overview of the research purpose`,
        `- Significant findings or statistics`,
        `- Implications for professionals in the industry`,
        `Encourage readers to consider how these findings might impact their work.`,
        `Use an informative and professional tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `A professional illustration representing research findings on ${topic}, modern infographic style, clean and informative`,
  },

  // Template 12
  {
    name: "Debunking Common Myths in the Industry",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post debunking common myths about ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- Introduction to the myth(s)`,
        `- Facts and evidence that counter the myth(s)`,
        `- The correct information or perspective`,
        `Encourage professionals to share their experiences with these myths.`,
        `Use an educational and clarifying tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An image symbolizing debunking myths about ${topic}, lightbulb moment, professional style`,
  },

  // Template 13
  {
    name: "Highlighting Diversity and Inclusion Efforts",
    gptPrompt: (topic, userInput) =>
      [
        `Craft a LinkedIn post about the importance of diversity and inclusion in ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- Why diversity and inclusion matter`,
        `- Examples of successful initiatives`,
        `- How it benefits the organization and employees`,
        `Encourage others to foster inclusive environments.`,
        `Use an empathetic and encouraging tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `An illustration depicting diversity and inclusion in the workplace, diverse team, harmonious collaboration`,
  },

  // Template 14
  {
    name: "Predictions and Future Outlook",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post sharing predictions about the future of ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- Current trends leading to these predictions`,
        `- Potential impacts on the industry`,
        `- Suggestions for how professionals can prepare`,
        `Use a forward-thinking and insightful tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `A futuristic image representing the future of ${topic}, visionary style, sleek and modern`,
  },

  // Template 15
  {
    name: "Sharing a Day in the Life",
    gptPrompt: (topic, userInput) =>
      [
        `Craft a LinkedIn post describing "A Day in the Life" of a ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- An overview of daily tasks and responsibilities`,
        `- Challenges faced and how you address them`,
        `- What you find rewarding about your work`,
        `Use a personable and engaging tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An artistic depiction of a typical day for a ${topic}, warm colors, inviting atmosphere`,
  },

  // Template 16
  {
    name: "Reflecting on a Mentor's Advice",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post reflecting on impactful advice from a mentor about ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- The advice given`,
        `- How you applied it in your career`,
        `- The outcomes or changes it led to`,
        `Encourage others to value mentorship.`,
        `Use a reflective and appreciative tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `An image symbolizing mentorship and guidance in ${topic}, two professionals, supportive interaction`,
  },

  // Template 17
  {
    name: "Discussing Ethical Considerations",
    gptPrompt: (topic, userInput) =>
      [
        `Craft a LinkedIn post discussing ethical considerations in ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- A description of the ethical issue`,
        `- Its implications for professionals and society`,
        `- Suggestions for addressing or mitigating the issue`,
        `Encourage others to engage in ethical practices.`,
        `Use a thoughtful and responsible tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An image representing ethics in ${topic}, scales of justice, professional style`,
  },

  // Template 18
  {
    name: "Celebrating Milestones and Anniversaries",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post celebrating ${topic} in your career or company.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- What the milestone represents`,
        `- Reflections on the journey so far`,
        `- Gratitude towards those who supported you`,
        `Inspire others to acknowledge their own milestones.`,
        `Use a grateful and celebratory tone. Keep it within 250 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An image celebrating a professional milestone, uplifting atmosphere, celebratory elements`,
  },

  // Template 19
  {
    name: "Sharing Professional Development Experiences",
    gptPrompt: (topic, userInput) =>
      [
        `Create a LinkedIn post about your recent experience with ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- What you learned`,
        `- How it applies to your work`,
        `- Recommendations for others`,
        `Encourage continuous learning among professionals.`,
        `Use an enthusiastic and informative tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `An illustration of professional development, attending a seminar or workshop, collaborative learning`,
  },

  // Template 20
  {
    name: "Highlighting Sustainable Practices",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post highlighting sustainable practices in ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- Description of the practices or initiatives`,
        `- Their impact on the environment and business`,
        `- How others can implement similar practices`,
        `Encourage environmental responsibility among professionals.`,
        `Use an inspiring and proactive tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An image representing sustainability in ${topic}, green elements, harmonious with nature`,
  },

  // Template 21
  {
    name: "Discussing Remote Work and Productivity",
    gptPrompt: (topic, userInput) =>
      [
        `Craft a LinkedIn post discussing strategies for productivity in remote work settings.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- Common challenges faced`,
        `- Effective solutions or tips`,
        `- Personal experiences`,
        `Encourage others to share their strategies.`,
        `Use a supportive and practical tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `An illustration of a professional working remotely, balanced lifestyle, modern and clean design`,
  },

  // Template 22
  {
    name: "Expressing Gratitude to Clients or Partners",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post expressing gratitude to your clients or partners for their support in ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- Specific contributions they made`,
        `- The positive outcomes achieved`,
        `- Your commitment to continued collaboration`,
        `Use a sincere and appreciative tone. Keep it within 250 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `An image representing partnership and appreciation, handshake, warm colors, professional setting`,
  },

  // Template 23
  {
    name: "Sharing Success Stories of Team Members",
    gptPrompt: (topic, userInput) =>
      [
        `Craft a LinkedIn post celebrating the accomplishments of ${topic} in your team.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- What they achieved`,
        `- How it benefited the team or project`,
        `- Words of appreciation`,
        `Encourage others to recognize their colleagues.`,
        `Use a proud and supportive tone. Keep it within 250 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `An image highlighting individual achievement in a team, spotlight effect, professional atmosphere`,
  },

  // Template 24
  {
    name: "Discussing Technological Innovations",
    gptPrompt: (topic, userInput) =>
      [
        `Write an informative LinkedIn post about the latest technological innovation in ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- An explanation of the technology`,
        `- Its potential applications`,
        `- How it might change the industry`,
        `Encourage readers to stay informed about technological advancements.`,
        `Use an enthusiastic and educational tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `A futuristic illustration of technological innovation in ${topic}, cutting-edge design, dynamic visuals`,
  },

  // Template 25
  {
    name: "Encouraging Wellness and Mental Health",
    gptPrompt: (topic, userInput) =>
      [
        `Craft a LinkedIn post emphasizing the importance of mental health and wellness in the workplace.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- Common stressors professionals face`,
        `- Practical tips for maintaining wellness`,
        `- Encouragement to prioritize mental health`,
        `Use a compassionate and supportive tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An image representing wellness in the workplace, calming colors, balance and serenity`,
  },

  // Template 26
  {
    name: "Sharing a Personal Philosophy or Motto",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post sharing your personal philosophy or motto: "${topic}".`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- How you developed this philosophy`,
        `- Examples of how it influences your work`,
        `- Encouragement for others to find their guiding principles`,
        `Use an inspiring and reflective tone. Keep it within 250 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `An artistic representation of the philosophy "${topic}", inspirational style, visually engaging`,
  },

  // Template 27
  {
    name: "Discussing Leadership Lessons",
    gptPrompt: (topic, userInput) =>
      [
        `Craft a LinkedIn post discussing key lessons learned about leadership in ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- Specific experiences that taught these lessons`,
        `- How these lessons have shaped your leadership style`,
        `- Advice for others in leadership roles`,
        `Use an authoritative and encouraging tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An image symbolizing leadership, guiding others, professional and inspirational`,
  },

  // Template 28
  {
    name: "Reflecting on Cultural Experiences and Their Impact",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post reflecting on how your cultural experiences with ${topic} have impacted your professional life.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- Specific experiences and what you learned`,
        `- How these lessons apply to your work`,
        `- The value of embracing diverse perspectives`,
        `Use a reflective and open-minded tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `An illustration combining elements of different cultures, unity and learning, vibrant colors`,
  },

  // Template 29
  {
    name: "Discussing Work-Life Integration",
    gptPrompt: (topic, userInput) =>
      [
        `Craft a LinkedIn post discussing strategies for effective work-life integration.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- Challenges of balancing work and personal life`,
        `- Practical tips or methods you've found helpful`,
        `- Encouragement for others to find their balance`,
        `Use a supportive and practical tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) => `An image representing balance between work and life, scales or harmony, soothing visuals`,
  },

  // Template 30
  {
    name: "Highlighting Corporate Social Responsibility Efforts",
    gptPrompt: (topic, userInput) =>
      [
        `Write a LinkedIn post highlighting your organization's efforts in corporate social responsibility related to ${topic}.`,
        userInput ? `Consider the following input: ${userInput}` : "",
        `Include:`,
        `- Description of the initiative`,
        `- Impact on the community or environment`,
        `- How it aligns with your company's values`,
        `Encourage others to support social causes.`,
        `Use a proud and motivational tone. Keep it within 300 words.`,
      ]
        .filter(Boolean)
        .join("\n"),
    dallePrompt: (topic) =>
      `An image representing corporate social responsibility in ${topic}, collaborative and positive imagery`,
  },
]
