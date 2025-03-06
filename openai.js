const fetch = require('node-fetch');
const { OpenAIAPIKey } = require('./config');

class OpenAIAPI {
    static async generate_chat_response(user_message, conv_hist = []) {
        try {
            const api_key = OpenAIAPIKey;
            const endpoint = 'https://api.openai.com/v1/chat/completions';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${api_key}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo-1106',
                    messages: conv_hist.concat([{ role: 'user', content: user_message }]),
                    max_tokens: 150
                }),
            });
            const response_data = await response.json();

            if (!response_data.choices || response_data.choices.length === 0) {
                console.error('Błąd: Brak odpowiedzi od OpenAI', response_data);
                return 'I could not understand that. Could you please rephrase?';
            }

            return response_data.choices[0].message.content;
        } catch (error) {
            console.error('Error in generate_chat_response:', error);
            return 'Error occurred in generating response';
        }
    }
}

module.exports = { OpenAIAPI };