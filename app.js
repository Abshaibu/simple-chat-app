const username = document.querySelector('.username');
const logoutBtn = document.querySelector('.logout-btn');
const usernameForm = document.querySelector('.username-form');
const textForm = document.querySelector('.text-form');
const initials = document.querySelector('.initials');
const chatWrapper = document.querySelector('.chat-wrapper');
const chatBox = document.querySelector('.chat-box');
const chatHomepage = document.querySelector('.homepage');
const errorMessage = document.querySelector('.error-message');
const chatInput = document.querySelector('.chat-input');
const usernameInput = document.querySelector('.username-input');

// Sending messages
textForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    p.classList.add('message-text');
    console.log(chatInput.value);
    p.innerHTML = chatInput.value;
    console.log(p);
    chatBox.appendChild(p);
    chatInput.value = '';
})

// Getting started
usernameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (usernameInput.value === '') {
        errorMessage.style.display = 'block';
    } else {
        username.innerHTML = usernameInput.value;
        errorMessage.style.display = 'none';
        chatHomepage.style.display = 'none';
        chatWrapper.style.display = 'block';
        initials.innerHTML = username.innerHTML[0].toUpperCase();
        usernameInput.value = '';
    }
});

// Logging out
logoutBtn.addEventListener('click', () => {
    chatBox.innerHTML = '';
    chatWrapper.style.display = 'none';
    chatHomepage.style.display = 'block';
})