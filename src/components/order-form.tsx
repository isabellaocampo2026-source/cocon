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
            className="py-20 sm:py-28 px-4 scroll-mt-12 bg-base-bg"
        >
            <div className="max-w-xl mx-auto">
                <div className="fade-section text-center mb-12">
                    <span className="text-brand font-bold tracking-wider uppercase text-sm mb-3 block">
                        Paso Final
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold mb-3 text-base-text tracking-tight">
                        Elige tu paquete
                    </h2>
                    <p className="text-base-muted text-sm sm:text-base">
                        Selecciona la cantidad y paga solo cuando te entreguemos el producto en la puerta de tu casa.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="fade-section bg-white rounded-2xl shadow-card border border-gray-100 p-6 sm:p-8 space-y-6"
                >
                    {/* Variant selector */}
                    <div className="space-y-4">
                        {VARIANTS.map((v) => (
                            <label
                                key={v.id}
                                className={`
                  flex items-center justify-between p-4 sm:p-5 rounded-xl border-2 
                  cursor-pointer transition-all duration-200 block w-full
                  ${variant === v.id
                                        ? 'border-brand bg-brand-lighter/20 ring-1 ring-brand'
                                        : 'border-gray-200 hover:border-gray-300 bg-white'
                                    }
                `}
                            >
                                <div className="flex items-center gap-4">
                                    <input
                                        type="radio"
                                        name="variant"
                                        value={v.id}
                                        checked={variant === v.id}
                                        onChange={() => setVariant(v.id)}
                                        className="accent-brand w-5 h-5 flex-shrink-0"
                                    />
                                    <div>
                                        <div className="flex items-center flex-wrap gap-2 mb-1">
                                            <span className="font-bold text-base-text text-base sm:text-lg leading-none">
                                                {v.label}
                                            </span>
                                            {v.popular && (
                                                <span className="text-[10px] sm:text-xs bg-brand text-white px-2 py-0.5 rounded uppercase font-bold tracking-wide">
                                                    Más Popular
                                                </span>
                                            )}
                                            {v.best && (
                                                <span className="text-[10px] sm:text-xs bg-accent-gold text-white px-2 py-0.5 rounded uppercase font-bold tracking-wide">
                                                    Mejor Valor
                                                </span>
                                            )}
                                        </div>
                                        {v.shipping === 0 ? (
                                            <span className="block text-sm font-semibold text-accent-green">
                                                Envío Gratis
                                            </span>
                                        ) : (
                                            <span className="block text-sm text-base-muted">
                                                + {formatPrice(v.shipping)} envío
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <span className="text-lg sm:text-xl font-black text-brand text-right">
                                    {formatPrice(v.total)}
                                </span>
                            </label>
                        ))}
                    </div>

                    {/* Price summary */}
                    {selectedVariant && (
                        <div className="text-center py-4 rounded-xl bg-gray-50 border border-gray-100">
                            <p className="text-base-muted text-sm sm:text-base">
                                Total a pagar al recibir:{' '}
                                <span className="text-base-text font-black text-xl sm:text-2xl ml-2">
                                    {formatPrice(selectedVariant.total)}
                                </span>
                            </p>
                        </div>
                    )}

                    {/* Form fields */}
                    <div className="space-y-4 pt-4 border-t border-gray-100">
                        <h3 className="font-bold text-base-text text-lg mb-4">Datos de Envío</h3>

                        <div>
                            <input
                                required
                                placeholder="Nombre completo *"
                                value={form.fullName}
                                onChange={(e) =>
                                    setForm({ ...form, fullName: e.target.value })
                                }
                                className={`w-full p-4 rounded-xl bg-gray-50 border text-base-text placeholder:text-gray-400 
                  focus:outline-none focus:bg-white transition duration-200 text-base
                  ${form.fullName && form.fullName.trim().length >= 2
                                        ? 'border-brand/40 focus:border-brand ring-1 ring-brand/0 focus:ring-brand/20'
                                        : 'border-gray-200 focus:border-brand ring-1 ring-transparent focus:ring-brand/20'
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
                                className={`w-full p-4 rounded-xl bg-gray-50 border text-base-text placeholder:text-gray-400 
                  focus:outline-none focus:bg-white transition duration-200 text-base
                  ${form.phone.length > 0
                                        ? isPhoneValid
                                            ? 'border-brand/40 focus:border-brand ring-1 ring-brand/0 focus:ring-brand/20'
                                            : 'border-accent-red focus:border-accent-red ring-1 ring-transparent focus:ring-accent-red/20'
                                        : 'border-gray-200 focus:border-brand ring-1 ring-transparent focus:ring-brand/20'
                                    }`}
                            />
                            {form.phone.length > 0 && !isPhoneValid && (
                                <p className="text-accent-red text-xs mt-1.5 ml-1 font-medium">
                                    Ingresa un número válido de 10 dígitos que empiece por 3.
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
                                className={`w-full p-4 rounded-xl bg-gray-50 border text-base-text placeholder:text-gray-400 
                  focus:outline-none focus:bg-white transition duration-200 text-base
                  ${form.city && form.city.trim().length >= 2
                                        ? 'border-brand/40 focus:border-brand ring-1 ring-brand/0 focus:ring-brand/20'
                                        : 'border-gray-200 focus:border-brand ring-1 ring-transparent focus:ring-brand/20'
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
                                className={`w-full p-4 rounded-xl bg-gray-50 border text-base-text placeholder:text-gray-400 
                  focus:outline-none focus:bg-white transition duration-200 text-base
                  ${form.address && form.address.trim().length >= 5
                                        ? 'border-brand/40 focus:border-brand ring-1 ring-brand/0 focus:ring-brand/20'
                                        : 'border-gray-200 focus:border-brand ring-1 ring-transparent focus:ring-brand/20'
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
                    <label className="flex items-start gap-3 cursor-pointer group p-4 bg-gray-50 rounded-xl border border-gray-100 mt-2">
                        <input
                            type="checkbox"
                            checked={acceptWhatsApp}
                            onChange={(e) => setAcceptWhatsApp(e.target.checked)}
                            className="accent-brand mt-0.5 w-5 h-5 flex-shrink-0 cursor-pointer"
                        />
                        <span className="text-base-muted text-sm leading-snug group-hover:text-base-text transition cursor-pointer">
                            Acepto que me envíen un mensaje por <strong>WhatsApp</strong> para confirmar mi orden y dirección.
                        </span>
                    </label>

                    {/* Error message */}
                    {error && (
                        <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-center">
                            <p className="text-accent-red font-medium text-sm">{error}</p>
                        </div>
                    )}

                    {/* Submit button */}
                    <button
                        type="submit"
                        disabled={loading || !isFormComplete}
                        className="w-full py-5 rounded-xl bg-accent-green text-white font-black text-lg sm:text-xl
              transition-all duration-300 shadow-lg shadow-accent-green/20
              hover:bg-accent-greenHover hover:shadow-accent-green/40 hover:-translate-y-0.5
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0
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
                                Procesando Seguro...
                            </span>
                        ) : (
                            'COMPLETAR PEDIDO AHORA'
                        )}
                    </button>

                    <div className="flex flex-col items-center justify-center gap-2 pt-2">
                        <div className="flex items-center gap-1.5 text-base-muted text-xs font-medium">
                            <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Tus datos están protegidos. Pagas en efectivo al repartidor.
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
