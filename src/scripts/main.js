'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise 2 rejected'));
  }, 3000);
});

function addMessage(text, isError = false) {
  const div = document.createElement('div');

  div.className = isError ? 'message error-message' : 'message';
  div.textContent = text;
  document.body.appendChild(div);
}

promise1
  .then(() => addMessage('Promise was resolved!'))
  .catch(() => addMessage('Promise was rejected!', true));

promise2
  .then(() => addMessage('Promise was resolved!'))
  .catch(() => addMessage('Promise was rejected!', true));
