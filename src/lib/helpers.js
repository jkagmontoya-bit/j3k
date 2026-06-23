export function today() {
  return new Date().toISOString().slice(0, 10)
}

export function safeFileName(name = 'archivo') {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._-]/g, '_')
}

export function buildStoragePath(category, fileName) {
  const year = new Date().getFullYear()
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  return `${category}/${year}/${stamp}_${safeFileName(fileName)}`
}
