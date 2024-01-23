const messages = document.getElementById('messages');
const userInput = document.getElementById('user-input');

// Sample bot responses
const botResponses = [
	'Hello! How can I help you?',
	'Sure, I can do that.',
	'I don\'t know how to do that, I\'m sorry.',
	'I\'m just a simple chatbot, I can\'t do much.',
	'Goodbye! Have a great day!'
];

// Handle form submission
document.getElementById('chat-form').addEventListener('submit', function(event) {
	event.preventDefault();

	// Generate bot response
	const botResponse = generateBotResponse(userInput.value);

	// Display user message and bot response
	displayMessage('You: ' + userInput.value);
	displayMessage('Chatbot: ' + botResponse);

	// Clear user input
	userInput.value = '';
});

// Generate bot response based on user input
function generateBotResponse(input) {
	// Implement NLP algorithm or use third-party service here

	// For simplicity, choose a random bot response
	const index = Math.floor(Math.random() * botResponses.length);
	return botResponses[index];
}

// Display message in chat container
function displayMessage(message) {
	const div = document.createElement('div');
	div.textContent = message;
	messages.appendChild(div);
	messages.scrollTop = messages.scrollHeight;
}