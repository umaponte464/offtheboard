import { useState } from 'react'
import ProductSection from './ProductSection'
import Button from './Button'
import RiderPreview from './RiderPreview'
import RoundResult from './RoundResult'
import { categories, products } from '../data/products'
import { riders } from '../data/riders'
import { scoreLook, scoreGame } from '../utils/score'

function Game({ onFinish }) {
  const [round, setRound] = useState(0)
  const [results, setResults] = useState([])
  const [showVerdict, setShowVerdict] = useState(false)
  const [selected, setSelected] = useState([])
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const [preview, setPreview] = useState(null)

  const rider = riders[round]
  const isLastRider = round === riders.length - 1

  function selectProduct(product) {
    setPreview(null)
    const sameCategory = selected.find(item => item.category === product.category)

    if (sameCategory && sameCategory.id !== product.id) {
      setSelected(selected.map(item => item.category === product.category ? product : item))
      return
    }

    if (sameCategory) {
      setSelected(selected.filter(item => item.category !== product.category))
    } else {
      setSelected([...selected, product])
    }
  }

  function confirmLook() {
    const result = scoreLook(rider, selected)
    setResults([...results, { ...result, riderId: rider.id, riderNumber: rider.number, riderName: rider.name }])
    setShowVerdict(true)
    window.scrollTo(0, 0)
  }

  function nextRider() {
    if (isLastRider) {
      onFinish(scoreGame(results))
      return
    }

    setRound(round + 1)
    setSelected([])
    setActiveCategory(categories[0].id)
    setPreview(null)
    setShowVerdict(false)
    window.scrollTo(0, 0)
  }

  if (showVerdict) {
    return (
      <RoundResult
        rider={rider}
        result={results[results.length - 1]}
        round={round + 1}
        totalRounds={riders.length}
        isLast={isLastRider}
        onNext={nextRider}
      />
    )
  }

  const complete = selected.length === categories.length
  const riderProducts = products.filter(product => rider.products.includes(product.id))
  const activeProducts = riderProducts.filter(product => product.category === activeCategory)
  const look = preview
    ? [...selected.filter(item => item.category !== preview.category), preview]
    : selected
  const pending = categories.filter(category => !selected.some(item => item.category === category.id))

  return (
    <main className="game page">
      <div className="game-heading">
        <div><span>RIDER</span><strong>{rider.number} · {rider.showName ? rider.name : '???'}</strong></div>
        <div><span>RONDA</span><strong>{round + 1} / {riders.length}</strong></div>
        <div><span>LOOK</span><strong>{selected.length} / {categories.length}</strong></div>
      </div>

      <ol className="round-track" aria-label="Riders de la partida">
        {riders.map((item, index) => (
          <li
            key={item.id}
            className={index < round ? 'done' : index === round ? 'current' : ''}
            aria-current={index === round ? 'step' : undefined}
          >
            {item.number}
          </li>
        ))}
      </ol>

      <div className="game-layout">
        <RiderPreview rider={rider} selected={selected} look={look} />

        <section className="selection">
          <div className="section-heading">
            <div><p className="eyebrow">CATÁLOGO VANS SNOWBOARDING</p><h2>ARMÁ EL LOOK</h2></div>
            <span>{selected.length} / {categories.length}</span>
          </div>

          <p className="selection-instruction">
            Elegí 1 producto Vans por categoría. Mientras mirás las opciones, el rider se las va probando.
          </p>

          <div className="category-filters" role="group" aria-label="Filtrar productos por categoría">
            {categories.map(category => {
              const done = selected.some(item => item.category === category.id)
              return (
                <button
                  type="button"
                  key={category.id}
                  className={activeCategory === category.id ? 'category-filter active' : 'category-filter'}
                  aria-pressed={activeCategory === category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setPreview(null)
                  }}
                >
                  {category.label}
                  {done && <span aria-label="elegido"> ✓</span>}
                </button>
              )
            })}
          </div>

          <ProductSection
            title={activeCategory}
            products={activeProducts}
            selected={selected}
            onSelect={selectProduct}
            onPreview={setPreview}
          />

          <Button variant="primary full" disabled={!complete} onClick={confirmLook}>
            VER VEREDICTO →
          </Button>
          <p className="hint" aria-live="polite">
            {complete
              ? 'Look completo. Confirmalo para ver el veredicto.'
              : `Te falta: ${pending.map(category => category.label.toLowerCase()).join(', ')}.`}
          </p>
        </section>
      </div>
    </main>
  )
}

export default Game
