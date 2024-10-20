<img src="public/logo.png" alt="CheerleadIn Logo" width="300"/>

# CheerleadIn

CheerleadIn is an AI-powered command-line interface tool that helps in constructing interesting LinkedIn posts with topics that are trending. CheerleadIn makes your life easier by using AI to generate innovative ideas and write professional posts based on the themes and templates you choose.

## Characteristics

- Collect trending topics to ensure your content is both relevant and timely.
- AI-generated post ideas based on selected topics
  Customizable post templates for various content styles
  An interactive CLI interface that is easy to navigate and select.
  AI-generated image prompts that will beautifully enhance your posts.
- Regenerate posts by option with more input to fine-tune results

## Installation

You can install CheerleadIn globally using npm:

```bash
npm install -g cheerleadin
```

Alternatively, if you want to contribute or run it locally:

1. Clone the repository or download the source code.
2. Navigate into the project folder in your terminal.
3. Install the dependencies with the command:

```bash
npm install
```

## Usage

If you've installed CheerleadIn globally, you can run it from anywhere in your terminal:

```bash
cheerleadin
```

If you're running it locally after cloning the repository:

1. Navigate to the project folder in your terminal.
2. Run the following command:

```bash
npm start
```

Interact with the interactive activities to:

1. Select a hot topic
2. Choose a post template
3. Choose an AI idea or ask for more ideas
4. Review and finalize the generated post, or regenerate with more input.

Once endorsed, the text of your LinkedIn post and the image prompt will be saved in separate files in the project folder.

## Dependencies

CheerleadIn depends on following few key dependencies:

- Axios: An HTTP client to make API requests
- dotenv: Managing environment variables
- google-trends-api: Retrieve trending topics
- inquirer: Interactive command line user interface
- lodash: Utility functions
- openai: OpenAI API integration for content generation

For a comprehensive list of dependencies and their respective versions, please consult the `package.json` file.

## Contributing

CheerleadIn is open to contributions! Create pull requests, report bugs, or suggest new features using CheerleadIn's project page on GitHub.

## License

MIT License
