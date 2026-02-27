'use client'

import { useEffect, useRef } from 'react'

const INGREDIENTS = [
    {
        title: 'Magnesio (Glicinato)',
        desc: 'El mineral esencial celular. Relaja profundamente los músculos y el sistema nervioso central sin sedarte de forma forzada.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: 'L-Teanina (Té Verde)',
        desc: 'El aminoácido del enfoque calmado. Aumenta las ondas alfa del cerebro para apagar la "mente acelerada" nocturna.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )
    },
    {
        title: 'Apigenina (Manzanilla)',
        desc: 'Un antioxidante puro que actúa sobre los receptores GABA, disminuyendo la ansiedad y promoviendo el sueño reparador y continuo.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
                        Neuro-Nutrición
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-base-text tracking-tight">
                        La ciencia detrás del Sleep Cocktail
                    </h2>
                    <p className="text-base-muted text-lg max-w-2xl mx-auto">
                        <strong>Cero Melatonina Artificial.</strong> En lugar de sedarte por la fuerza limitando tus hormonas, le damos a tu cuerpo los nutrientes moleculares exactos para que construya su propio descanso regenerativo.
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

                {/* Why powder callout */}
                <div className="fade-section bg-white border border-gray-100 p-8 sm:p-10 rounded-2xl shadow-card text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <img src="/paquete_gomitas.png" alt="Cocon Polvo" className="w-32 object-contain" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-xl font-bold text-base-text mb-3">
                            ¿Por qué en polvo y no en pastillas?
                        </h3>
                        <p className="text-base-muted leading-relaxed">
                            Para alcanzar la <strong>dosis clínica real</strong> de Magnesio que usan los neurólogos, tendrías que tomarte de 4 a 6 pastillas gigantes. Un <i>scoop</i> (medidor) de nuestro cóctel en un vaso de agua antes de dormir es delicioso, gentil con tu estómago y de <strong>absorción inmediata</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
