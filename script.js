// script.js
document.getElementById('btn').onclick = () => {
  document.getElementById('time').textContent = 'Local time: ' + new Date().toLocaleString();
};
