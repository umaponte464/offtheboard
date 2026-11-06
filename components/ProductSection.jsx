import ProductCard from './ProductCard'

function ProductSection({ title, products, selected, onSelect, onPreview, showInfo }) {
  return (
    <section className="catalog-section" aria-label={`Productos: ${title}`}>
      <div className="catalog-section-title">
        <h3>{title}</h3>
        <span>Elegí 1</span>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            selected={selected.some(item => item.id === product.id)}
            onSelect={onSelect}
            onPreview={onPreview}
            showInfo={showInfo}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductSection
