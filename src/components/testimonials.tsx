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
        <section ref={sectionRef} className="py-20 sm:py-28 px-4 bg-[#141428]/50">
            <div className="max-w-5xl mx-auto">
                <div className="fade-section text-center mb-14">
                    <p className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-widest mb-3">
                        Testimonios
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                        Lo que dicen nuestros clientes
                    </h2>
                    <p className="text-white/40 text-sm">
                        Resultados reales de usuarios de melatonina
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className="fade-section glass-card p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <StarRating rating={testimonial.rating} />
                            <p className="text-white/75 mt-4 mb-5 leading-relaxed text-[15px] italic">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                {/* Avatar placeholder */}
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center text-white font-bold text-sm">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-white/40 text-xs">{testimonial.city}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
