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
    p.innerHTML = chatInput.value;
    chatBox.appendChild(p);
    chatInput.value = '';
    localStorage.setItem('chat-box', chatBox.innerHTML);
    localStorage.setItem('chat-init', initials.innerHTML);
    localStorage.setItem('chat-username', username.innerHTML);
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
    }
});

// Logging out
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('chat-box');
    localStorage.removeItem('chat-init');
    localStorage.removeItem('chat-username');
    usernameInput.value = '';
    chatBox.innerHTML = '';
    chatHomepage.style.display = 'block';
    chatWrapper.style.display = 'none';
})

// Setting Local Storage
if (localStorage.getItem('chat-box')) {
    chatHomepage.style.display = 'none';
    chatWrapper.style.display = 'block';
    initials.innerHTML = localStorage.getItem('chat-init');
    username.innerHTML = localStorage.getItem('chat-username');
    chatBox.innerHTML = localStorage.getItem('chat-box');
} else {
    chatHomepage.style.display = 'block';
    chatWrapper.style.display = 'none';
}