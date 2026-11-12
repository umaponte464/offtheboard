# OFF THE BOARD

Videojuego web de Contenidos y Creatividad III (Lic. en Comunicación Digital, UP).
Un rental de snowboard de Vans: entran 5 riders, leés la onda de cada uno y le armás el look con productos Vans.

## Cómo correrlo

```bash
npm install
npm run dev
```

## Pantallas (React Router)

| Ruta | Pantalla | Necesita sesión |
|---|---|---|
| `/` | Inicio | No |
| `/como-jugar` | Cómo jugar | No |
| `/ingresar` | Ingresar / crear perfil | No |
| `/jugar` | Juego | Sí |
| `/resultado` | Resultado final de la partida | Sí |
| `/perfil` | Perfil, récord e historial | Sí |
| cualquier otra | 404 | No |

`ProtectedRoute` revisa si hay sesión iniciada. Si no la hay, manda a `/ingresar` y después del login vuelve a la página que se quería abrir.

## Estructura

```
src/
  App.jsx               rutas + estado del usuario y de la última partida
  main.jsx              monta la app dentro de BrowserRouter
  data/
    products.js         catálogo Vans y categorías
    riders.js           datos de cada rider y la nota de cada producto para él
  utils/
    score.js            calcula el puntaje y el veredicto
    storage.js          login simulado e historial con localStorage
  components/
    Header, Footer, Button, Hero, HowToPlay, Login, ProtectedRoute,
    Game, RiderPreview, RiderLook, ProductSection, ProductCard,
    RoundResult, Result, Profile, NotFound
```

## La partida

Una partida son 5 riders seguidos. A más nivel, más productos para elegir y menos pistas:

| Rider | Nivel | Qué ves |
|---|---|---|
| 01 · FREERIDE | 1 | 4 opciones por categoría, su onda, una descripción clara y + INFO en los productos |
| 02 · PARK | 2 | 5 opciones por categoría, su onda, una descripción corta y + INFO en los productos |
| 03 · OLD SCHOOL | 3 | 6 opciones por categoría, "ONDA SECRETA" y una pista rebuscada |
| 04 · STREET | 4 | 7 opciones por categoría, "ONDA SECRETA" y una pista rebuscada |
| 05 · ROOKIE | 5 | 8 opciones por categoría, "ONDA SECRETA" y una pista rebuscada |

### Tutorial

Al entrar a `/jugar` se abre un tutorial de 4 pasos (`Tutorial.jsx`) antes del rider 01: cómo leer al rider, cómo probarle la ropa,
un ejemplo de puntaje (un producto que es 10 y otro que es 3 para el rider 01) y cómo sube la dificultad.
Se puede saltar, se cierra con Escape y se vuelve a abrir con el botón "? TUTORIAL" durante la partida.
Usa la etiqueta `<dialog>` de HTML, que ya trae el foco atrapado adentro y el cierre con Escape.

### + INFO en los productos

En los riders 01 y 02 (`productInfo: true` en `riders.js`), cada producto tiene un botón "+ INFO" que da vuelta la tarjeta
y muestra la onda del producto: etiquetas (`tags`) y una descripción corta (`info`), cargadas en `products.js`.
Desde el rider 03 el botón desaparece: es parte de la dificultad, igual que la onda secreta.

Mientras mirás los productos, el rider se los va probando (al pasar el mouse o el foco del teclado), y lo que elegís le queda puesto.
Después de cada look aparece su veredicto (`RoundResult`) y se revela la onda del rider.
Al final, `/resultado` muestra el promedio de los 5 y se guarda en el historial.

## Cómo se calcula el puntaje

Cada producto tiene una nota del 0 al 10 para cada rider, según su onda (`src/data/riders.js`).
El puntaje de cada look es el promedio de sus 4 notas y el de la partida es el promedio de los 5 looks. Un producto con nota 7 o más cuenta como acierto.
El veredicto depende del puntaje: 9 o más "Le clavaste la onda", 7 o más "Buen ojo", 5 o más "Casi", menos de 5 "No era por ahí".

## Cuenta y perfil

Para jugar hay que crear una cuenta con nombre, email (por ejemplo una cuenta de Gmail) y contraseña.
El inicio de sesión es simulado: las cuentas y las partidas se guardan en `localStorage`, o sea en el navegador.
No hay servidor ni seguridad real. Sirve para esta etapa y para mostrar el flujo de cuenta, récord e historial.

## Capas del rider

La imagen del rider se arma con capas, como en Photoshop:
la foto base (el rider de negro) va abajo y cada producto elegido suma encima su imagen con fondo transparente.

- Catálogo: 8 camperas, 8 pantalones, 8 calzados y 8 accesorios. Cada rider muestra solo los de su nivel (`products` en `riders.js`).
- Cada rider tiene su carpeta (`public/riders/rider-01/` a `rider-05/`) con la foto base y una capa por producto, con el id del producto como nombre (`jacket-1.webp`, `pants-1.webp`...).
- Si una capa todavía no existe, no se muestra y el juego sigue andando.
- Todas tienen el mismo tamaño y encuadre que la foto base (`base.jpg`), por eso encajan una sobre otra.
- Orden de apilado: calzado, pantalón, campera, accesorio.
- Cada capa se hace editando la foto base con IA (una edición por producto, con la foto real del producto como referencia) y recortando solo lo que cambió.
- Las fotos base de los riders 02 a 05 se generaron con IA en Figma.

Las fotos de producto están en `public/products/`, así el juego no depende de la web de Vans.

## Stack

React, React Router, Vite, CSS propio. Sin librerías extra.

## Proceso con IA

Usé la IA como copiloto: le pedía ayuda cuando no sabía cómo resolver algo puntual. La idea, la mecánica, la estética y las decisiones del juego fueron mías.

**1. Que la ropa se vea puesta en el rider**

> "No sé cómo hacer que la ropa que elijo se vea puesta en el rider sin sacar una foto por cada combinación."

La solución fueron las capas: una foto base del rider vestido de negro y, encima, una imagen con fondo transparente por cada producto. El juego las apila en orden (calzado, pantalón, campera y accesorio), así cualquier combinación se arma sola. Además, con solo pasar el mouse por un producto, el rider ya se lo prueba.

**2. Explicar los productos a quien no sabe de snow**

> "¿Cómo le muestro a alguien que no sabe de snow qué producto va con cada onda, sin llenar la pantalla de texto?"

Esto salió de la devolución de la preentrega. Lo resolví con tarjetas que se dan vuelta con el botón **+ INFO** y muestran dos etiquetas y una línea sobre el producto. Al principio pensé en que se dieran vuelta al pasar el mouse, pero eso ya lo usaba para probarle la ropa al rider y en el celular no existe, así que quedó como botón.
