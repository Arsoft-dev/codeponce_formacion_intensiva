## Why

El botón de modo oscuro está actualmente dentro del contenedor `.container` (card), mezclado con el contenido principal. Se quiere sacar del flujo del documento y posicionarlo en la esquina superior derecha del fondo, con un estilo que se integre visualmente con el gradiente de fondo (glassmorphism sutil) en lugar de verse como un elemento más de la card.

## What Changes

- Se mueve el `<button id="btnDarkMode">` fuera de `.container` para que sea hermano directo del body
- Se cambia la posición del botón a `position: absolute` con `top: 20px` y `right: 20px`
- Se reemplaza el estilo sólido gris (`#6b7280`) por un fondo semi-transparente (`rgba(255,255,255,0.15)`) con borde sutil
- Se agrega efecto hover con opacidad incrementada
- Se asegura compatibilidad nativa con Firefox (sin `backdrop-filter`)
- Se ajusta el responsive para móviles (`top: 10px`, `right: 10px`)

## Capabilities

### New Capabilities
- `dark-mode-toggle`: Estilo y posicionamiento del botón de modo oscuro fuera del contenedor principal, con diseño adaptado al gradiente de fondo

### Modified Capabilities

## Impact

- **Archivos afectados**: `clase_03/index.html` (mover botón en el DOM), `clase_03/style.css` (re-estilizar botón + responsive)
- **Sin cambios en**: `clase_03/script.js` (el JS busca por ID, funciona sin importar la posición en el DOM)
- **Dependencias**: Ninguna nueva
- **Navegadores**: Compatible con todos los navegadores modernos incluyendo Firefox (sin dependencia de `backdrop-filter`)
