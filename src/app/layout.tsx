import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ibrahim Amin',
    description: 'Welcome to my personal portfolio! 🚀',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' data-theme='emerald'>
            <body className={inter.className + ' bg-base-200'}>{children}</body>
        </html>
    )
}
