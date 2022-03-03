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

const diverino = document