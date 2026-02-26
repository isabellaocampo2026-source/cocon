'use client'

import { useEffect, useRef } from 'react'

const PAIN_POINTS = [
    {
        icon: '😩',
        text: 'Das vueltas en la cama por horas',
    },
    {
        icon: '🧟',
        text: 'Llegas zombi al trabajo',
    },
    {
        icon: '🍵',
        text: 'Ya probaste tés y remedios caseros',
    },
    {
        icon: '💊',
        text: 'Te da miedo depender de pastillas químicas',
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
        <section ref={sectionRef} className="py-20 sm:py-28 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Section heading */}
                <div className="fade-section text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        ¿Te suena familiar?
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] mx-auto rounded-full" />
                </div>

                {/* Pain points grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {PAIN_POINTS.map((point, index) => (
                        <div
                            key={index}
                            className="fade-section glass-card p-5 flex items-center gap-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <span className="text-3xl flex-shrink-0">{point.icon}</span>
                            <span className="text-white/80 text-base leading-snug">
                                {point.text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Stat callout */}
                <div className="fade-section text-center">
                    <p className="text-white/50 text-base leading-relaxed max-w-lg mx-auto">
                        No estás solo.{' '}
                        <span className="text-white font-semibold">
                            4 de cada 10 colombianos no duermen bien.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}
