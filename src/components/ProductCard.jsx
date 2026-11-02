function ProductCard({ product, selected, onSelect, onPreview }) {
  return (
    <button
      type="button"
      className={`product-card ${selected ? 'selected' : ''}`}
      aria-pressed={selected}
      onClick={() => onSelect(product)}
      onMouseEnter={() => onPreview(product)}
      onMouseLeave={() => onPreview(null)}
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
  )
}

export default ProductCard
