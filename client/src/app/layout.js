import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn to Code - Programming Tutorials',
  description: 'Learn programming languages and frameworks with our comprehensive tutorials and guides'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
} 