import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 256,
    height: 256,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#6D28D9',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                }}
            />
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
