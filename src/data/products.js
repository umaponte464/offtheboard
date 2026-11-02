export const categories = [
  { id: 'CAMPERA', label: 'CAMPERA', layer: 3 },
  { id: 'PANTALÓN', label: 'PANTALÓN', layer: 2 },
  { id: 'CALZADO', label: 'CALZADO', layer: 1 },
  { id: 'ACCESORIOS', label: 'ACCESORIOS', layer: 4 },
]

export const products = [
  { id: 'jacket-1', category: 'CAMPERA', brand: 'Vans', name: 'Hellbound Snow Jacket · Warm Brown' },
  { id: 'jacket-2', category: 'CAMPERA', brand: 'Vans', name: "90's Big Block 2L Jacket" },
  { id: 'jacket-3', category: 'CAMPERA', brand: 'Vans', name: "90's Big Block 2L Jacket · Black" },
  { id: 'jacket-4', category: 'CAMPERA', brand: 'Vans', name: 'Hillgate Hooded Puffer · Oil Green' },
  { id: 'jacket-5', category: 'CAMPERA', brand: 'Vans', name: 'Kingvale 2L Jacket · Racing Red' },
  { id: 'jacket-6', category: 'CAMPERA', brand: 'Vans', name: 'Take Up 2L GORE-TEX Jacket · Vintage Cocoa' },
  { id: 'jacket-7', category: 'CAMPERA', brand: 'Vans', name: 'Hi-Country 3L 2.0 Jacket · Grey Olive' },
  { id: 'jacket-8', category: 'CAMPERA', brand: 'Vans', name: 'Hi-Country 2L GORE-TEX Jacket · Dress Blue' },

  { id: 'pants-1', category: 'PANTALÓN', brand: 'Vans', name: 'EG Cargo 2L Snow Pants · Mossy Olive' },
  { id: 'pants-2', category: 'PANTALÓN', brand: 'Vans', name: 'EG Cargo 2L Snow Pants · Black' },
  { id: 'pants-3', category: 'PANTALÓN', brand: 'Vans', name: 'Kingvale 2L Park Pants · Black' },
  { id: 'pants-4', category: 'PANTALÓN', brand: 'Vans', name: 'Hellbound Snow Pants · Warm Brown' },
  { id: 'pants-5', category: 'PANTALÓN', brand: 'Vans', name: 'Kingvale 2L Park Pants · Racing Red' },
  { id: 'pants-6', category: 'PANTALÓN', brand: 'Vans', name: 'Kingvale 2L Park Pants · Bungee Cord' },
  { id: 'pants-7', category: 'PANTALÓN', brand: 'Vans', name: 'MTE High-Country 3L Pants · Gothic Olive' },
  { id: 'pants-8', category: 'PANTALÓN', brand: 'Vans', name: 'Kingvale 2L Snow Pants · Grape Leaf' },

  { id: 'boot-1', category: 'CALZADO', brand: 'Vans', name: 'Hi-Standard OG · Black / Gum' },
  { id: 'boot-2', category: 'CALZADO', brand: 'Vans', name: 'Aura OG · Grape Leaf' },
  { id: 'boot-3', category: 'CALZADO', brand: 'Vans', name: 'Encore OG · Black' },
  { id: 'boot-4', category: 'CALZADO', brand: 'Vans', name: 'Hi-Standard OG · Red / True White' },
  { id: 'boot-5', category: 'CALZADO', brand: 'Vans', name: 'Invado OG · Marshmallow / Racing Red' },
  { id: 'boot-6', category: 'CALZADO', brand: 'Vans', name: 'Super Standard · Incense / Black' },
  { id: 'boot-7', category: 'CALZADO', brand: 'Vans', name: 'Encore Pro BOA · Port Royale' },
  { id: 'boot-8', category: 'CALZADO', brand: 'Vans', name: 'Hi-Standard OG · Oatmeal' },

  { id: 'beanie-1', category: 'ACCESORIOS', brand: 'Vans', name: 'Core Basic Cuff Beanie · Heather Grey' },
  { id: 'beanie-2', category: 'ACCESORIOS', brand: 'Vans', name: 'Original Shallow Cuff Beanie · Glazed Ginger' },
  { id: 'beanie-3', category: 'ACCESORIOS', brand: 'Vans', name: 'Knu Patch Beanie · Black' },
  { id: 'beanie-4', category: 'ACCESORIOS', brand: 'Vans', name: 'Plaimor Beanie · Poppy Ember' },
  { id: 'beanie-5', category: 'ACCESORIOS', brand: 'Vans', name: 'Core Basic Cuff Beanie · Blue' },
  { id: 'beanie-6', category: 'ACCESORIOS', brand: 'Vans', name: 'Classic Cuff Beanie · Brown' },
  { id: 'beanie-7', category: 'ACCESORIOS', brand: 'Vans', name: 'Cable Knit Pom Beanie · Black' },
  { id: 'beanie-8', category: 'ACCESORIOS', brand: 'Vans', name: 'Cable Knit Pom Beanie · Marshmallow' },
].map(product => ({ ...product, image: `/products/${product.id}.jpg` }))
