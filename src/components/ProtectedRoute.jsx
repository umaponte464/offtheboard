import { Navigate, useLocation } from 'react-router-dom'

function ProtectedRoute({ user, children }) {
  const location = useLocation()

  if (!user) {
    return <Navigate to="/ingresar" replace state={{ from: location.pathname }} />
  }

  return children
}

export default ProtectedRoute
