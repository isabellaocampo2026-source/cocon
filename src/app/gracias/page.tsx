'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''
const CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || ''

export default function GraciasPage() {
    useEffect(() => {
        // En Next.js App Router, usar useEffect asegura que el código se ejecute
        // incluso en navegaciones internas "suaves" (como cuando vienen de order-form.tsx)
        if (GOOGLE_ADS_ID && GOOGLE_ADS_ID !== 'AW-XXXXXXXXX' && CONVERSION_LABEL) {
            const w = window as any
            w.dataLayer = w.dataLayer || []
            function gtag(...args: any[]) {
                w.dataLayer.push(arguments)
            }
            gtag('event', 'conversion', {
                send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
                value: 89900,
                currency: 'COP',
            })
            console.log('✅ Google Ads Conversion disparada con éxito:', GOOGLE_ADS_ID, CONVERSION_LABEL)
        }
    }, [])

    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-base-bg relative overflow-hidden">
            {/* Background glow (Light mode subtle purple) */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[100px] pointer-events-none" />

            <div className="relative text-center max-w-md animate-[fade-in_0.8s_ease-out] bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-gray-100 z-10 block">
                <h1 className="text-3xl sm:text-4xl font-black mb-4 text-base-text tracking-tight">
                    ¡Pedido Confirmado!
                </h1>

                <p className="text-base-text font-medium text-lg mb-4 leading-relaxed">
                    Te vamos a escribir por{' '}
                    <span className="text-[#25D366] font-bold">WhatsApp</span> en los
                    próximos minutos para verificar tu dirección.
                </p>

                <div className="bg-gray-50 py-3 px-4 rounded-xl border border-gray-100 inline-block mb-10 w-full">
                    <p className="text-base-muted text-sm font-medium">
                        Recuerda: solo pagas <strong className="text-base-text">en efectivo</strong> cuando recibas el producto. 📦
                    </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="https://wa.me/573053476462"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#22c55e] transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#25D366]/20 text-sm w-full sm:w-auto"
                    >
                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Agilizar por WhatsApp
                    </a>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-4 bg-white border border-gray-200 text-base-text font-bold rounded-xl hover:bg-gray-50 transition-all duration-200 text-sm shadow-sm hover:border-brand/30 w-full sm:w-auto"
                    >
                        Volver a la tienda
                    </a>
                </div>
            </div>
        </main>
    )
}
