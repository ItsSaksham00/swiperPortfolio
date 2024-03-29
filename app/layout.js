import { Poppins } from 'next/font/google'
import './globals.css'

const Pop = Poppins({ subsets: ['latin'], weight: ["400","500"] })

export const metadata = {
  title: 'Portfolio - Saksham Khatiwada',
  description: 'Hello from Saksham',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Pop.className}>
        {children}
      </body>
    </html>
  )
}
