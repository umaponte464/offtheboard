import { useEffect, useRef } from 'react'
import Button from './Button'
import RiderLook from './RiderLook'

function RoundResult({ rider, result, round, totalRounds, isLast, onNext }) {
  const titleRef = useRef(null)

  useEffect(() => {
    titleRef.current.focus()
  }, [])

  return (
    <main className="result page">
      <div className="result-layout">
        <section className="result-rider" aria-label="El look que armaste">
          <div className="result-rider-image">
            <RiderLook rider={rider} selected={result.items} />
          </div>
          <p>RIDER {rider.number} · {rider.name}</p>
        </section>

        <section className="result-info">
          <p className="eyebrow">VEREDICTO · RIDER {round} DE {totalRounds}</p>
          <h1 ref={titleRef} tabIndex={-1}>{result.verdict.title}</h1>
          <p className="result-copy">{result.verdict.copy}</p>

          <div className="vibe-reveal">
            <span>SU ONDA ERA</span>
            <strong>{rider.name}</strong>
            <p>{rider.vibe}</p>
          </div>

          <div className="score-box">
            <span>ESTILO</span>
            <strong>{result.score.toFixed(1)}</strong><small>/ 10</small>
            <div
              className="style-meter"
              role="meter"
              aria-label="Medidor de estilo"
              aria-valuemin={0}
              aria-valuemax={10}
              aria-valuenow={result.score}
            >
              <div className="style-meter-fill" style={{ width: `${result.score * 10}%` }} />
            </div>
          </div>

          <ul className="verdict-list">
            {result.items.map(item => (
              <li key={item.id} className={item.hit ? 'verdict-item hit' : 'verdict-item miss'}>
                <div className="verdict-item-image"><img src={item.image} alt="" /></div>
                <div className="verdict-item-text">
                  <span>{item.category}</span>
                  <strong>{item.name}</strong>
                  <p>{item.comment}</p>
                </div>
                <b aria-label={`Nota ${item.score} de 10`}>{item.score}</b>
              </li>
            ))}
          </ul>

          <Button variant="primary full" onClick={onNext}>
            {isLast ? 'VER RESULTADO FINAL →' : 'SIGUIENTE RIDER →'}
          </Button>
        </section>
      </div>
    </main>
  )
}

export default RoundResult
