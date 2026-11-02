const HIT_SCORE = 7

export function scoreLook(rider, selected) {
  const items = selected.map(product => {
    const rating = rider.ratings[product.id]
    return {
      id: product.id,
      name: product.name,
      category: product.category,
      image: product.image,
      score: rating.score,
      comment: rating.comment,
      hit: rating.score >= HIT_SCORE,
    }
  })

  const total = items.reduce((sum, item) => sum + item.score, 0)
  const average = Math.round((total / items.length) * 10) / 10
  const hits = items.filter(item => item.hit).length

  return { score: average, hits, items, verdict: getVerdict(average) }
}

export function scoreGame(rounds) {
  const total = rounds.reduce((sum, round) => sum + round.score, 0)
  const average = Math.round((total / rounds.length) * 10) / 10
  const hits = rounds.reduce((sum, round) => sum + round.hits, 0)
  const totalItems = rounds.reduce((sum, round) => sum + round.items.length, 0)

  return { score: average, hits, totalItems, rounds, verdict: getVerdict(average) }
}

export function getVerdict(score) {
  if (score >= 9) return { title: 'LE CLAVASTE LA ONDA.', copy: 'Leíste al rider a la perfección. Este look sale directo a la montaña.' }
  if (score >= 7) return { title: 'BUEN OJO.', copy: 'Leíste bien la onda. Un par de ajustes y queda perfecto.' }
  if (score >= 5) return { title: 'CASI.', copy: 'Algunas piezas funcionan, otras no van con su estilo.' }
  return { title: 'NO ERA POR AHÍ.', copy: 'Este look no tiene nada que ver con él. Volvé a mirarlo.' }
}
