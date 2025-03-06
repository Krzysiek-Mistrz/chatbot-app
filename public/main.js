const chat_log = document.getElementById('chat_logs');
const user_input = document.getElementById('user_input');

function send_message() {
    const message = user_input.value;
    user_input.value = '';

    chat_log.innerHTML += `<p>${message}</p>`;

    get_response(message);

    user_input.value = '';
}

function get_response(user_message) {
    fetch(`/get_response`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_message })
    })
    .then(response => response.json())
    .then(data => {
        chat_log.innerHTML += `<p>${data.response}</p>`;
    })
    .catch(error => console.error('Error:', error));
}