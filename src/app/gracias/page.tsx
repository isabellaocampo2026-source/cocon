import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
    title: '¡Pedido Recibido! | Cocon',
    robots: { index: false, follow: false },
}

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''
const CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || ''

export default function GraciasPage() {
    return (
        <main className="min-h-screen flex items-center justify-center p-6 relative">
            {/* Conversion tracking */}
            {GOOGLE_ADS_ID && GOOGLE_ADS_ID !== 'AW-XXXXXXXXX' && CONVERSION_LABEL && (
                <Script id="conversion" strategy="afterInteractive">
                    {`
            if (typeof gtag === 'function') {
              gtag('event', 'conversion', {
                send_to: '${GOOGLE_ADS_ID}/${CONVERSION_LABEL}',
                value: 89900,
                currency: 'COP'
              });
            }
          `}
                </Script>
            )}

            {/* Background glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/10 blur-[120px] pointer-events-none" />

            <div className="relative text-center max-w-md animate-[fade-in_0.8s_ease-out]">
                {/* Moon animation */}
                <div className="text-7xl mb-8 animate-[float_3s_ease-in-out_infinite]">
                    🌙
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    ¡Pedido recibido!
                </h1>

                <p className="text-white/70 text-lg mb-3 leading-relaxed">
                    Te vamos a escribir por{' '}
                    <span className="text-[#25D366] font-semibold">WhatsApp</span> en los
                    próximos minutos para confirmar tu pedido.
                </p>

                <p className="text-white/40 text-sm mb-10">
                    Recuerda: solo pagas cuando recibas el producto en tu puerta. 📦
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="https://wa.me/573053476462"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#22c55e] transition-all duration-200 hover:scale-105 text-sm"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Escríbenos por WhatsApp
                    </a>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 text-white/70 font-medium rounded-xl hover:bg-white/10 hover:text-white transition-all duration-200 text-sm"
                    >
                        Volver al inicio
                    </a>
                </div>
            </div>
        </main>
    )
}
