document.getElementById('btnSaludar').addEventListener('click', function () {
  const mensaje = document.getElementById('mensaje');
  mensaje.textContent = '¡Hola! Gracias por hacer clic. 🎉';
});

document.getElementById('btnDarkMode').addEventListener('click', function () {
  document.body.classList.toggle('dark');
  this.textContent = document.body.classList.contains('dark') ? '☀️ Modo claro' : '🌙 Modo oscuro';
});
