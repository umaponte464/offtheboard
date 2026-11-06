import { Navigate } from 'react-router-dom'
import Button from './Button'
import RiderLook from './RiderLook'
import { getRider } from '../data/riders'
import { getStats } from '../utils/storage'

function Result({ game, user }) {
  if (!game) return <Navigate to="/jugar" replace />

  const stats = getStats(user.games)

  return (
    <main className="final page">
      <p className="eyebrow">RESULTADO DE LA PARTIDA</p>
      {game.isRecord && <span className="record-badge">NUEVO RÉCORD</span>}
      <h1>{game.verdict.title}</h1>
      <p className="result-copy">{game.verdict.copy}</p>

      <div className="score-box">
        <span>ESTILO PROMEDIO</span>
        <strong>{game.score.toFixed(1)}</strong><small>/ 10</small>
        <div
          className="style-meter"
          role="meter"
          aria-label="Medidor de estilo promedio"
          aria-valuemin={0}
          aria-valuemax={10}
          aria-valuenow={game.score}
        >
          <div className="style-meter-fill" style={{ width: `${game.score * 10}%` }} />
        </div>
      </div>

      <ol className="final-riders">
        {game.rounds.map(round => (
          <li key={round.riderId} className="final-rider">
            <div className="final-rider-image">
              <RiderLook rider={getRider(round.riderId)} selected={round.items} />
            </div>
            <div className="final-rider-text">
              <span>RIDER {round.riderNumber} · {round.riderName}</span>
              <strong>{round.verdict.title}</strong>
              <p>{round.hits}/{round.items.length} aciertos</p>
            </div>
            <b aria-label={`Nota ${round.score} de 10`}>{round.score.toFixed(1)}</b>
          </li>
        ))}
      </ol>

      <div className="result-stats">
        <div><strong>{game.hits}/{game.totalItems}</strong><span>ACIERTOS</span></div>
        <div><strong>{stats.best.toFixed(1)}</strong><span>TU RÉCORD</span></div>
        <div><strong>{stats.played}</strong><span>PARTIDAS</span></div>
      </div>

      <div className="result-actions">
        <Button to="/jugar">JUGAR DE NUEVO →</Button>
        <Button variant="text" to="/perfil">VER MI PERFIL</Button>
      </div>
    </main>
  )
}

export default Result
