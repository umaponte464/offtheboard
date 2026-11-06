import Button from './Button'

function NotFound() {
  return (
    <main className="not-found page">
      <p className="eyebrow">ERROR 404</p>
      <h1>ESTA PISTA<br />NO EXISTE.</h1>
      <p>La página que buscás no está en el mapa.</p>
      <Button to="/">VOLVER AL INICIO →</Button>
    </main>
  )
}

export default NotFound
