export const categories = [
  { id: 'CAMPERA', label: 'CAMPERA', layer: 3 },
  { id: 'PANTALÓN', label: 'PANTALÓN', layer: 2 },
  { id: 'CALZADO', label: 'CALZADO', layer: 1 },
  { id: 'ACCESORIOS', label: 'ACCESORIOS', layer: 4 },
]

// tags e info: la data de cada producto que aparece al darlo vuelta con "+ INFO"
export const products = [
  { id: 'jacket-1', category: 'CAMPERA', brand: 'Vans', name: 'Hellbound Snow Jacket · Warm Brown', tags: ['Técnica', 'Tonos tierra'], info: 'Campera de montaña en dos tonos arena. Tela técnica y corte holgado para bajar fuera de pista.' },
  { id: 'jacket-2', category: 'CAMPERA', brand: 'Vans', name: "90's Big Block 2L Jacket", tags: ['Retro 90s', 'Llamativa'], info: 'Rojo, gris y crema con chevrones en el pecho. Un corte que viene directo de los 90.' },
  { id: 'jacket-3', category: 'CAMPERA', brand: 'Vans', name: "90's Big Block 2L Jacket · Black", tags: ['Park', 'Contraste'], info: 'El mismo corte 90s, en negro con líneas blancas que se ven de lejos.' },
  { id: 'jacket-4', category: 'CAMPERA', brand: 'Vans', name: 'Hillgate Hooded Puffer · Oil Green', tags: ['Abrigada', 'Urbana'], info: 'Puffer gruesa con capucha, en verde oscuro. Abriga mucho y sirve también para la ciudad.' },
  { id: 'jacket-5', category: 'CAMPERA', brand: 'Vans', name: 'Kingvale 2L Jacket · Racing Red', tags: ['Park', 'Bloques de color'], info: 'Rojo, crema y negro en bloques grandes. Hecha para que te vean en el snowpark.' },
  { id: 'jacket-6', category: 'CAMPERA', brand: 'Vans', name: 'Take Up 2L GORE-TEX Jacket · Vintage Cocoa', tags: ['Técnica', 'Tono cálido'], info: 'GORE-TEX: membrana que no deja pasar el agua y deja respirar. Marrón cálido y sobrio.' },
  { id: 'jacket-7', category: 'CAMPERA', brand: 'Vans', name: 'Hi-Country 3L 2.0 Jacket · Grey Olive', tags: ['Oversize', 'Color suave'], info: 'Shell de tres capas, liviana y sin relleno. Verde menta suave y corte amplio.' },
  { id: 'jacket-8', category: 'CAMPERA', brand: 'Vans', name: 'Hi-Country 2L GORE-TEX Jacket · Dress Blue', tags: ['Técnica', 'Sobria'], info: 'GORE-TEX en azul marino. Te mantiene seco todo el día, sin llamar la atención.' },

  { id: 'pants-1', category: 'PANTALÓN', brand: 'Vans', name: 'EG Cargo 2L Snow Pants · Mossy Olive', tags: ['Cargo', 'Tonos tierra'], info: 'Cargo holgado en verde oliva, con bolsillos grandes. Cómodo y discreto.' },
  { id: 'pants-2', category: 'PANTALÓN', brand: 'Vans', name: 'EG Cargo 2L Snow Pants · Black', tags: ['Cargo', 'Básico'], info: 'El mismo cargo holgado, en negro. Combina con todo y no se nota la nieve.' },
  { id: 'pants-3', category: 'PANTALÓN', brand: 'Vans', name: 'Kingvale 2L Park Pants · Black', tags: ['Park', 'Corte suelto'], info: 'Pantalón de park: corte suelto para saltar y moverse en los rails. Negro.' },
  { id: 'pants-4', category: 'PANTALÓN', brand: 'Vans', name: 'Hellbound Snow Pants · Warm Brown', tags: ['Técnico', 'Tonos tierra'], info: 'Pantalón de montaña en tono tierra, de tela técnica. Hace juego con la Hellbound.' },
  { id: 'pants-5', category: 'PANTALÓN', brand: 'Vans', name: 'Kingvale 2L Park Pants · Racing Red', tags: ['Park', 'Llamativo'], info: 'Corte de park en rojo con rodillas negras. Imposible pasar desapercibido.' },
  { id: 'pants-6', category: 'PANTALÓN', brand: 'Vans', name: 'Kingvale 2L Park Pants · Bungee Cord', tags: ['Park', 'Dos tonos'], info: 'Corte de park en dos tonos de gris verdoso. Holgado, con colores apagados.' },
  { id: 'pants-7', category: 'PANTALÓN', brand: 'Vans', name: 'MTE High-Country 3L Pants · Gothic Olive', tags: ['Técnico', 'Recto'], info: 'Tres capas, corte recto y holgado, en un tono tierra. Liviano y de alta gama.' },
  { id: 'pants-8', category: 'PANTALÓN', brand: 'Vans', name: 'Kingvale 2L Snow Pants · Grape Leaf', tags: ['Simple', 'Cómodo'], info: 'Verde oliva, con puños elásticos que no dejan entrar nieve. Fácil de usar.' },

  { id: 'boot-1', category: 'CALZADO', brand: 'Vans', name: 'Hi-Standard OG · Black / Gum', tags: ['Clásica', 'Cordones'], info: 'La bota clásica de Vans: negra, con cordones y suela de goma marrón.' },
  { id: 'boot-2', category: 'CALZADO', brand: 'Vans', name: 'Aura OG · Grape Leaf', tags: ['Técnica', 'BOA'], info: 'Se ajusta con BOA, una ruedita en vez de cordones. Crema y oliva, firme para bajar fuerte.' },
  { id: 'boot-3', category: 'CALZADO', brand: 'Vans', name: 'Encore OG · Black', tags: ['Blanda', 'Cordones'], info: 'Negra con la franja Vans blanca. Blanda y cómoda para hacer trucos.' },
  { id: 'boot-4', category: 'CALZADO', brand: 'Vans', name: 'Hi-Standard OG · Red / True White', tags: ['Clásica', 'Llamativa'], info: 'La Hi-Standard de siempre, en rojo y blanco. Se ve de lejos.' },
  { id: 'boot-5', category: 'CALZADO', brand: 'Vans', name: 'Invado OG · Marshmallow / Racing Red', tags: ['Park', 'BOA + cordones'], info: 'Blanca con detalles rojos. Combina cordones y BOA para ajustarla rápido.' },
  { id: 'boot-6', category: 'CALZADO', brand: 'Vans', name: 'Super Standard · Incense / Black', tags: ['Cordones', 'Tonos arena'], info: 'Arena y negro, con cordones clásicos. Cómoda y de alta gama.' },
  { id: 'boot-7', category: 'CALZADO', brand: 'Vans', name: 'Encore Pro BOA · Port Royale', tags: ['Pro', 'Doble BOA'], info: 'Bordó con la franja crema y dos ruedas BOA. Muy técnica, para riders avanzados.' },
  { id: 'boot-8', category: 'CALZADO', brand: 'Vans', name: 'Hi-Standard OG · Oatmeal', tags: ['Blanda', 'Cordones'], info: 'Color avena con la franja marrón. Blanda y simple, cómoda para aprender.' },

  { id: 'beanie-1', category: 'ACCESORIOS', brand: 'Vans', name: 'Core Basic Cuff Beanie · Heather Grey', tags: ['Básico', 'Neutro'], info: 'Gorro gris de puño doblado. Simple, va con cualquier look.' },
  { id: 'beanie-2', category: 'ACCESORIOS', brand: 'Vans', name: 'Original Shallow Cuff Beanie · Glazed Ginger', tags: ['Color', 'Corto'], info: 'Naranja intenso y de puño bajo. Un detalle de color que se nota.' },
  { id: 'beanie-3', category: 'ACCESORIOS', brand: 'Vans', name: 'Knu Patch Beanie · Black', tags: ['Parche Vans', 'Negro'], info: 'Negro con el parche de Vans al frente. Discreto pero con actitud.' },
  { id: 'beanie-4', category: 'ACCESORIOS', brand: 'Vans', name: 'Plaimor Beanie · Poppy Ember', tags: ['Peludo', 'Rayas'], info: 'Rayas rosa y bordó, tejido peludo. El gorro más llamativo del catálogo.' },
  { id: 'beanie-5', category: 'ACCESORIOS', brand: 'Vans', name: 'Core Basic Cuff Beanie · Blue', tags: ['Color', 'Básico'], info: 'El gorro básico, en azul eléctrico. Se ve desde lejos en la pista.' },
  { id: 'beanie-6', category: 'ACCESORIOS', brand: 'Vans', name: 'Classic Cuff Beanie · Brown', tags: ['Clásico', 'Tono cálido'], info: 'Marrón con el parche clásico de Vans. Cálido y con estilo.' },
  { id: 'beanie-7', category: 'ACCESORIOS', brand: 'Vans', name: 'Cable Knit Pom Beanie · Black', tags: ['Pompón', 'Tejido grueso'], info: 'Tejido trenzado negro con pompón. Abriga mucho y suma un toque fashion.' },
  { id: 'beanie-8', category: 'ACCESORIOS', brand: 'Vans', name: 'Cable Knit Pom Beanie · Marshmallow', tags: ['Pompón', 'Blanco'], info: 'Tejido trenzado blanco con pompón. Grueso y abrigado.' },
].map(product => ({ ...product, image: `/products/${product.id}.jpg` }))
