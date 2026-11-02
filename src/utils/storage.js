const USERS_KEY = 'otb-users'
const SESSION_KEY = 'otb-session'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function isValidEmail(email) {
  return EMAIL_PATTERN.test(email)
}

function readUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY))
    return Array.isArray(users) ? users.filter(user => user && user.email) : []
  } catch {
    return []
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function findUser(email) {
  const clean = email.trim().toLowerCase()
  return readUsers().find(user => user.email === clean)
}

export function registerUser(name, email, password) {
  const cleanEmail = email.trim().toLowerCase()
  if (findUser(cleanEmail)) return { error: 'Ya existe una cuenta con ese email. Ingresá con tu contraseña.' }

  const users = readUsers()
  users.push({ name: name.trim(), email: cleanEmail, password, createdAt: new Date().toISOString(), games: [] })
  writeUsers(users)
  localStorage.setItem(SESSION_KEY, cleanEmail)
  return { error: null }
}

export function loginUser(email, password) {
  const user = findUser(email)
  if (!user) return { error: 'No hay ninguna cuenta con ese email. Creá una en la pestaña CREAR CUENTA.' }
  if (user.password !== password) return { error: 'La contraseña no es correcta.' }

  localStorage.setItem(SESSION_KEY, user.email)
  return { error: null }
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY)
}

export function getCurrentUser() {
  const email = localStorage.getItem(SESSION_KEY)
  if (!email) return null

  const user = findUser(email)
  if (!user) return null

  const games = (user.games || []).filter(game => game.rounds)
  return { name: user.name, email: user.email, createdAt: user.createdAt, games }
}

export function saveGame(email, game) {
  const users = readUsers().map(user =>
    user.email === email ? { ...user, games: [game, ...(user.games || [])] } : user
  )
  writeUsers(users)
}

export function getStats(games) {
  if (games.length === 0) return { best: null, average: null, played: 0 }

  const scores = games.map(game => game.score)
  const best = Math.max(...scores)
  const average = Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10
  return { best, average, played: games.length }
}
