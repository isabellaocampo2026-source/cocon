'use client'

export function TopBar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-brand text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-2.5 text-center flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm font-semibold tracking-wide">
                    ENVÍO GRATIS Y PAGO CONTRA ENTREGA EN TODA COLOMBIA
                </p>
            </div>
        </div>
    )
}
