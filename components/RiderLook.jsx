import { categories } from '../data/products'

function RiderLook({ rider, selected }) {
  const layers = [...selected].sort((a, b) => getLayer(a) - getLayer(b))

  return (
    <div className="rider-look">
      <img className="rider-layer rider-base" src={rider.base} alt={rider.alt} />

      {layers.map(product => (
        <img
          key={product.id}
          className="rider-layer"
          src={`${rider.layersFolder}/${product.id}.webp`}
          alt=""
          aria-hidden="true"
          onError={event => { event.currentTarget.style.display = 'none' }}
        />
      ))}
    </div>
  )
}

function getLayer(product) {
  return categories.find(category => category.id === product.category).layer
}

export default RiderLook
