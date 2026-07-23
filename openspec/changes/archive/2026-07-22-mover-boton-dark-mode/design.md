## Context

El proyecto es una página web estática (`clase_03/`) con un layout simple: `body` con gradiente purple que centra una `.container` (card blanca). El botón de modo oscuro está dentro de `.container` como último hijo. Se quiere reposicionar fuera de la card para que viva sobre el gradiente de fondo.

Estado actual:
- `body`: `display: flex`, centrado vertical y horizontal, gradiente `#667eea → #764ba2`
- `.container`: card blanca, max-width 400px, centrada
- `#btnDarkMode`: dentro de `.container`, estilo gris sólido (`#6b7280`)
- JS: toggle de clase `.dark` en `body`, sin persistencia

## Goals / Non-Goals

**Goals:**
- Sacar el botón del contenedor `.container` y posicionarlo en la esquina superior derecha
- Estilo semi-transparente que se integre con el gradiente de fondo
- Compatibilidad nativa con Firefox (sin `backdrop-filter`)
- Responsive en móviles

**Non-Goals:**
- No se modifica la lógica del toggle (JS intacto)
- No se agrega persistencia del estado (localStorage)
- No se cambia el diseño de la card ni otros elementos
- No se usa `backdrop-filter` (incompatible con Firefox sin flag)

## Decisions

### 1. Posicionamiento: `position: absolute` sobre `position: fixed`

**Decisión**: Usar `position: absolute` en el botón, con el body como контекстode posicionamiento.

**Alternativas consideradas**:
- `position: fixed`: hubiera mantenido el botón visible al hacer scroll, pero en una página corta como esta no es necesario y complica el responsive
- `position: absolute` en `.container`: habría requerido `position: relative` en la card y el botón habría estado limitado al área de la card

**Razón**: El body es el elemento positioning context más natural. El botón se posiciona respecto al viewport (que es el body), queda en la esquina sin interferir con el flex center de `.container`.

### 2. Estilo: Semi-transparente sólido sobre glassmorphism con blur

**Decisión**: Usar `background: rgba(255,255,255,0.15)` con borde semi-transparente, sin `backdrop-filter`.

**Alternativas consideradas**:
- `backdrop-filter: blur(8px)`: efecto visual superior, pero requiere flag manual en Firefox (`about:config → layout.css.backdrop-filter.enabled`)
- Fondo sólido color: se vería como un botón normal, no se integra con el gradiente

**Razón**: `rgba` blanco al 15% sobre el purple crea un tono lila sutil que se integra visualmente. Funciona en todos los navegadores sin configuración adicional.

### 3. Responsive: Ajustar inset en mobile

**Decisión**: En `@media (max-width: 480px)`, cambiar `top` y `right` a `10px` para evitar que el botón se pegue al borde de la pantalla.

## Risks / Trade-offs

- **`rgba` blanco sobre gradiente oscuro** → El contraste del texto blanco sobre fondo semi-transparente puede ser bajo en algunos monitores. Mitigación: el gradiente es lo suficientemente oscuro para que el blanco al 15% genere contraste aceptable.
- **Sin persistencia** → El modo oscuro se pierde al recargar. Esto es intencional (fuera de scope), pero se documenta como limitación conocida.
- **Z-index** → El botón necesita `z-index: 10` para asegurar que quede sobre el gradiente y no debajo de `.container`. No hay otros elementos con z-index que compitan.
