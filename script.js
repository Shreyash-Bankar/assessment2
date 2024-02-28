document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('showFormButton').addEventListener('click', function() {
        const form = document.getElementById('contactForm');
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    });

    document.addEventListener('submit', function(e) {
        if (e.target && e.target.id === 'contactForm') {
            e.preventDefault();
            // Show success message
            alert('Form submitted successfully');
            e.target.reset();
        }
    });

    const chatWidgetMinimized = document.getElementById('chatWidgetMinimized');
    const chatWidgetExpanded = document.getElementById('chatWidgetExpanded');
    const chatDisplay = document.getElementById('chatDisplay');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    let firstMessageSent = false;

    chatWidgetMinimized.addEventListener('click', function() {
        chatWidgetExpanded.style.display = chatWidgetExpanded.style.display === 'block' ? 'none' : 'block';
        if (!firstMessageSent) {
            addBotMessage('Hi!');
            firstMessageSent = true;
        }
    });

    sendButton.addEventListener('click', function() {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;
        addUserMessage(userMessage);
        userInput.value = '';
        setTimeout(function() {
            addBotMessage(userMessage.toUpperCase());
        }, 500); // Simulating a bot response after a delay
    });

    function addUserMessage(message) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-message');
        userDiv.textContent = message;
        chatDisplay.appendChild(userDiv);
        scrollToBottom();
    }

    function addBotMessage(message) {
        const botDiv = document.createElement('div');
        botDiv.classList.add('bot-message');
        botDiv.textContent = message;
        chatDisplay.appendChild(botDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const projectButtons = document.querySelectorAll('.project-button');
    const projects = document.querySelectorAll('.project');
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectToShow = this.getAttribute('data-project');
            projects.forEach(project => {
                if (project.getAttribute('data-project') === projectToShow) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});
