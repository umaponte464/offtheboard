import { Link } from 'react-router-dom'

function Button({ children, onClick, to, variant = 'primary', disabled = false, type = 'button' }) {
  const className = `app-button ${variant}`

  if (to) {
    return <Link className={className} to={to}>{children}</Link>
  }

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
