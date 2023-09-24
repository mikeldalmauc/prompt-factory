import fetchWithBlinkingDots from './openai-api.mjs';
import readline from 'readline';

export default chat;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export async function chat() {
  rl.question('Enter a command: ', async (command) => {
    const response = await fetchWithBlinkingDots(command);
    
    console.log({gpt4: response.choices[0].message.content});
    // Wait for another command
    chat();
  });
}
