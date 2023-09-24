import OpenAI from "openai";
import { config } from 'dotenv';
export default fetchGPT4Response;

// Configure dotenv
config({ path: 'D:/Google Drive/proyectos/Business/mikel.env'});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// This code is for v4 of the openai package: npmjs.com/package/openai
export async function fetchGPT4Response(prompt){
    try {
        return await openai.chat.completions.create({
            model: "gpt-4",
                messages: [
                    {
                    "role": "user",
                    "content": prompt
                    }
                ],
                temperature: 1,
                max_tokens: 250,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
                });
    } catch (error) {
        console.error('Error:', error);
    }
}

  
export async function fetchWithBlinkingDots(prompt) {
    // Start blinking dots
    let dots = '';
    const interval = setInterval(() => {
      dots = dots.length < 3 ? dots + '.' : '';
      console.log(`\r${dots}`);
    }, 500);
  
    // Fetch GPT-4 response
    const response = await fetchGPT4Response(prompt);

    // Stop blinking dots
    clearInterval(interval);
    process.stdout.write('\r'); // Clear the current line
  
    return response;
}