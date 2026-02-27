'use client'

import { useEffect, useRef } from 'react'

const ROWS = [
    { criteria: 'Mecanismo', pills: 'Sedación forzada (Hormonas agregadas)', cocon: 'Nutrición cerebral natural' },
    { criteria: 'Uso a largo plazo', pills: 'Genera tolerancia y dependencia', cocon: 'Optimiza tu salud (Uso diario recomendado)' },
    { criteria: 'Energía al despertar', pills: '"Resaca" fisiológica y niebla mental', cocon: 'Fresco y totalmente recuperado' },
    { criteria: 'Formato', pills: 'Pastillas difíciles de asimilar', cocon: 'Bebida relajante de absorción rápida' },
    { criteria: 'Ingredientes principales', pills: 'Melatonina sintética o químicos', cocon: 'Magnesio + Teanina + Manzanilla' },
]

export function Comparison() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.15 }
        )

        const section = sectionRef.current
        if (section) {
            const items = section.querySelectorAll('.fade-section')
            items.forEach((item) => observer.observe(item))
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-20 sm:py-28 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="fade-section text-center mb-16">
                    <span className="text-brand font-bold tracking-wider uppercase text-sm mb-3 block">
                        Nutrición vs Sedación
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold text-base-text">
                        Por qué elegir <span className="text-brand">Cocon</span>
                    </h2>
                </div>

                <div className="fade-section bg-white rounded-2xl shadow-card border border-brand-lighter overflow-hidden">
                    {/* Table header */}
                    <div className="grid grid-cols-3 border-b border-brand-lighter bg-base-bg">
                        <div className="p-4 sm:p-6" />
                        <div className="p-4 sm:p-6 text-center text-base-muted text-xs sm:text-sm font-bold uppercase tracking-wider">
                            Somníferos & Melatonina
                        </div>
                        <div className="p-4 sm:p-6 text-center bg-brand-lighter/50 text-brand text-xs sm:text-sm font-bold uppercase tracking-wider">
                            Sleep Cocktail Cocon
                        </div>
                    </div>

                    {/* Table rows */}
                    {ROWS.map((row, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-3 ${index < ROWS.length - 1 ? 'border-b border-gray-100' : ''
                                }`}
                        >
                            <div className="p-4 sm:p-6 text-base-text font-medium text-xs sm:text-base flex items-center">
                                {row.criteria}
                            </div>
                            <div className="p-4 sm:p-6 text-center flex flex-col sm:flex-row items-center justify-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">✕</span>
                                <span className="text-base-muted text-xs sm:text-sm">{row.pills}</span>
                            </div>
                            <div className="p-4 sm:p-6 text-center bg-brand-lighter/20 flex flex-col sm:flex-row items-center justify-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">✓</span>
                                <span className="text-base-text text-xs sm:text-sm font-semibold">{row.cocon}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
