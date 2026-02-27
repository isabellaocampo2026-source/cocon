'use client'

import { useEffect, useRef } from 'react'

const INGREDIENTS = [
    {
        title: 'Melatonina Pura',
        desc: 'La hormona natural que le dice a tu cerebro que es hora de dormir. Ayuda a regular tu ciclo circadiano rápido.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        )
    },
    {
        title: 'Extractos Botánicos',
        desc: 'Manzanilla, Toronjil y Pasiflora. Una mezcla herbal probada por siglos para calmar el sistema nervioso.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        )
    },
    {
        title: 'Cero Azúcar Añadida',
        desc: 'Sabor delicioso a mora con endulzantes naturales. No rompe tu dieta ni dispara tu insulina antes de dormir.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    },
]

export function Solution() {
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
        <section ref={sectionRef} className="py-20 sm:py-28 px-4 bg-brand-lighter/30">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <div className="fade-section text-center mb-16">
                    <span className="text-brand font-bold tracking-wider uppercase text-sm mb-3 block">
                        Fórmula Natural
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-base-text tracking-tight">
                        Por qué Cocon funciona tan bien
                    </h2>
                    <p className="text-base-muted text-lg max-w-2xl mx-auto">
                        A diferencia de los somníferos fuertes de farmacia, Cocon trabaja <strong>con</strong> tu cuerpo, no en contra de él. Combinamos ciencia moderna con sabiduría botánica.
                    </p>
                </div>

                {/* 3 Ingredients */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {INGREDIENTS.map((item, index) => (
                        <div
                            key={index}
                            className="fade-section bg-white p-8 rounded-2xl shadow-sm border border-brand-lighter text-center group hover:-translate-y-1 transition-transform duration-300"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="w-14 h-14 mx-auto rounded-full bg-brand text-white flex items-center justify-center mb-6 shadow-md shadow-brand/20 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-base-text">
                                {item.title}
                            </h3>
                            <p className="text-base-muted leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Why gummy callout */}
                <div className="fade-section bg-white border border-gray-100 p-8 sm:p-10 rounded-2xl shadow-card text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <img src="/paquete_gomitas.png" alt="Gomitas Cocon" className="w-32 object-contain" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-xl font-bold text-base-text mb-3">
                            ¿Por qué gomitas y no pastillas?
                        </h3>
                        <p className="text-base-muted leading-relaxed">
                            Las gomitas tienen <strong>mejor absorción sublingual</strong> que las pastillas sólidas. Pasan a tu torrente sanguíneo más rápido y, lo más importante: son tan ricas que nunca olvidarás tomarlas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
