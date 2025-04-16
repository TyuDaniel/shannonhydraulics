import Image from "next/image"
import { ChevronRight, Phone, Mail } from "lucide-react"
import ProductCard from "@/components/product-card"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      title: "Hydraulic Hoses",
      image: "/images/hydraulic-hose.jpg",
    },
    {
      id: 2,
      title: "Hose Fittings & Adapters",
      image: "/images/fittings.jpg",
    },
    {
      id: 3,
      title: "Hydraulic Cylinders",
      image: "/images/cylinders.jpg",
    },
    {
      id: 4,
      title: "Bucket Teeth & Shackles",
      image: "/images/trak.jpg",
    },
    {
      id: 5,
      title: "Power Washer Lance",
      image: "/images/lance.png",
    },
    {
      id: 6,
      title: "Oil Filters & Filtration Units",
      image: "/images/filters.jpg",
    },
    {
      id: 7,
      title: "Hydraulic Oil",
      image: "/images/oila.jpg",
    },
    {
      id: 8,
      title: "Seal Kits",
      image: "/images/seals.jpg",
    },
    {
      id: 8,
      title: "Heavy-Duty Chains",
      image: "/images/image.png",
    },
    {
      id: 10,
      title: "Lifting Slings & Shackles",
      image: "/images/slings.png",
    },  
    {
      id: 11,
      title: "Industrial Paint Supplies",
      image: "/images/paint.png",
    }, 
   
     
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-32 bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-10"></div>
          <Image
            src="/images/shannonhydraulics.png?height=1080&width=1920"
            alt="Hydraulic machinery"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="inline-block bg-yellow-400/20 px-4 py-2 rounded-full text-yellow-400 font-medium text-sm mb-4">
            Our Products
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-4">
            Quality <span className="text-yellow-400">Hydraulic Products</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            High-quality hydraulic components and supplies for all industrial and agricultural applications.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} image={product.image} title={product.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Need Help Finding the Right Product?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to assist you in finding the perfect hydraulic solutions for your specific
                needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:061294492"
                  className="inline-flex h-14 items-center justify-center rounded-md bg-yellow-400 hover:bg-yellow-500 text-black px-8 font-medium transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (061) 294 492
                </a>
                <a
                  href="mailto:shannonhydraulics@gmail.com"
                  className="inline-flex h-14 items-center justify-center rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 font-medium transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  shannonhydraulics@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-black">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-yellow-400/20 px-4 py-2 rounded-full text-yellow-400 font-medium text-sm mb-4">
                Our Location
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Visit Our <span className="text-yellow-400">Workshop</span>
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-gray-300 mb-8 text-lg">
                Find us at Unit 1, Crossagalla Industrial Estate, Crossagalla, Limerick, V94 HH3V. Our team is ready to
                assist you with all your hydraulic needs.
              </p>
              <a
                href="https://maps.google.com/?q=Unit+1,+Crossagalla+Industrial+Estate,+Crossagalla,+Limerick,+V94+HH3V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-md bg-yellow-400 hover:bg-yellow-500 text-black px-8 font-medium transition-colors"
              >
                Get Directions
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </div>
            <div className="h-[500px] relative rounded-xl overflow-hidden shadow-2xl shadow-yellow-400/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.6264288114903!2d-8.593228723066401!3d52.648661926695475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b5ea3160619c7%3A0x5ca2d624a325545d!2sShannon%20Hydraulics%20Ltd!5e0!3m2!1sen!2sie!4v1744705820019!5m2!1sen!2sie"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shannon Hydraulics Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
