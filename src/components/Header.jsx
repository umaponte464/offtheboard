import { Link, NavLink } from 'react-router-dom'

function Header({ user }) {
  return (
    <header className="header">
      <Link className="app-button logo" to="/">OFF THE BOARD</Link>

      <nav className="nav" aria-label="Navegación principal">
        <NavLink className="nav-link" to="/" end>INICIO</NavLink>
        <NavLink className="nav-link" to="/como-jugar">CÓMO JUGAR</NavLink>
        {user ? (
          <NavLink className="nav-link nav-user" to="/perfil">
            <span className="nav-avatar" aria-hidden="true">{user.name.charAt(0).toUpperCase()}</span>
            <span className="nav-user-name">{user.name.toUpperCase()}</span>
          </NavLink>
        ) : (
          <NavLink className="nav-link" to="/ingresar">INGRESAR</NavLink>
        )}
        <Link className="app-button nav-play" to="/jugar">JUGAR</Link>
      </nav>
    </header>
  )
}

export default Header
