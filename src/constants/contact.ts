/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Centralized Contact Information & Public Communications Registry
 */

export const CONTACT_INFO = {
  name: "Mohammad Fazil Firojkhan Malek",
  displayName: "Fazil Malek",
  email: "malekfazilkhan07@gmail.com",
  phoneDisplay: "+91 79906 32170",
  phoneTel: "+917990632170",
  whatsappNumber: "917990632170",
  whatsappUrl: "https://wa.me/917990632170",
  getWhatsAppUrlWithText: (message: string) =>
    `https://wa.me/917990632170?text=${encodeURIComponent(message)}`,
  locationDisplay: "Ahmedabad, Gujarat • Working worldwide",
  social: {
    github: "https://github.com/fazilkhan0786",
    linkedin: "https://www.linkedin.com/in/fazilkhan-malek-392082377",
    instagram: "https://www.instagram.com/fazilkhan_078?igsh=MXFlZnA3OWEzenQzZQ%3D%3D&utm_source=qr"
  }
} as const;
