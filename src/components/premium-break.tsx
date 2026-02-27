'use client'

import { useEffect, useRef } from 'react'

export function PremiumBreak() {
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
        <section ref={sectionRef} className="py-12 bg-base-bg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="fade-section w-full rounded-3xl p-2 sm:p-4 bg-white/50 border border-gray-100 shadow-2xl shadow-brand/10 backdrop-blur-xl">
                    <div className="overflow-hidden rounded-2xl w-full">
                        <img
                            src="/premium-horizontal.png"
                            alt="Cocon Premium"
                            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
