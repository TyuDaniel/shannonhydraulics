import Link from "next/link"
import Image from "next/image"
import { Facebook, MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container px-4 mx-auto py-16">
        {/* Contact Banner */}
        <div className="bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Need assistance with hydraulic solutions?</h3>
              <p className="text-gray-300">Our team is ready to help with all your hydraulic needs</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:061294492"
                className="inline-flex h-12 items-center justify-center rounded-md bg-yellow-400 hover:bg-yellow-500 text-black px-6 font-medium transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                (061) 294 492
              </a>
              <a
                href="mailto:shannonhydraulics@gmail.com"
                className="inline-flex h-12 items-center justify-center rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-6 font-medium transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
        
            <p className="text-gray-400 mb-6">
              Providing quality hydraulic repairs and maintenance for industrial and agricultural clients across Ireland.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/ShannonHydraulicsPlantSale/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 hover:bg-yellow-400 hover:text-black transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/#services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                  Hydraulic Hose Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                  Hydraulic Cylinders
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                  Hydraulic Oil Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                  Heavy-Duty Chains
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                  Repairs & Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-yellow-400" />
                  Power Washer Lance & Hose
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Unit 1, Crossagalla Industrial Estate,
                  <br />
                  Crossagalla, Limerick, V94 WP9F  
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a href="tel:061294492" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  (061) 294 492
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:shannonhydraulics@gmail.com"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  shannonhydraulics@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday & Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shannon Hydraulics. All rights reserved.
          </p>
          <div className="flex space-x-6">
            
          </div>
        </div>
      </div>
    </footer>
  )
}
