
const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const username = document.querySelector('#username');
const btn1 = document.querySelector('#sign-up-btn');
const btn2 = document.querySelector('#sign-in-btn');
const para = document.querySelector('p');
const user = document.querySelector('.user');
const underline = document.querySelector('.underline');


btn2.addEventListener('click', () => {
    h1.innerHTML = 'Sign In';
    username.style.display = 'none';
    user.style.display = 'none';
    btn2.setAttribute('class', 'active');
    btn1.setAttribute('class', 'disable');
    para.innerText = 'Forget Password';
    underline.style.transform = 'translateX(85%)';
});

btn1.addEventListener('click', () => {
    h1.innerHTML = 'Sign Up';
    username.style.display = 'block';
    user.style.display = 'block';
    btn1.setAttribute('class', 'active');
    btn2.setAttribute('class', 'disable');
    para.innerText = 'Password Suggestion';
    underline.style.transform = 'translateX(0%)';
});


