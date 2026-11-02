import Button from './Button'

function Records({ hasPlayed, score, onPlay, onHome }) {
  return (
    <main className="records page">
      <button className="simple-back" onClick={onHome}>← VOLVER</button>
      <p className="eyebrow">OFF THE BOARD</p>
      <h1>RÉCORDS</h1>

      {!hasPlayed ? (
        <div className="empty-records">
          <span>—</span>
          <h2>TODAVÍA NO HAY RÉCORDS</h2>
          <p>Jugá una partida para que aparezca tu primer resultado.</p>
          <Button variant="primary" onClick={onPlay}>JUGAR AHORA →</Button>
        </div>
      ) : (
        <div className="record-card">
          <span>MEJOR PUNTAJE</span>
          <strong>{score}</strong><small>/10</small>
          <p>Tu mejor resultado de esta sesión.</p>
          <Button variant="primary" onClick={onPlay}>JUGAR DE NUEVO →</Button>
        </div>
      )}
    </main>
  )
}

export default Records
