console.log("Hellorino");

const whole = document.querySelector('body');
const para = document.createElement('p');
para.textContent = "Hey I'm red!"
para.style.color = 'red';
whole.appendChild(para);

const bluerino = document.createElement('h3');
bluerino.style.color = 'blue';
bluerino.textContent = "I'm a blue h3!";
whole.appendChild(bluerino);

const diverino = document.createElement('div');
diverino.style.border = "black solid";
diverino.style.backgroundColor = 'pink';
whole.appendChild(diverino);

const h_erino = document.createElement('h1');
h_erino.textContent = "I'm in a div";
diverino.appendChild(h_erino);

const p_erino = document.createElement('p');
p_erino.textContent = "ME TOO!";
diverino.appendChild(p_erino);