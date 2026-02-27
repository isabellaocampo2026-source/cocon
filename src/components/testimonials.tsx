'use client'

import { useEffect, useRef } from 'react'
import { TESTIMONIALS } from '@/lib/constants'

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? 'text-[#FBBF24]' : 'text-white/20'
                        }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

export function Testimonials() {
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
        <section ref={sectionRef} className="py-20 sm:py-28 px-4 bg-brand-lighter/30">
            <div className="max-w-5xl mx-auto">
                <div className="fade-section text-center mb-14">
                    <span className="text-brand font-bold tracking-wider uppercase text-sm mb-3 block">
                        Testimonios Reales
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-base-text">
                        Lo que dicen nuestros clientes
                    </h2>
                    <p className="text-base-muted text-sm">
                        Resultados de personas reales que ya duermen mejor.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className="fade-section bg-white p-8 rounded-2xl shadow-sm border border-brand-lighter transition-shadow hover:shadow-card"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <StarRating rating={testimonial.rating} />
                            <p className="text-base-text mt-4 mb-6 leading-relaxed italic">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-4">
                                {/* Avatar placeholder */}
                                <div className="w-12 h-12 rounded-full bg-brand-lighter text-brand flex items-center justify-center font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-base-text font-bold">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-base-muted text-sm">{testimonial.city}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
