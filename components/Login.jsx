import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Button from './Button'
import { isValidEmail, loginUser, registerUser } from '../utils/storage'

function Login({ user, onLogin }) {
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const location = useLocation()
  const nextPage = location.state?.from || '/jugar'

  if (user) return <Navigate to={nextPage} replace />

  const isLogin = mode === 'login'

  function changeMode(newMode) {
    setMode(newMode)
    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const cleanName = name.trim()
    const cleanEmail = email.trim()

    if (!isLogin && (cleanName.length < 2 || cleanName.length > 16)) {
      setError('Tu nombre tiene que tener entre 2 y 16 caracteres.')
      return
    }
    if (!isValidEmail(cleanEmail)) {
      setError('Escribí un email válido, por ejemplo nombre@gmail.com.')
      return
    }
    if (password.length < 6) {
      setError('La contraseña tiene que tener al menos 6 caracteres.')
      return
    }

    const result = isLogin
      ? loginUser(cleanEmail, password)
      : registerUser(cleanName, cleanEmail, password)

    if (result.error) {
      setError(result.error)
      return
    }

    onLogin()
    navigate(nextPage, { replace: true })
  }

  return (
    <main className="login page">
      <div className="login-card">
        <p className="eyebrow">TU CUENTA DE RIDER</p>
        <h1>{isLogin ? 'ENTRÁ A LA PISTA.' : 'CREÁ TU CUENTA.'}</h1>
        <p className="login-copy">
          Necesitás una cuenta para jugar. Ahí se guardan tus puntajes, tu récord y tu historial de partidas.
        </p>

        <div className="login-tabs" role="group" aria-label="Elegí una opción">
          <button type="button" className={isLogin ? 'active' : ''} aria-pressed={isLogin} onClick={() => changeMode('login')}>
            INGRESAR
          </button>
          <button type="button" className={!isLogin ? 'active' : ''} aria-pressed={!isLogin} onClick={() => changeMode('register')}>
            CREAR CUENTA
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {!isLogin && (
            <>
              <label htmlFor="rider-name">TU NOMBRE</label>
              <input
                id="rider-name"
                type="text"
                autoComplete="given-name"
                maxLength={16}
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Cómo querés que te llamemos"
              />
            </>
          )}

          <label htmlFor="rider-email">EMAIL</label>
          <input
            id="rider-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="nombre@gmail.com"
          />

          <label htmlFor="rider-password">CONTRASEÑA</label>
          <input
            id="rider-password"
            type="password"
            autoComplete={isLogin ? 'current-password' : 'new-password'}
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="Mínimo 6 caracteres"
          />

          <p className="form-error" role="alert">{error}</p>

          <Button type="submit" variant="primary full">
            {isLogin ? 'INGRESAR →' : 'CREAR CUENTA →'}
          </Button>
        </form>

        <p className="login-note">
          {isLogin ? '¿Primera vez? Tocá CREAR CUENTA arriba.' : 'Tu cuenta se guarda solo en este navegador.'}
        </p>
      </div>
    </main>
  )
}

export default Login
