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
  title: 'Cocon | Gomitas Naturales de Melatonina para Dormir Mejor',
  description:
    'Duerme en menos de 30 minutos con gomitas naturales de melatonina. Sin pastillas, sin receta, sin dependencia. Pago contra entrega en toda Colombia.',
  keywords: [
    'gomitas melatonina',
    'melatonina colombia',
    'gomitas para dormir',
    'suplemento natural para dormir',
    'pago contra entrega',
  ],
  openGraph: {
    title: 'Cocon | Gomitas de Melatonina — Duerme en 30 minutos',
    description:
      'Gomitas naturales de melatonina. Sin pastillas, sin receta. Pago contra entrega en toda Colombia.',
    url: 'https://cocon.com.co',
    siteName: 'Cocon',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cocon | Gomitas de Melatonina para Dormir',
    description:
      'Duerme en menos de 30 minutos. Gomitas naturales. Pago contra entrega.',
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
      <body className="bg-[#0D0D1A] text-white antialiased font-sans">
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
