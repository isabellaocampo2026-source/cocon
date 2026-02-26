'use client'

import { useEffect, useRef } from 'react'

export function Hero() {
    const starsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Generate random stars for the night sky effect
        if (!starsRef.current) return
        const container = starsRef.current
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div')
            star.className = 'star'
            star.style.left = `${Math.random() * 100}%`
            star.style.top = `${Math.random() * 100}%`
            star.style.setProperty('--duration', `${2 + Math.random() * 4}s`)
            star.style.setProperty('--delay', `${Math.random() * 3}s`)
            star.style.width = `${1 + Math.random() * 2}px`
            star.style.height = star.style.width
            container.appendChild(star)
        }
        return () => {
            container.innerHTML = ''
        }
    }, [])

    const scrollToForm = () => {
        const el = document.getElementById('order-form')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Stars background */}
            <div ref={starsRef} className="absolute inset-0 pointer-events-none" />

            {/* Purple glow orb */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                {/* Product image as visual anchor */}
                <div className="mb-8 animate-[float_3s_ease-in-out_infinite]">
                    <img
                        src="/paquete_gomitas.png"
                        alt="Paquete de gomitas Cocon"
                        className="w-32 sm:w-40 mx-auto drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                    />
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                    ¿Otra noche
                    <br />
                    <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">
                        sin poder dormir?
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Descubre las gomitas naturales de melatonina que te ayudan a dormir
                    en menos de 30 minutos.
                    <br className="hidden sm:block" />
                    <span className="text-white/50">
                        Sin pastillas. Sin receta. Sin dependencia.
                    </span>
                </p>

                {/* CTA Button */}
                <button
                    onClick={scrollToForm}
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:from-[#8B5CF6] hover:to-[#7C3AED] hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] active:scale-100"
                >
                    Quiero dormir mejor
                    <span className="text-white/60 text-sm font-normal">
                        → Pagas al recibir
                    </span>
                </button>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10">
                    {[
                        { icon: '🌿', text: 'Natural' },
                        { icon: '📋', text: 'Sin receta' },
                        { icon: '📦', text: 'Pago contra entrega' },
                    ].map((badge) => (
                        <div
                            key={badge.text}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
                        >
                            <span>{badge.icon}</span>
                            <span>{badge.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
