export const openWhatsApp = (message) => {
  const number = "919876543210" // ← Change to your business number
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
