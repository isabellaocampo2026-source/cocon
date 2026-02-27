'use client'

import { useEffect, useRef } from 'react'

const ROWS = [
    { criteria: 'Genera Dependencia', pills: 'Sí', cocon: 'No' },
    { criteria: 'Requiere receta médica', pills: 'Sí', cocon: 'No' },
    { criteria: 'Sabor', pills: 'Químico desagradable', cocon: 'Delicioso a mora' },
    { criteria: 'Efecto al día siguiente', pills: 'Sensación de resaca', cocon: 'Mente clara' },
    { criteria: 'Ingredientes principales', pills: 'Químicos sintéticos', cocon: 'Botánicos naturales' },
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
                        Comparación
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold text-base-text">
                        Por qué elegir <span className="text-brand">Cocon</span>
                    </h2>
                </div>

                <div className="fade-section bg-white rounded-2xl shadow-card border border-brand-lighter overflow-hidden">
                    {/* Table header */}
                    <div className="grid grid-cols-3 border-b border-brand-lighter bg-base-bg">
                        <div className="p-4 sm:p-6" />
                        <div className="p-4 sm:p-6 text-center text-base-muted text-sm font-bold uppercase tracking-wider">
                            Somníferos Comunes
                        </div>
                        <div className="p-4 sm:p-6 text-center bg-brand-lighter/50 text-brand text-sm font-bold uppercase tracking-wider">
                            Gomitas Cocon
                        </div>
                    </div>

                    {/* Table rows */}
                    {ROWS.map((row, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-3 ${index < ROWS.length - 1 ? 'border-b border-gray-100' : ''
                                }`}
                        >
                            <div className="p-4 sm:p-6 text-base-text font-medium flex items-center">
                                {row.criteria}
                            </div>
                            <div className="p-4 sm:p-6 text-center flex items-center justify-center gap-2">
                                <span className="text-accent-red font-bold">✕</span>
                                <span className="text-base-muted text-sm">{row.pills}</span>
                            </div>
                            <div className="p-4 sm:p-6 text-center bg-brand-lighter/20 flex items-center justify-center gap-2">
                                <span className="text-accent-green font-bold text-lg">✓</span>
                                <span className="text-base-text text-sm font-semibold">{row.cocon}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
