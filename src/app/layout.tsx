import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Cocon | Duerme profundo toda la noche, 100% natural',
  description:
    'La bebida relajante sin químicos que te ayuda a dormir fácil y despertar con energía. Sin resaca y sin dependencia. Pago contra entrega en Colombia.',
  keywords: [
    'bebida para dormir',
    'como dormir rapido',
    'magnesio natural',
    'remedios para el insomnio',
    'suplemento natural sin quimicos',
  ],
  authors: [{ name: 'Cocon' }],
  openGraph: {
    title: 'Cocon | Duerme Fácil y Sin Químicos',
    description:
      'Bebida relajante natural para dormir profundo sin depender de pastillas.',
    url: 'https://cocon.co',
    siteName: 'Cocon',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cocon | Bebida Natural para Dormir',
    description:
      'Descansa de verdad sin químicos. Absorción ultrarrápida.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CO" className={inter.variable}>
      <body className="bg-base-bg text-base-text antialiased font-sans">
        {children}
        {GOOGLE_ADS_ID && GOOGLE_ADS_ID !== 'AW-XXXXXXXXX' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
