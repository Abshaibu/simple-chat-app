const username = document.querySelector('.username');
const logoutBtn = document.querySelector('.logout-btn');
const startBtn = document.querySelector('.start-btn');
const initials = document.querySelector('.initials');
const chatWrapper = document.querySelector('.chat-wrapper');
const chatHomepage = document.querySelector('.homepage');
const errorMessage = document.querySelector('.error-message');
const chatInput = document.querySelector('.chat-input').value;
const usernameInput = document.querySelector('.username-input');

// Getting started
startBtn.addEventListener('click', () => {
    console.log('clicked');
    console.log(usernameInput);
    if (usernameInput.innerHTML === '') {
        errorMessage.style.display = 'block';
    } else {
        username.innerHTML = usernameInput.trim();
        console.log('clicked');
        console.log(usernameInput);
        errorMessage.style.display = 'none';
        chatHomepage.style.display = 'none';
        chatWrapper.style.display = 'block';
        initials.innerHTML = username.innerHTML[0];
    }
});

logoutBtn.addEventListener('click', () => {
    chatWrapper.style.display = 'none';
    chatHomepage.style.display = 'block';
})