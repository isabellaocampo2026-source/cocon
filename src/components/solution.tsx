'use client'

import { useEffect, useRef } from 'react'

const STEPS = [
    {
        number: '1',
        icon: '🍬',
        title: 'Comes 2 gomitas',
        desc: '30 minutos antes de dormir',
    },
    {
        number: '2',
        icon: '😌',
        title: 'Tu cuerpo se relaja',
        desc: 'La melatonina activa tu ciclo natural de sueño',
    },
    {
        number: '3',
        icon: '😴',
        title: 'Te duermes profundamente',
        desc: 'Y despiertas descansado(a), sin groggy',
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
        <section ref={sectionRef} className="py-20 sm:py-28 px-4 bg-[#141428]/50">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <div className="fade-section text-center mb-16">
                    <p className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-widest mb-3">
                        La solución
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Conoce{' '}
                        <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">
                            Cocon
                        </span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-xl mx-auto">
                        Gomitas de melatonina + extractos naturales relajantes.
                        <br />
                        Tu nuevo aliado para dormir mejor.
                    </p>
                </div>

                {/* 3 Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {STEPS.map((step, index) => (
                        <div
                            key={index}
                            className="fade-section glass-card p-6 text-center relative group transition-all duration-300 hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/5"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Step number */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#7C3AED] text-white text-xs font-bold flex items-center justify-center">
                                {step.number}
                            </div>
                            <div className="text-4xl mb-4 mt-2">{step.icon}</div>
                            <h3 className="text-lg font-semibold mb-2 text-white">
                                {step.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Why gummy not pill */}
                <div className="fade-section glass-card p-8 sm:p-10 text-center max-w-2xl mx-auto">
                    <h3 className="text-xl font-semibold mb-3">
                        ¿Por qué gomita y no pastilla?
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                        Las gomitas tienen <span className="text-white font-medium">mejor absorción sublingual</span> que las pastillas,
                        son más fáciles de tomar, y son <span className="text-white font-medium">mucho más ricas</span>.
                        No estarás forzándote a tomar algo que no te gusta —
                        le vas a esperar con ganas a la hora de dormir.
                    </p>
                </div>
            </div>
        </section>
    )
}
