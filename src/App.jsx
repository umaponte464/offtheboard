import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import HowToPlay from './components/HowToPlay'
import Login from './components/Login'
import Game from './components/Game'
import Result from './components/Result'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import { getCurrentUser, logoutUser, saveGame, getStats } from './utils/storage'

const pageTitles = {
  '/': 'Inicio',
  '/como-jugar': 'Cómo jugar',
  '/ingresar': 'Ingresar',
  '/jugar': 'Jugar',
  '/resultado': 'Resultado',
  '/perfil': 'Mi perfil',
}

function App() {
  const [user, setUser] = useState(getCurrentUser())
  const [lastGame, setLastGame] = useState(null)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const page = pageTitles[location.pathname]
    document.title = page ? `${page} · Off The Board` : 'Off The Board'
  }, [location.pathname])

  function handleLogin() {
    setUser(getCurrentUser())
  }

  function handleLogout() {
    logoutUser()
    setUser(null)
    navigate('/ingresar', { replace: true })
  }

  function finishGame(result) {
    const previousBest = getStats(user.games).best
    const game = {
      ...result,
      id: Date.now(),
      date: new Date().toISOString(),
      isRecord: previousBest === null || result.score > previousBest,
    }

    saveGame(user.email, game)
    setUser(getCurrentUser())
    setLastGame(game)
    navigate('/resultado')
  }

  return (
    <div className="app">
      <Header user={user} />

      <Routes>
        <Route path="/" element={<Hero user={user} />} />
        <Route path="/como-jugar" element={<HowToPlay />} />
        <Route path="/ingresar" element={<Login user={user} onLogin={handleLogin} />} />
        <Route
          path="/jugar"
          element={<ProtectedRoute user={user}><Game onFinish={finishGame} /></ProtectedRoute>}
        />
        <Route
          path="/resultado"
          element={<ProtectedRoute user={user}><Result game={lastGame || user?.games[0]} user={user} /></ProtectedRoute>}
        />
        <Route
          path="/perfil"
          element={<ProtectedRoute user={user}><Profile user={user} onLogout={handleLogout} /></ProtectedRoute>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
