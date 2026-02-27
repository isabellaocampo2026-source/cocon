'use client'

import { useEffect, useRef } from 'react'

const PAIN_POINTS = [
    {
        title: 'Horas dando vueltas',
        desc: 'Tu mente no se apaga aunque tu cuerpo esté agotado.',
    },
    {
        title: 'Despertar a medias',
        desc: 'Sientes que no descansaste nada y la fatiga te arrastra todo el día.',
    },
    {
        title: 'Páginas y tés',
        desc: 'Ya probaste remedios caseros, meditaciones y tés que no hacen efecto.',
    },
    {
        title: 'Miedo a las pastillas',
        desc: 'No quieres depender de químicos fuertes ni sentir resaca medicamentosa.',
    },
]

export function Problem() {
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
                {/* Section heading */}
                <div className="fade-section text-center mb-16">
                    <span className="text-brand font-bold tracking-wider uppercase text-sm mb-3 block">
                        El Problema
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-base-text tracking-tight">
                        Dar vueltas a las 3:00 AM <br className="hidden sm:block" /> no es vida.
                    </h2>
                    <p className="text-lg text-base-muted max-w-2xl mx-auto">
                        Más de 4 millones de colombianos sufren de insomnio crónico.
                        No estás solo en esto.
                    </p>
                </div>

                {/* Pain points grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {PAIN_POINTS.map((point, index) => (
                        <div
                            key={index}
                            className="fade-section flex gap-4 p-6 rounded-2xl bg-base-bg border border-gray-100 hover:shadow-card transition-shadow"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 rounded-full bg-brand-lighter text-brand flex items-center justify-center font-bold">
                                    ✕
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-base-text mb-2">{point.title}</h3>
                                <p className="text-base-muted leading-relaxed">
                                    {point.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
