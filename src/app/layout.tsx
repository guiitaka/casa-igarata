import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

// Usando Montserrat como fonte principal
const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Casa Igaratá - Seu refúgio perfeito',
  description: 'Casa de campo em Igaratá com vista para represa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className={`${montserrat.className} bg-neutral-light text-primary min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 