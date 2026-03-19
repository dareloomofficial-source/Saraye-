import jsPDF from 'jspdf'

export const downloadInvoice = (store, details, isBooking = false) => {
  const doc = new jsPDF()
  doc.setFont("helvetica", "bold")
  doc.setFontSize(22)
  doc.text("SARAYE INVOICE", 105, 20, { align: "center" })

  doc.setFontSize(12)
  doc.text(`Business: ${store.name}`, 20, 40)
  doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, 20, 50)
  doc.text(`Customer: Walk-in Guest`, 20, 60)

  let y = 80
  if (!isBooking) {
    details.items.forEach(item => {
      doc.text(`${item.name} ×${item.qty} = ₹${item.price * item.qty}`, 20, y)
      y += 10
    })
  } else {
    doc.text(`${details.type} Booking`, 20, y)
    y += 10
  }

  doc.setFontSize(16)
  doc.text(`TOTAL: ₹${details.total}`, 20, y + 10)
  doc.setFontSize(10)
  doc.text("GST included where applicable • Thank you!", 20, y + 30)

  doc.save(`Saraye_${store.name}.pdf`)
}
