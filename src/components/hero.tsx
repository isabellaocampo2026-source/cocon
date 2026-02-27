'use client'

export function Hero() {
    const scrollToForm = () => {
        const el = document.getElementById('order-form')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-base-bg">
            {/* Subtle organic background accent */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-brand-lighter/50 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Column: Product Image Gallery / Hero Shot */}
                    <div className="relative mb-12 lg:mb-0 flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Backdrop highlight for the product */}
                            <div className="absolute inset-0 bg-brand-lighter rounded-full transform scale-90 blur-2xl opacity-60"></div>
                            <img
                                src="/paquete_gomitas.png"
                                alt="Cocon Gomitas de Melatonina"
                                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                            {/* Trust Badge overlay REMOVED */}
                        </div>
                    </div>

                    {/* Right Column: Copy & Conversion (The Buy Box) */}
                    <div className="text-left animate-fade-in">

                        {/* Reviews */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex text-accent-gold">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm font-medium text-base-text underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-brand transition-colors">4.9/5 (97 reseñas)</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-base-text tracking-tight mb-6">
                            Apaga tu cerebro y <span className="text-brand">duerme de corrido.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-base-muted mb-8 max-w-xl leading-relaxed">
                            Gomitas de melatonina y extractos botánicos que te ayudan a conciliar el sueño en menos de 30 minutos. <strong>Sin receta, sin crear dependencia y sin sentirte mareado al día siguiente.</strong>
                        </p>

                        {/* Quick Benefits / Bullet Points */}
                        <ul className="space-y-3 mb-10">
                            {[
                                'Acción rápida (en 30 mins)',
                                'Delicioso sabor a mora de origen natural',
                                'Pago contra entrega en todo Colombia'
                            ].map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-base-text/90 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Advanced CTA Box */}
                        <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-100">
                            <button
                                onClick={scrollToForm}
                                className="w-full flex items-center justify-center gap-2 bg-brand text-white text-lg font-bold py-4 px-8 rounded-xl hover:brightness-110 transition-all transform active:scale-[0.98] shadow-lg shadow-brand/30"
                            >
                                Haz tu pedido ahora
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                            <div className="mt-4 flex items-center justify-center gap-4 text-xs font-medium text-base-muted">
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Garantía 30 días</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                    </svg>
                                    <span>Envío Asegurado</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
