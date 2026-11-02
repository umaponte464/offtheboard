# Registro de iteración con IA

Registro de los pedidos que le hice a Claude (Anthropic) durante el desarrollo de Off The Board
y qué hice con cada resultado.

| Etapa | Qué le pedí | Qué resultó / qué decidí yo |
|---|---|---|
| Concepto | Ideas de mecánica para un juego de marca con Vans. | Elegí el rental de snowboard: leer la onda del rider y armarle el look. |
| Momento visual | Armar los mockups en Figma (Inicio, Cómo jugar, Juego, Veredicto, Resultado) a 375px y 1440px. | Definí paleta Vans (rojo, negro, blanco, crema), tipografías y puntaje de 1 a 10. |
| Momento 1 | Crear el proyecto React organizado por componentes (Header, Hero, Button, Footer). | Proyecto con Vite. Aprendí componentes y props. |
| Momento 1 | Sumar interacción: elegir productos por categoría con useState. | Filtros por categoría y bloque "Look armado". |
| Momento 2 | Revisar el proyecto contra la consigna del M2 y la devolución del profesor. | Faltaba React Router, el login y que el rider quedara completo. |
| Momento 2 | Pasar la navegación a React Router con rutas protegidas. | Rutas `/`, `/como-jugar`, `/ingresar`, `/jugar`, `/resultado`, `/perfil` y 404. |
| Momento 2 | Agregar cuenta e inicio de sesión para guardar récords e historial. | Cuenta con nombre, email y contraseña (login simulado con localStorage). No se puede jugar sin cuenta. |
| Momento 2 | Que el puntaje sea real y que la ropa elegida se vea sobre el rider. | Nota de 0 a 10 por producto según la onda del rider, promedio final. Sistema de capas en vez de una imagen por combinación. |
| Momento 2 | Pasar a 4 productos por categoría y dejar el rider 01 completo. | 16 productos Vans. Cada prenda se generó con IA sobre la foto base usando la foto real del producto, y se recortó como capa: 16 capas arman los 256 looks posibles. |
| Momento 3 | Sumar más riders con dificultad creciente. | Partida de 3 riders: a más nivel, pistas más cortas y rebuscadas. Veredicto por rider y resultado final con el promedio. |
| Momento 3 | Generar las fotos base de los riders 02 (park) y 03 (old school). | Las generé con IA en Figma, todos vestidos de negro para que la ropa se lea por capas. Pedí sacar una marca que aparecía en la tabla. |
| Momento 3 | Que la ropa se vea sobre el rider mientras miro las opciones. | El rider se prueba el producto al pasar el mouse o el foco, y en mobile queda fijo arriba mientras elegís. |
| Momento 3 | Generar las capas de ropa de los riders nuevos. | Cada prenda se generó con IA (Gemini y Weave) sobre la foto base del rider, usando la foto real del producto, y se recortó como capa con fondo transparente. |
| Momento 3 | Que a más nivel haya más artículos para elegir, sin tocar el rider 01. | Sumé 8 productos Vans reales (2 por categoría): el rider 01 sigue con 4 opciones, el 02 tiene 5 y el 03 tiene 6. |
