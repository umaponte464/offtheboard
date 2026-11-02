import { useNavigate } from 'react-router-dom'
import Button from './Button'

function HowToPlay() {
  const navigate = useNavigate()

  return (
    <main className="how page">
      <Button variant="back" onClick={() => navigate(-1)}>← VOLVER</Button>
      <p className="eyebrow">CÓMO JUGAR</p>
      <h2>LA ACTITUD SE LEE<br />SOLO CON MIRARLO.</h2>

      <div className="steps">
        <article className="step">
          <span>01</span>
          <div><h3>ENTRÁ CON TU CUENTA</h3><p>Creá tu cuenta con tu email. Ahí se guardan tus puntajes, tu récord y tu historial.</p></div>
        </article>
        <article className="step">
          <span>02</span>
          <div><h3>LEÉ AL RIDER</h3><p>Cada partida trae 5 riders, todos vestidos de negro. Mirá su pose, su actitud y dónde está. En cada nivel hay una prenda más para elegir por categoría, y desde el tercer rider no te dicen ni el nombre.</p></div>
        </article>
        <article className="step">
          <span>03</span>
          <div><h3>ARMÁ SU LOOK</h3><p>Elegí una campera, un pantalón, un calzado y un accesorio de Vans. Cada prenda que elegís aparece puesta en el rider.</p></div>
        </article>
        <article className="step">
          <span>04</span>
          <div><h3>RECIBÍ EL VEREDICTO</h3><p>Cada producto tiene una nota según la onda del rider. Después de cada look ves su veredicto, y al final el promedio de los 5, de 0 a 10.</p></div>
        </article>
      </div>

      <Button to="/jugar">EMPEZAR →</Button>
    </main>
  )
}

export default HowToPlay
