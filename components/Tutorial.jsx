import { useEffect, useRef, useState } from 'react'
import RiderLook from './RiderLook'
import { products, categories } from '../data/products'
import { riders } from '../data/riders'

// El tutorial usa el rider 01 de ejemplo: es el nivel de calentamiento
const example = riders[0]
const goodPick = products.find(product => product.id === 'jacket-1')
const badPick = products.find(product => product.id === 'jacket-2')

const scale = [
  { range: '9 – 10', title: 'LE CLAVASTE LA ONDA' },
  { range: '7 – 8', title: 'BUEN OJO' },
  { range: '5 – 6', title: 'CASI' },
  { range: '0 – 4', title: 'NO ERA POR AHÍ' },
]

function Tutorial({ onClose }) {
  const dialogRef = useRef(null)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
    return () => dialog.close()
  }, [])

  const steps = [
    {
      title: 'LEÉ AL RIDER',
      content: (
        <div className="tutorial-split">
          <div className="tutorial-rider">
            <RiderLook rider={example} selected={[]} />
          </div>
          <div>
            <p>Cada rider entra al rental vestido de negro. No te dice qué quiere: lo tenés que leer.</p>
            <ul className="tutorial-list">
              <li><b>Su pose</b> — ¿va concentrado, sonríe, se luce?</li>
              <li><b>El lugar</b> — ¿bosque, snowpark, ciudad, pista de principiantes?</li>
              <li><b>La pista</b> — debajo de la foto hay una frase sobre él.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'PROBALE LA ROPA',
      content: (
        <div className="tutorial-split">
          <div className="tutorial-rider">
            <RiderLook rider={example} selected={[goodPick]} />
          </div>
          <div>
            <p>Elegí 1 producto Vans por categoría: {categories.map(category => category.label.toLowerCase()).join(', ')}.</p>
            <ul className="tutorial-list">
              <li><b>Pasá el mouse</b> por un producto y el rider se lo prueba.</li>
              <li><b>Hacé click</b> (o tocalo en el celu) para elegirlo. Le queda puesto.</li>
              <li><b>Tocá + INFO</b> en los primeros riders: el producto se da vuelta y te cuenta su onda.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'ASÍ SE PUNTÚA',
      content: (
        <>
          <p>
            Cada producto tiene una nota del 0 al 10 según la onda del rider. Por ejemplo,
            el rider 01 es serio y de bajo perfil:
          </p>
          <ul className="tutorial-examples">
            {[goodPick, badPick].map(product => {
              const rating = example.ratings[product.id]
              return (
                <li key={product.id} className={rating.score >= 7 ? 'hit' : 'miss'}>
                  <div className="tutorial-example-image"><img src={product.image} alt="" /></div>
                  <div>
                    <strong>{product.name}</strong>
                    <p>{rating.comment}</p>
                  </div>
                  <b aria-label={`Nota ${rating.score} de 10`}>{rating.score}</b>
                </li>
              )
            })}
          </ul>
          <ul className="tutorial-scale" aria-label="Escala de puntaje">
            {scale.map(item => (
              <li key={item.range}><b>{item.range}</b><span>{item.title}</span></li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: 'CADA RIDER, MÁS DIFÍCIL',
      content: (
        <>
          <p>Son 5 riders. Con cada uno hay más productos para elegir y menos ayuda.</p>
          <table className="tutorial-levels">
            <thead>
              <tr><th scope="col">RIDER</th><th scope="col">OPCIONES</th><th scope="col">QUÉ SABÉS</th></tr>
            </thead>
            <tbody>
              {riders.map(rider => (
                <tr key={rider.id}>
                  <td>{rider.number}</td>
                  <td>{rider.products.length / categories.length} por categoría</td>
                  <td>{rider.showName ? `Su onda y + INFO` : 'Onda secreta, solo una pista'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ),
    },
  ]

  const isLast = step === steps.length - 1

  return (
    <dialog
      ref={dialogRef}
      className="tutorial"
      aria-labelledby="tutorial-title"
      onCancel={event => {
        event.preventDefault()
        onClose()
      }}
    >
      <div className="tutorial-top">
        <p className="eyebrow">TUTORIAL · {step + 1} DE {steps.length}</p>
        <button type="button" className="tutorial-skip" onClick={onClose}>SALTAR</button>
      </div>

      <h2 id="tutorial-title">{steps[step].title}</h2>
      <div className="tutorial-body" key={step}>{steps[step].content}</div>

      <div className="tutorial-nav">
        <ol className="tutorial-dots" aria-hidden="true">
          {steps.map((item, index) => (
            <li key={item.title} className={index === step ? 'active' : ''} />
          ))}
        </ol>

        <div className="tutorial-buttons">
          {step > 0 && (
            <button type="button" className="app-button text" onClick={() => setStep(step - 1)}>
              ← ANTERIOR
            </button>
          )}
          <button
            type="button"
            className="app-button primary"
            onClick={() => (isLast ? onClose() : setStep(step + 1))}
          >
            {isLast ? 'EMPEZAR CON EL RIDER 01 →' : 'SIGUIENTE →'}
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default Tutorial
