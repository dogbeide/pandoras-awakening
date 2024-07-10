import Image from 'next/image'
import Link from 'next/link'
import { Bad_Script } from 'next/font/google'
import '@/app/components/navbar/navbar.css'

const caveat = Bad_Script({ subsets: ["latin"], weight: "400" })

export default function Navbar() {
  return (
    <div id="navbar" className='flex flex-row justify-between items-center px-3'>
      <Link href="/">
        <Image className='nav-logo' src="/logo.webp" alt="Pandora's Awakening logo" width={176} height={100} />
      </Link>
      <div className={`nav-items flex flex-row justify-around px-4 ${caveat.className}`}>
        <Link href="/about-us">About Us</Link>
        <Link href="/offerings">Offerings</Link>
        <Link href="/retreats">Retreats</Link>
        <Link href="/events">Events</Link>
        <Link href="/faqs">FAQ</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/resources">Resources</Link>
      </div>
    </div>
  )
}