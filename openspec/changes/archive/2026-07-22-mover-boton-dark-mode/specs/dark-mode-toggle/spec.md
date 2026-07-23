## ADDED Requirements

### Requirement: Botón de modo oscuro posicionado fuera del contenedor

El botón de modo oscuro SHALL estar posicionado fuera del elemento `.container`, como hermano directo del `<body>`, usando `position: absolute` con `top: 20px` y `right: 20px`.

#### Scenario: Botón visible en esquina superior derecha
- **WHEN** la página carga
- **THEN** el botón de modo oscuro se muestra en la esquina superior derecha de la pantalla, fuera de la card

#### Scenario: Botón no interfiere con el layout de la card
- **WHEN** el botón está posicionado con `position: absolute`
- **THEN** la card `.container` permanece centrada vertical y horizontalmente sin alteración

### Requirement: Estilo semi-transparente adaptable al gradiente de fondo

El botón SHALL usar un fondo semi-transparente `rgba(255, 255, 255, 0.15)` con borde `1px solid rgba(255, 255, 255, 0.2)`, color de texto blanco, y `border-radius: 20px`.

#### Scenario: Estilo en modo claro
- **WHEN** el modo oscuro está desactivado
- **THEN** el botón muestra fondo semi-transparente blanco sobre el gradiente purple, con texto blanco y borde sutil

#### Scenario: Hover incrementa opacidad
- **WHEN** el usuario posiciona el cursor sobre el botón
- **THEN** el fondo cambia a `rgba(255, 255, 255, 0.25)` con transición de 0.3s

#### Scenario: Estilo en modo oscuro
- **WHEN** el modo oscuro está activado
- **THEN** el botón mantiene su estilo semi-transparente sobre el gradiente oscuro `#1a1a2e → #16213e`

### Requirement: Compatibilidad con Firefox

El botón SHALL funcionar nativamente en Firefox sin requerir configuración manual de flags.

#### Scenario: Renderizado en Firefox
- **WHEN** la página se abre en Firefox
- **THEN** el botón se renderiza con su estilo semi-transparente correctamente, sin depender de `backdrop-filter`

### Requirement: Responsive en móviles

En pantallas menores a 480px, el botón SHALL usar `top: 10px` y `right: 10px` para evitar solapamiento con los bordes de la pantalla.

#### Scenario: Botón en pantalla pequeña
- **WHEN** el ancho de la ventana es menor a 480px
- **THEN** el botón se reposiciona a `top: 10px` y `right: 10px`
