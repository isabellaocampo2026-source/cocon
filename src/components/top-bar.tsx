'use client'

export function TopBar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D1A]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 py-2.5 text-center">
                <p className="text-sm text-white/80 font-medium tracking-wide">
                    <span className="mr-1">🌙</span>
                    Pago contra entrega
                    <span className="mx-2 text-white/30">·</span>
                    Envío a toda Colombia
                </p>
            </div>
        </div>
    )
}
