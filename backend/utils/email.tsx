// Email utilities for notifications

export interface EmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail(options: EmailOptions) {
  try {
    console.log("[Backend] Sending email:", options.subject)

    // Use email service (SendGrid, Resend, etc.) in production
    // await emailService.send({
    //   from: process.env.EMAIL_FROM,
    //   ...options
    // })

    return { success: true }
  } catch (error) {
    console.error("[Backend] Email error:", error)
    return { success: false }
  }
}

export function generateBookingConfirmationEmail(booking: any): string {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h1 style="color: #8b5cf6;">Booking Confirmed!</h1>
      <p>Thank you for booking with Travelinn.</p>
      <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
        <p><strong>Booking ID:</strong> ${booking.id}</p>
        <p><strong>Hotel:</strong> ${booking.hotelName}</p>
        <p><strong>Check-in:</strong> ${booking.checkIn}</p>
        <p><strong>Check-out:</strong> ${booking.checkOut}</p>
        <p><strong>Total:</strong> $${booking.totalPrice}</p>
      </div>
    </div>
  `
}
