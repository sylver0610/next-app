import { ChatCompletionRequestMessage } from 'openai'

export const sendMessage = async (messages: ChatCompletionRequestMessage[]) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: 'text-davinci-edit-001',
        messages: [{ role: 'user', content: 'Say this is a test!' }],
        temperature: 0.7,
      }),
    })

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
