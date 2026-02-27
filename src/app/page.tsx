import { Suspense } from 'react'
import { TopBar } from '@/components/top-bar'
import { Hero } from '@/components/hero'
import { PremiumBreak } from '@/components/premium-break'
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
    name: 'Cocon — El Cóctel del Sueño (Huberman Stack)',
    description:
      'Suplemento nutricional nocturno en polvo. Magnesio, L-Teanina y Apigenina para un descanso profundo y reparación muscular celular sin alterar las hormonas.',
    brand: {
      '@type': 'Brand',
      name: 'Cocon',
    },
    offers: [
      {
        '@type': 'Offer',
        name: '1 Frasco (30 scoops)',
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
        name: '2 Frascos (60 scoops)',
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
        name: '3 Frascos (90 scoops)',
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
        <PremiumBreak />
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
          Este producto es un suplemento dietario, no es un medicamento y no suple una alimentación equilibrada. Consulta a tu médico si tienes condiciones médicas preexistentes.
        </div>
      </footer>

      <WhatsAppButton />
    </>
  )
}
