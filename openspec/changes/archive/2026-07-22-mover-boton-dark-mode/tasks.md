## 1. HTML - Reubicar el botón

- [x] 1.1 Mover el `<button id="btnDarkMode">` fuera de `.container`, colocándolo como hermano directo del `<body>` (antes de `.container`)
- [x] 1.2 Verificar que el `script.js` se carga después del botón (ya es así en la línea 18)

## 2. CSS - Re-estilizar el botón

- [x] 2.1 Reemplazar los estilos actuales de `#btnDarkMode` (líneas 80-87) con: `position: absolute`, `top: 20px`, `right: 20px`, `background: rgba(255,255,255,0.15)`, `border: 1px solid rgba(255,255,255,0.2)`, `color: white`, `border-radius: 20px`, `padding: 10px 20px`, `z-index: 10`, `font-size: 1rem`, `cursor: pointer`, `transition: background 0.3s ease`
- [x] 2.2 Actualizar el hover de `#btnDarkMode` a `background: rgba(255,255,255,0.25)`
- [x] 2.3 Agregar regla `#btnDarkMode` dentro de `@media (max-width: 480px)` con `top: 10px` y `right: 10px`
- [x] 2.4 Eliminar `margin-top: 0.75rem` del estilo base de `#btnDarkMode` (ya no aplica fuera del flow)

## 3. Verificación

- [ ] 3.1 Abrir la página en Firefox y verificar que el botón se renderiza correctamente en la esquina superior derecha
- [ ] 3.2 Verificar que el toggle de modo oscuro funciona (clase `.dark` se aplica al body)
- [ ] 3.3 Verificar responsive en ventana menor a 480px
- [ ] 3.4 Verificar que la card `.container` sigue centrada correctamente
