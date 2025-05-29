"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-black"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="relative flex items-center justify-center h-20">
          {/* Centered Navigation */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/#about" className="text-white hover:text-yellow-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/#services" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Services
            </Link>
            <Link href="/products" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Products
            </Link>
          </nav>

          {/* Contact Info Buttons */}
          <div className="hidden md:flex items-center space-x-6 absolute right-0">
            <a
              href="tel:061294492"
              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>(061) 294 492</span>
            </a>
            <a
              href="mailto:shannonhydraulics@gmail.com"
              className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>shannonhydraulics@gmail.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-yellow-400 transition-colors absolute right-0"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800">
          <div className="container px-4 mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-yellow-400 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-white hover:text-yellow-400 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#services"
                className="text-white hover:text-yellow-400 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/products"
                className="text-white hover:text-yellow-400 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </nav>

            <div className="mt-6 pt-6 border-t border-zinc-800 space-y-4">
              <a
                href="tel:061294492"
                className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>(061) 294 492</span>
              </a>
              <a
                href="mailto:shannonhydraulics@gmail.com"
                className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail className="w-4 h-4" />
                <span>shannonhydraulics@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
