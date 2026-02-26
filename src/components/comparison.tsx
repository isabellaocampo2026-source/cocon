'use client'

import { useEffect, useRef } from 'react'

const ROWS = [
    { criteria: 'Dependencia', pills: 'Sí', cocon: 'No' },
    { criteria: 'Receta médica', pills: 'Necesaria', cocon: 'No necesaria' },
    { criteria: 'Sabor', pills: 'Desagradable', cocon: 'Delicioso' },
    { criteria: 'Efecto mañana', pills: 'Groggy', cocon: 'Fresco' },
    { criteria: 'Composición', pills: 'Químico', cocon: '100% Natural' },
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
        <section ref={sectionRef} className="py-20 sm:py-28 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="fade-section text-center mb-12">
                    <p className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-widest mb-3">
                        Comparación
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Pastillas vs.{' '}
                        <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">
                            Cocon
                        </span>
                    </h2>
                </div>

                <div className="fade-section glass-card overflow-hidden">
                    {/* Table header */}
                    <div className="grid grid-cols-3 border-b border-white/10">
                        <div className="p-4 sm:p-5 text-white/40 text-sm font-medium" />
                        <div className="p-4 sm:p-5 text-center text-white/50 text-sm font-semibold uppercase tracking-wider">
                            Pastillas
                        </div>
                        <div className="p-4 sm:p-5 text-center bg-[#7C3AED]/10 text-[#8B5CF6] text-sm font-semibold uppercase tracking-wider">
                            Cocon ✨
                        </div>
                    </div>

                    {/* Table rows */}
                    {ROWS.map((row, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-3 ${index < ROWS.length - 1 ? 'border-b border-white/5' : ''
                                } transition-colors hover:bg-white/[0.02]`}
                        >
                            <div className="p-4 sm:p-5 text-white/70 text-sm font-medium flex items-center">
                                {row.criteria}
                            </div>
                            <div className="p-4 sm:p-5 text-center flex items-center justify-center gap-2">
                                <span className="text-[#F87171]">✗</span>
                                <span className="text-white/40 text-sm">{row.pills}</span>
                            </div>
                            <div className="p-4 sm:p-5 text-center bg-[#7C3AED]/5 flex items-center justify-center gap-2">
                                <span className="text-[#34D399]">✓</span>
                                <span className="text-white/80 text-sm font-medium">{row.cocon}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
