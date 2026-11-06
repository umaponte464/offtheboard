import { useEffect, useRef, useState } from 'react'

function ProductCard({ product, selected, onSelect, onPreview, showInfo }) {
  const [flipped, setFlipped] = useState(false)
  const backId = `info-${product.id}`
  const toggleRef = useRef(null)
  const closeRef = useRef(null)
  const focusNext = useRef(null)

  // Después de girar, el foco pasa a la cara que quedó visible (para teclado y lectores de pantalla)
  useEffect(() => {
    if (focusNext.current) {
      focusNext.current.focus()
      focusNext.current = null
    }
  }, [flipped])

  function flip(toBack) {
    focusNext.current = toBack ? closeRef.current : toggleRef.current
    setFlipped(toBack)
  }

  return (
    <div
      className={`product-card ${selected ? 'selected' : ''} ${flipped ? 'flipped' : ''}`}
      onMouseEnter={() => onPreview(product)}
      onMouseLeave={() => onPreview(null)}
    >
      <div className="product-card-inner">
        <div className="product-face product-front" inert={flipped} aria-hidden={flipped}>
          <button
            type="button"
            className="product-select"
            aria-pressed={selected}
            onClick={() => onSelect(product)}
            onFocus={() => onPreview(product)}
            onBlur={() => onPreview(null)}
          >
            <div className="product-image-wrap">
              <img src={product.image} alt={product.name} />
              {selected && <span className="product-check" aria-hidden="true">✓</span>}
            </div>
            <strong>{product.name}</strong>
            <small>{product.brand} · {product.category}</small>
          </button>

          {showInfo && (
            <button
              type="button"
              ref={toggleRef}
              className="product-info-toggle"
              aria-expanded={flipped}
              aria-controls={backId}
              aria-label={`Más info de ${product.name}`}
              onClick={() => flip(true)}
            >
              + INFO
            </button>
          )}
        </div>

        {showInfo && (
          <div
            id={backId}
            className="product-face product-back"
            inert={!flipped}
            aria-hidden={!flipped}
          >
            <button
              type="button"
              ref={closeRef}
              className="product-back-close"
              aria-label="Volver a la foto del producto"
              onClick={() => flip(false)}
            >
              ✕
            </button>

            <span className="product-back-label">LA ONDA DEL PRODUCTO</span>
            <ul className="product-tags">
              {product.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            <p>{product.info}</p>

            <button
              type="button"
              className="product-back-select"
              aria-pressed={selected}
              onClick={() => onSelect(product)}
            >
              {selected ? 'ELEGIDO ✓' : 'ELEGIR'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
