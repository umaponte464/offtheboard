import { useEffect, useRef, useState } from 'react'
import ProductSection from './ProductSection'
import Button from './Button'
import RiderPreview from './RiderPreview'
import RoundResult from './RoundResult'
import Tutorial from './Tutorial'
import { categories, products } from '../data/products'
import { riders, getRiderLabel } from '../data/riders'
import { scoreLook, scoreGame } from '../utils/score'

function Game({ onFinish }) {
  const [round, setRound] = useState(0)
  const [results, setResults] = useState([])
  const [showVerdict, setShowVerdict] = useState(false)
  const [selected, setSelected] = useState([])
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const [preview, setPreview] = useState(null)
  const [showTutorial, setShowTutorial] = useState(true)
  const advanceTimer = useRef(null)
  const catalogTitleRef = useRef(null)
  const moveFocus = useRef(false)

  const rider = riders[round]
  const isLastRider = round === riders.length - 1

  // Si el componente se desmonta con un salto pendiente, lo cancelamos
  useEffect(() => () => clearTimeout(advanceTimer.current), [])

  // Cuando el juego cambia solo de categoría, el foco va al título de la nueva (teclado y lectores de pantalla)
  useEffect(() => {
    if (moveFocus.current && catalogTitleRef.current) {
      moveFocus.current = false
      catalogTitleRef.current.focus({ preventScroll: true })
      catalogTitleRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [activeCategory])

  function changeCategory(categoryId) {
    clearTimeout(advanceTimer.current)
    setActiveCategory(categoryId)
    setPreview(null)
  }

  // Busca la próxima categoría sin elegir, empezando por la que sigue a la actual
  function goToNextCategory(currentCategory, nextSelected) {
    const start = categories.findIndex(category => category.id === currentCategory)
    const ordered = [...categories.slice(start + 1), ...categories.slice(0, start)]
    const next = ordered.find(category => !nextSelected.some(item => item.category === category.id))
    if (!next) return

    clearTimeout(advanceTimer.current)
    advanceTimer.current = setTimeout(() => {
      moveFocus.current = true
      changeCategory(next.id)
    }, 450)
  }

  function selectProduct(product) {
    setPreview(null)
    const sameCategory = selected.find(item => item.category === product.category)

    if (sameCategory && sameCategory.id === product.id) {
      // Tocar la misma prenda la desmarca y te deja en la categoría
      clearTimeout(advanceTimer.current)
      setSelected(selected.filter(item => item.category !== product.category))
      return
    }

    const nextSelected = sameCategory
      ? selected.map(item => item.category === product.category ? product : item)
      : [...selected, product]

    setSelected(nextSelected)
    goToNextCategory(product.category, nextSelected)
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

    clearTimeout(advanceTimer.current)
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
        <div><span>RIDER</span><strong>{rider.number} · {getRiderLabel(rider)}</strong></div>
        <div><span>RONDA</span><strong>{round + 1} / {riders.length}</strong></div>
        <div><span>LOOK</span><strong>{selected.length} / {categories.length}</strong></div>
        <button type="button" className="tutorial-open" onClick={() => setShowTutorial(true)}>
          ? TUTORIAL
        </button>
      </div>

      {showTutorial && <Tutorial onClose={() => setShowTutorial(false)} />}

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
            Elegí 1 producto Vans por categoría y pasás solo a la siguiente. Mientras mirás las opciones, el rider se las va probando.
            {rider.productInfo && ' Tocá + INFO para ver la onda de cada producto.'}
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
                  onClick={() => changeCategory(category.id)}
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
            showInfo={rider.productInfo}
            titleRef={catalogTitleRef}
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
