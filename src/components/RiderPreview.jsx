import RiderLook from './RiderLook'

function RiderPreview({ rider, selected, look }) {
  return (
    <section className="rider-card" aria-label={`Rider ${rider.number}`}>
      <p className="eyebrow">RIDER {rider.number} · VISTA DEL LOOK</p>

      <div className="rider-preview">
        <RiderLook rider={rider} selected={look} />
      </div>

      <div className="rider-caption">
        <span>{rider.number} · {rider.showName ? rider.name : '???'}</span>
        <h2>¿QUÉ ONDA TIENE?</h2>
        <p>{rider.hint}</p>
      </div>

      <div className="selected-look">
        <div className="selected-look-heading">
          <strong>LOOK ARMADO</strong>
          <span>{selected.length} / 4</span>
        </div>

        {selected.length === 0 ? (
          <p className="selected-look-empty">Elegí productos Vans para armar el look.</p>
        ) : (
          <ul className="selected-look-list">
            {selected.map(product => (
              <li className="selected-look-item" key={product.id}>
                <div className="selected-look-image">
                  <img src={product.image} alt="" />
                </div>
                <div>
                  <span>{product.category}</span>
                  <strong>{product.name}</strong>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default RiderPreview
