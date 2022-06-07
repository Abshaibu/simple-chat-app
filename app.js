const username = document.querySelector('.username');
const logoutBtn = document.querySelector('.logout-btn');
const usernameForm = document.querySelector('.username-form');
const textForm = document.querySelector('.text-form');
const initials = document.querySelector('.initials');
const chatWrapper = document.querySelector('.chat-wrapper');
const chatBox = document.querySelector('.chat-box');
const chatHomepage = document.querySelector('.homepage');
const typingIndicator = document.querySelector('.typing');
const errorMessage = document.querySelector('.error-message');
const chatInput = document.querySelector('.chat-input');
const usernameInput = document.querySelector('.username-input');

// Displaying typing indicator on chat based on input value
chatInput.addEventListener('keyup', () => {
    if (chatInput.value != '') {
        typingIndicator.style.display = 'block';
    } else {
        typingIndicator.style.display = 'none';
    }
})

// Sending messages
textForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    // setting current user typing styling
    if (chatInput.getAttribute('placeholder') === 'other user type here') {
        p.classList.add('message-text');
        chatInput.setAttribute('placeholder', `${username.innerHTML} type here`);
    } else {
        p.classList.add('second-user');
        chatInput.setAttribute('placeholder', 'other user type here');
    }
    p.innerHTML = chatInput.value;
    chatBox.appendChild(p);
    chatInput.value = '';
    localStorage.setItem('chat-box', chatBox.innerHTML);
    localStorage.setItem('chat-input', chatInput.getAttribute('placeholder'));
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
        chatInput.setAttribute('placeholder', `${username.innerHTML} type here`);
    }
});

// Logging out
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('chat-box');
    localStorage.removeItem('chat-init');
    localStorage.removeItem('chat-input');
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
    chatInput.setAttribute('placeholder', localStorage.getItem('chat-input'));

} else {
    chatHomepage.style.display = 'block';
    chatWrapper.style.display = 'none';
}