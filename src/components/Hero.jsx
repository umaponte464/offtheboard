import Button from './Button'

function Hero({ user }) {
  return (
    <main className="hero page">
      <section className="hero-text">
        <p className="eyebrow">RENTAL DE SNOWBOARD · OFF THE BOARD</p>
        <h1>LEÉ SU ONDA.<br /><span>ARMÁ SU LOOK.</span></h1>
        <p className="hero-description">
          Cada rider llega con su actitud y vos elegís los productos que mejor representan su estilo.
          Cuanto mejor lo leés, más puntos.
        </p>
        <Button to="/jugar">{user ? `JUGAR, ${user.name.toUpperCase()} →` : 'JUGAR →'}</Button>
        <Button variant="text" to="/como-jugar">CÓMO JUGAR</Button>
      </section>

      <section className="hero-image-wrap">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1635721980613-684353ae88dd?auto=format&fit=crop&fm=jpg&q=80&w=1000"
          alt="Snowboarder en la montaña"
        />
      </section>
    </main>
  )
}

export default Hero
