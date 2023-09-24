import fetchWithBlinkingDots from './openai-api.mjs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function waitForUserCommand() {
  rl.question('Enter a command: ', async (command) => {
    const response = await fetchWithBlinkingDots(command);
    
    console.log({gpt4: response.choices[0].message.content});
    // Wait for another command
    waitForUserCommand();
  });
}

// Start waiting for user commands
waitForUserCommand();


