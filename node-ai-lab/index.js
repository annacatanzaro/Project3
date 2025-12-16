import OpenAI from 'openai';
import dotenv from 'dotenv';
// Load environment variables from the .env file
dotenv.config();
// The OpenAI constructor automatically looks for the OPENAI_API_KEY
// in the environment variables (process.env)
const openai = new OpenAI();
async function main() {
console.log('--- Non-Streaming Example ---');
const completion = await openai.chat.completions.create({
model: 'gpt-4o-mini',
messages: [{ role: 'user', content: 'List 10 breeds of dogs' }],
});
console.log(completion.choices[0]?.message?.content);
console.log('\n--- Streaming Example ---');
const stream = await openai.chat.completions.create({
model: 'gpt-4o-mini',
messages: [{ role: 'user', content: 'List 10 breeds of dogs' }],
stream: true,
});
for await (const part of stream) {
process.stdout.write(part.choices[0]?.delta?.content || '');
}
process.stdout.write('\n');
}
main();
