process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const express = require('express');
const path = require('path');
const { OpenAIAPI } = require('./openai');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/get_response', async (req, res) => {
    const user_message = req.body.user_message;
    const chat_response = await OpenAIAPI.generate_chat_response(user_message);
    res.json({ response: chat_response });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});