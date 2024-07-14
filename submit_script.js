document.getElementById('submit-button').addEventListener('click', function() {
  const password = document.getElementById('password-input').value;
  if (password === '秋葉原') {
    window.location.href = 'toppo.html';
  } else {
    alert('Incorrect password');
  }
});
