import {
    Footer,
    ThemeController,
    Projects,
    ContactForm,
    Hero,
} from '@/components'
import { ToastContainer } from 'react-toastify'

export default function Home() {
    return (
        <main className='flex flex-col items-center justify-between'>
            <ThemeController />
            <Hero />
            <Projects />
            <ContactForm />
            <Footer />
            <ToastContainer
                position='bottom-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </main>
    )
}
