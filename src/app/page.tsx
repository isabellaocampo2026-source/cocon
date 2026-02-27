import { Suspense } from 'react'
import { TopBar } from '@/components/top-bar'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { Solution } from '@/components/solution'
import { Comparison } from '@/components/comparison'
import { Testimonials } from '@/components/testimonials'
import { OrderForm } from '@/components/order-form'
import { FAQ } from '@/components/faq'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { FAQ_ITEMS } from '@/lib/constants'

// JSON-LD Structured Data
function StructuredData() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Cocon — Gomitas de Melatonina',
    description:
      'Gomitas naturales de melatonina para dormir mejor. Sin pastillas, sin receta, sin dependencia.',
    brand: {
      '@type': 'Brand',
      name: 'Cocon',
    },
    offers: [
      {
        '@type': 'Offer',
        name: '1 Frasco (30 gomitas)',
        price: '49900',
        priceCurrency: 'COP',
        availability: 'https://schema.org/InStock',
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: '9900',
            currency: 'COP',
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            businessDays: {
              '@type': 'QuantitativeValue',
              minValue: 2,
              maxValue: 5,
            },
          },
        },
      },
      {
        '@type': 'Offer',
        name: '2 Frascos (60 gomitas)',
        price: '89900',
        priceCurrency: 'COP',
        availability: 'https://schema.org/InStock',
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: '0',
            currency: 'COP',
          },
        },
      },
      {
        '@type': 'Offer',
        name: '3 Frascos (90 gomitas)',
        price: '119900',
        priceCurrency: 'COP',
        availability: 'https://schema.org/InStock',
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: '0',
            currency: 'COP',
          },
        },
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <TopBar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Comparison />
        <Testimonials />
        <Suspense fallback={null}>
          <OrderForm />
        </Suspense>
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-6 text-sm text-white/40">
            <a
              href="https://wa.me/573053476462"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition"
            >
              WhatsApp
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://instagram.com/cocon.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition"
            >
              Instagram
            </a>
          </div>
          <p suppressHydrationWarning className="text-xs text-white/25">
            © {new Date().getFullYear()} Cocon. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-white/15 max-w-md mx-auto">
            Este producto no es un medicamento. La melatonina es un suplemento
            alimenticio. Consulta a tu médico si tienes condiciones especiales.
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  )
}
