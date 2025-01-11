'use server'

import { revalidatePath } from 'next/cache'

type CodeExample = {
  python: string
  javascript: string
}

// In a real app, this would be stored in a database
let codeExamples: CodeExample = {
  python: `from torchbits.tensorchain import TensorClient

client = TensorClient(api_key="your-api-key")

# Store user preference
client.add([
    {"role": "user", "content": "I love spicy food."},
    {"role": "assistant", "content": "Noted! You enjoy spicy cuisine."}
], user_id="user123")

# Later, retrieve and use the preference
query = "What food does the user like?"
memory = client.search(query, user_id="user123")`,
  javascript: `import { TensorClient } from 'torchbits'

const client = new TensorClient({ apiKey: 'your-api-key' })

// Store user preference
await client.add([
  { role: 'user', content: 'I love spicy food.' },
  { role: 'assistant', content: 'Noted! You enjoy spicy cuisine.' }
], { userId: 'user123' })

// Later, retrieve and use the preference
const query = 'What food does the user like?'
const memory = await client.search(query, { userId: 'user123' })`
}

export async function updateCodeExample(language: keyof CodeExample, code: string) {
  codeExamples[language] = code
  revalidatePath('/')
}

export async function getCodeExample(language: keyof CodeExample) {
  return codeExamples[language]
}

