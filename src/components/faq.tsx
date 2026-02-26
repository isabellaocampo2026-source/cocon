'use client'

import { useState, useEffect, useRef } from 'react'
import { FAQ_ITEMS } from '@/lib/constants'

export function FAQ() {
    const sectionRef = useRef<HTMLElement>(null)
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
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
            <div className="max-w-2xl mx-auto">
                <div className="fade-section text-center mb-12">
                    <p className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-widest mb-3">
                        FAQ
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Preguntas frecuentes
                    </h2>
                </div>

                <div className="fade-section space-y-3">
                    {FAQ_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="glass-card overflow-hidden transition-all duration-200 hover:border-white/15"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full flex items-center justify-between p-5 text-left"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-white font-medium text-sm sm:text-base pr-4">
                                    {item.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-[#8B5CF6] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48' : 'max-h-0'
                                    }`}
                            >
                                <p className="px-5 pb-5 text-white/55 text-sm leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
