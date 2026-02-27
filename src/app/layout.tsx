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
  title: 'Cocon | El Cóctel del Sueño (Magnesio, Teanina, Apigenina)',
  description:
    'El suplemento nocturno definitivo en polvo. Nutrición cerebral para un descanso profundo sin hormonas ni resaca. Pago contra entrega en toda Colombia.',
  keywords: [
    'magnesio para dormir',
    'l-teanina ansiedad',
    'apigenina',
    'sleep cocktail colombia',
    'suplemento sueño natural',
  ],
  authors: [{ name: 'Cocon' }],
  openGraph: {
    title: 'Cocon | Sleep Cocktail — Duerme Profundo',
    description:
      'El Cóctel del Sueño (Huberman Stack). Nutrición cerebral sin dependencia.',
    url: 'https://cocon.co',
    siteName: 'Cocon',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cocon | Sleep Cocktail Cocon',
    description:
      'Descanso profundo y óptimo. Bebida relajante natural de absorción inmediata.',
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
