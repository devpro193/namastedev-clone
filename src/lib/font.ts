import { Inter, Satisfy, Space_Mono, Montserrat, Mulish } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const space_mono = Space_Mono({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "700"]
})

export const satisfy = Mulish({
    subsets: ['latin'],
    display: 'block',
    weight: ["400", '200', "300", "600", "500", "700", "800", "900"]
})

export const mont = Montserrat({
    subsets: ['latin'],
    display: 'block',
    weight: ["400", "500", "600", "700"]
})