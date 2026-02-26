'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { VARIANTS, COLOMBIAN_CITIES } from '@/lib/constants'

export function OrderForm() {
    const router = useRouter()
    const params = useSearchParams()
    const sectionRef = useRef<HTMLElement>(null)
    const [variant, setVariant] = useState('2-frascos')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [acceptWhatsApp, setAcceptWhatsApp] = useState(false)
    const [honeypot, setHoneypot] = useState('')
    const [form, setForm] = useState({
        fullName: '',
        phone: '',
        city: '',
        address: '',
    })

    // Phone validation
    const isPhoneValid = /^3\d{9}$/.test(form.phone)
    const isFormComplete =
        form.fullName.trim().length >= 2 &&
        isPhoneValid &&
        form.city.trim().length >= 2 &&
        form.address.trim().length >= 5 &&
        acceptWhatsApp

    // Capture UTM params once on mount
    const [utmData, setUtmData] = useState({
        utmSource: '',
        utmMedium: '',
        utmCampaign: '',
        utmTerm: '',
        gclid: '',
        landingUrl: '',
    })

    useEffect(() => {
        setUtmData({
            utmSource: params.get('utm_source') || '',
            utmMedium: params.get('utm_medium') || '',
            utmCampaign: params.get('utm_campaign') || '',
            utmTerm: params.get('utm_term') || '',
            gclid: params.get('gclid') || '',
            landingUrl: window.location.href,
        })
    }, [params])

    // Scroll reveal
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

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        // Honeypot check
        if (honeypot) return

        if (!isFormComplete) {
            setError('Por favor completa todos los campos correctamente.')
            return
        }

        setLoading(true)

        try {
            const res = await fetch('/api/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: form.fullName.trim(),
                    phone: form.phone.trim(),
                    city: form.city.trim(),
                    address: form.address.trim(),
                    productVariant: variant,
                    ...utmData,
                }),
            })

            const data = await res.json()

            if (res.ok && data.success) {
                // Fire Google Ads conversion
                const selectedVariant = VARIANTS.find((v) => v.id === variant)
                if (typeof window !== 'undefined' && typeof (window as unknown as { gtag: (...args: unknown[]) => void }).gtag === 'function') {
                    const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag
                    gtag('event', 'conversion', {
                        send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL}`,
                        value: selectedVariant?.total,
                        currency: 'COP',
                    })
                }
                router.push('/gracias')
            } else {
                setError(data.error || 'Error al enviar. Intenta de nuevo.')
            }
        } catch {
            setError('Error de conexión. Verifica tu internet e intenta de nuevo.')
        } finally {
            setLoading(false)
        }
    }

    const selectedVariant = VARIANTS.find((v) => v.id === variant)

    return (
        <section
            ref={sectionRef}
            id="order-form"
            className="py-20 sm:py-28 px-4 scroll-mt-12"
        >
            <div className="max-w-xl mx-auto">
                <div className="fade-section text-center mb-12">
                    <p className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-widest mb-3">
                        Haz tu pedido
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                        Pide tus gomitas{' '}
                        <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">
                            Cocon
                        </span>
                    </h2>
                    <p className="text-white/50 text-sm">
                        Solo pagas cuando recibas el producto en tu puerta
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="fade-section glass-card p-6 sm:p-8 space-y-6"
                >
                    {/* Variant selector */}
                    <div className="space-y-3">
                        {VARIANTS.map((v) => (
                            <label
                                key={v.id}
                                className={`
                  flex items-center justify-between p-4 rounded-2xl border-2 
                  cursor-pointer transition-all duration-200
                  ${variant === v.id
                                        ? 'border-[#7C3AED] bg-[#7C3AED]/10'
                                        : 'border-white/10 hover:border-white/25'
                                    }
                `}
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="variant"
                                        value={v.id}
                                        checked={variant === v.id}
                                        onChange={() => setVariant(v.id)}
                                        className="accent-[#7C3AED] w-4 h-4"
                                    />
                                    <div>
                                        <span className="font-medium text-white text-sm sm:text-base">
                                            {v.label}
                                        </span>
                                        {v.popular && (
                                            <span className="ml-2 text-xs bg-[#7C3AED] text-white px-2.5 py-0.5 rounded-full font-medium">
                                                Más popular
                                            </span>
                                        )}
                                        {v.best && (
                                            <span className="ml-2 text-xs bg-[#34D399] text-black px-2.5 py-0.5 rounded-full font-medium">
                                                Mejor precio
                                            </span>
                                        )}
                                        {v.shipping === 0 ? (
                                            <span className="block text-xs text-[#34D399] mt-0.5">
                                                Envío gratis
                                            </span>
                                        ) : (
                                            <span className="block text-xs text-white/40 mt-0.5">
                                                + {formatPrice(v.shipping)} envío
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <span className="text-base sm:text-lg font-bold text-white">
                                    {formatPrice(v.total)}
                                </span>
                            </label>
                        ))}
                    </div>

                    {/* Price summary */}
                    {selectedVariant && (
                        <div className="text-center py-3 rounded-xl bg-white/5 border border-white/5">
                            <p className="text-white/50 text-sm">
                                Total a pagar al recibir:{' '}
                                <span className="text-white font-bold text-lg">
                                    {formatPrice(selectedVariant.total)}
                                </span>
                            </p>
                        </div>
                    )}

                    {/* Form fields */}
                    <div className="space-y-4">
                        <div>
                            <input
                                required
                                placeholder="Nombre completo *"
                                value={form.fullName}
                                onChange={(e) =>
                                    setForm({ ...form, fullName: e.target.value })
                                }
                                className={`w-full p-4 rounded-xl bg-white/5 border text-white placeholder:text-white/30 
                  focus:outline-none transition duration-200 text-sm
                  ${form.fullName && form.fullName.trim().length >= 2
                                        ? 'border-[#34D399]/40 focus:border-[#34D399]'
                                        : 'border-white/10 focus:border-[#7C3AED]'
                                    }`}
                            />
                        </div>

                        <div>
                            <input
                                required
                                placeholder="WhatsApp (ej: 3001234567) *"
                                type="tel"
                                inputMode="numeric"
                                maxLength={10}
                                value={form.phone}
                                onChange={(e) => {
                                    const val = e.target.value.replace(/\D/g, '')
                                    setForm({ ...form, phone: val })
                                }}
                                className={`w-full p-4 rounded-xl bg-white/5 border text-white placeholder:text-white/30 
                  focus:outline-none transition duration-200 text-sm
                  ${form.phone.length > 0
                                        ? isPhoneValid
                                            ? 'border-[#34D399]/40 focus:border-[#34D399]'
                                            : 'border-[#F87171]/40 focus:border-[#F87171]'
                                        : 'border-white/10 focus:border-[#7C3AED]'
                                    }`}
                            />
                            {form.phone.length > 0 && !isPhoneValid && (
                                <p className="text-[#F87171] text-xs mt-1.5 ml-1">
                                    Ingresa un número válido de 10 dígitos que empiece por 3
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                required
                                placeholder="Ciudad *"
                                list="cities-list"
                                value={form.city}
                                onChange={(e) => setForm({ ...form, city: e.target.value })}
                                className={`w-full p-4 rounded-xl bg-white/5 border text-white placeholder:text-white/30 
                  focus:outline-none transition duration-200 text-sm
                  ${form.city && form.city.trim().length >= 2
                                        ? 'border-[#34D399]/40 focus:border-[#34D399]'
                                        : 'border-white/10 focus:border-[#7C3AED]'
                                    }`}
                            />
                            <datalist id="cities-list">
                                {COLOMBIAN_CITIES.map((city) => (
                                    <option key={city} value={city} />
                                ))}
                            </datalist>
                        </div>

                        <div>
                            <input
                                required
                                placeholder="Dirección completa de envío *"
                                value={form.address}
                                onChange={(e) =>
                                    setForm({ ...form, address: e.target.value })
                                }
                                className={`w-full p-4 rounded-xl bg-white/5 border text-white placeholder:text-white/30 
                  focus:outline-none transition duration-200 text-sm
                  ${form.address && form.address.trim().length >= 5
                                        ? 'border-[#34D399]/40 focus:border-[#34D399]'
                                        : 'border-white/10 focus:border-[#7C3AED]'
                                    }`}
                            />
                        </div>

                        {/* Honeypot - hidden from users */}
                        <input
                            type="text"
                            name="website"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                            className="absolute opacity-0 -z-10 h-0 w-0"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                        />
                    </div>

                    {/* WhatsApp consent */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            checked={acceptWhatsApp}
                            onChange={(e) => setAcceptWhatsApp(e.target.checked)}
                            className="accent-[#7C3AED] mt-1 w-4 h-4 flex-shrink-0"
                        />
                        <span className="text-white/50 text-xs leading-relaxed group-hover:text-white/70 transition">
                            Acepto que me contacten por WhatsApp para confirmar mi pedido
                        </span>
                    </label>

                    {/* Error message */}
                    {error && (
                        <div className="p-3 rounded-xl bg-[#F87171]/10 border border-[#F87171]/20 text-center">
                            <p className="text-[#F87171] text-sm">{error}</p>
                        </div>
                    )}

                    {/* Submit button */}
                    <button
                        type="submit"
                        disabled={loading || !isFormComplete}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white font-bold text-base sm:text-lg 
              transition-all duration-300
              hover:from-[#8B5CF6] hover:to-[#7C3AED] hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]
              disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none
              active:scale-[0.98]"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                    />
                                </svg>
                                Enviando...
                            </span>
                        ) : (
                            'CONFIRMAR PEDIDO — PAGAS AL RECIBIR'
                        )}
                    </button>

                    <p className="text-center text-xs text-white/30">
                        🔒 Te contactamos por WhatsApp para confirmar. No pagas nada ahora.
                    </p>
                </form>
            </div>
        </section>
    )
}
