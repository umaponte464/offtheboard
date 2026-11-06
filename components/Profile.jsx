import Button from './Button'
import { getStats } from '../utils/storage'

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function Profile({ user, onLogout }) {
  const stats = getStats(user.games)

  return (
    <main className="profile page">
      <div className="profile-heading">
        <div className="profile-avatar" aria-hidden="true">{user.name.charAt(0).toUpperCase()}</div>
        <div>
          <p className="eyebrow">PERFIL DE RIDER · DESDE {formatDate(user.createdAt)}</p>
          <h1>{user.name.toUpperCase()}</h1>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="profile-stat main">
          <span>MEJOR PUNTAJE</span>
          <strong>{stats.best !== null ? stats.best.toFixed(1) : '—'}</strong>
        </div>
        <div className="profile-stat">
          <span>PROMEDIO</span>
          <strong>{stats.average !== null ? stats.average.toFixed(1) : '—'}</strong>
        </div>
        <div className="profile-stat">
          <span>PARTIDAS</span>
          <strong>{stats.played}</strong>
        </div>
      </div>

      <section className="history" aria-labelledby="history-title">
        <h2 id="history-title">HISTORIAL</h2>

        {user.games.length === 0 ? (
          <div className="empty-records">
            <span>—</span>
            <h3>TODAVÍA NO JUGASTE</h3>
            <p>Jugá tu primera partida para empezar tu historial.</p>
            <Button to="/jugar">JUGAR AHORA →</Button>
          </div>
        ) : (
          <ol className="history-list">
            {user.games.map(game => (
              <li key={game.id} className="history-item">
                <div className="history-date">{formatDate(game.date)}</div>
                <div className="history-rider">
                  <strong>PARTIDA · {game.rounds.length} RIDERS</strong>
                  <span>{game.verdict.title} {game.hits}/{game.totalItems} aciertos</span>
                </div>
                <div className="history-score">
                  {game.score.toFixed(1)}<small>/10</small>
                  {game.isRecord && <em>RÉCORD</em>}
                </div>
              </li>
            ))}
          </ol>
        )}
      </section>

      <div className="profile-actions">
        {user.games.length > 0 && <Button to="/jugar">JUGAR DE NUEVO →</Button>}
        <Button variant="text" onClick={onLogout}>CERRAR SESIÓN</Button>
      </div>
    </main>
  )
}

export default Profile
