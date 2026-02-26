import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { PRICES } from '@/lib/constants'

// Simple input sanitizer
function sanitize(str: string): string {
    return str
        .trim()
        .replace(/<[^>]*>/g, '') // Strip HTML tags
        .replace(/[<>]/g, '') // Extra safety
        .slice(0, 500) // Max length
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        // Honeypot check — if filled, silently accept (bots think it worked)
        if (body.website) {
            return NextResponse.json({ success: true })
        }

        // Required fields validation
        const { fullName, phone, city, address, productVariant } = body

        if (!fullName || !phone || !city || !address || !productVariant) {
            return NextResponse.json(
                { error: 'Faltan campos requeridos' },
                { status: 400 }
            )
        }

        // Validate Colombian phone number
        if (!/^3\d{9}$/.test(phone)) {
            return NextResponse.json(
                { error: 'Número de teléfono inválido. Debe ser un celular colombiano de 10 dígitos.' },
                { status: 400 }
            )
        }

        // Validate product variant
        if (!PRICES[productVariant]) {
            return NextResponse.json(
                { error: 'Variante de producto inválida' },
                { status: 400 }
            )
        }

        // Insert into Supabase
        const { error: dbError } = await supabase.from('orders').insert({
            full_name: sanitize(fullName),
            phone: phone.trim(),
            city: sanitize(city),
            address: sanitize(address),
            product_variant: productVariant,
            total_price: PRICES[productVariant],
            utm_source: body.utmSource || null,
            utm_medium: body.utmMedium || null,
            utm_campaign: body.utmCampaign || null,
            utm_term: body.utmTerm || null,
            landing_url: body.landingUrl || null,
            gclid: body.gclid || null,
        })

        if (dbError) {
            console.error('Supabase insert error:', dbError)
            return NextResponse.json(
                { error: 'Error al guardar el pedido. Intenta de nuevo.' },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true })
    } catch (e) {
        console.error('Order API error:', e)
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        )
    }
}
