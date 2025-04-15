import Image from "next/image"
import { ChevronRight, Wrench, FuelIcon as Oil, Settings, Phone, Mail } from "lucide-react"
import ServiceCard from "@/components/service-card"
import ProductCard from "@/components/product-card"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-10"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Hydraulic machinery"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            <span className="block">Ireland's trusted provider</span>
            <span className="block mt-2 text-yellow-400">of hydraulic solutions</span>
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-xl text-gray-300">
            Custom hydraulic systems, repairs, and components for industrial and agricultural clients across Ireland.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-12 sm:flex-row">
            <a
              href="#services"
              className="inline-flex h-14 items-center justify-center rounded-md bg-yellow-400 hover:bg-yellow-500 text-black px-8 font-medium transition-colors"
            >
              Our Services
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:061294492"
              className="inline-flex h-14 items-center justify-center rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 font-medium transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-zinc-900" id="about">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center md:flex-row md:items-start md:gap-16">
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=1080&width=1080"
                  alt="Shannon Hydraulics workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-yellow-400/20 px-4 py-2 rounded-full text-yellow-400 font-medium text-sm mb-4">
                About Us
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                About <span className="text-yellow-400">Shannon Hydraulics</span>
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-gray-300 mb-6 text-lg">
                Shannon Hydraulics is a dedicated provider of high-quality hydraulic solutions serving industrial,
                agricultural, and commercial clients throughout Ireland.
              </p>
              <p className="text-gray-300 mb-8 text-lg">
                What sets us apart is our in-house manufacturing capabilities. With our precision lathe machine, we can
                manufacture and repair custom hydraulic rams to exact specifications, ensuring perfect fit and function
                for your equipment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center text-black">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
                    <p className="text-gray-400">Tailored hydraulic systems for your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center text-black">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Quality Service</h3>
                    <p className="text-gray-400">Expert technicians with years of experience</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:061294492"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-500 font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (061) 294 492
                </a>
                <a
                  href="mailto:shannonhydraulics@gmail.com"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-500 font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black" id="services">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400/20 px-4 py-2 rounded-full text-yellow-400 font-medium text-sm mb-4">
              What We Offer
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Services</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
              From repairs to custom hydraulic system design, our experienced team provides comprehensive solutions for
              all your hydraulic needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Wrench className="w-10 h-10" />}
              title="Hydraulic Hose Supply & Repair"
              description="On-site and workshop repairs for hydraulic hoses with quick turnaround times to minimize downtime."
            />
            <ServiceCard
              icon={<Oil className="w-10 h-10" />}
              title="Hydraulic Oil Sales"
              description="Premium hydraulic oils and fluids for all applications, ensuring optimal system performance and longevity."
            />
            <ServiceCard
              icon={<Settings className="w-10 h-10" />}
              title="Hydraulic Cylinders"
              description="Supply and repair of hydraulic cylinders for various applications and machinery."
            />
            <ServiceCard
              icon={<Settings className="w-10 h-10" />}
              title="System Installation"
              description="Complete hydraulic system design, installation, and commissioning for new equipment and machinery."
            />
            <ServiceCard
              icon={<Wrench className="w-10 h-10" />}
              title="Repairs & Maintenance"
              description="Professional repair services and maintenance programs to keep your hydraulic systems running efficiently."
            />
            <ServiceCard
              icon={<Settings className="w-10 h-10" />}
              title="Testing & Diagnostics"
              description="Comprehensive system testing and diagnostics to identify and resolve hydraulic system issues."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Need Expert Hydraulic Solutions?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team of specialists is ready to help with all your hydraulic needs. Contact us today for a
                consultation.
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

      {/* All Products Section */}
      <section className="py-24 bg-black" id="products">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400/20 px-4 py-2 rounded-full text-yellow-400 font-medium text-sm mb-4">
              Our Products
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Products</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
              We stock a comprehensive range of high-quality hydraulic components and supplies to keep your systems
              running efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <ProductCard image="/images/hydraulic-hose.jpg" title="Hydraulic Hoses" />
            <ProductCard image="/images/fittings.jpg" title="Hose Fittings & Adapters" />
            <ProductCard image="/images/cylinders.jpg" title="Hydraulic Cylinders" />
            <ProductCard image="/images/couplings.jpg" title="Quick Release Couplings" />
            <ProductCard image="/images/pumps.jpg" title="Hydraulic Pumps" />
            <ProductCard image="/images/filters.jpg" title="Oil Filters & Filtration Units" />
            <ProductCard image="/images/oil.jpg" title="Hydraulic Oil" />
            <ProductCard image="/images/seal-kits.jpg" title="Seal Kits & Repair Tools" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {/* Reviews Section */}
<section className="py-24 bg-zinc-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block bg-yellow-400/20 px-4 py-2 rounded-full text-yellow-400 font-medium text-sm mb-4">
        Customer Reviews
      </div>
      <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Review 1 */}
      <div className="bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-8 relative">
        <div className="absolute -top-4 left-8 text-yellow-400 text-6xl">&quot;</div>
        <div className="relative z-10">
          <div className="flex mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-300 text-base italic mb-6">
            &quot;Needed a new power washer hose dog chewed through the old one. Called into Darius and gave him the old hose and he said call back in a half hour... Highly recommend him.&quot;
          </p>
          <div className="flex items-center">
            <div className="mr-3 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
              JB
            </div>
            <div>
              <h4 className="text-white font-medium">Jonathan Blackmore</h4>
              <p className="text-gray-400 text-sm">Google Review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Review 2 */}
      <div className="bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-8 relative">
        <div className="absolute -top-4 left-8 text-yellow-400 text-6xl">&quot;</div>
        <div className="relative z-10">
          <div className="flex mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-300 text-base italic mb-6">
            &quot;Bought a replacement hose for my power washer here... The hose made up by Shannon Hydraulics was of far superior quality than the original... Very happy with the service.&quot;
          </p>
          <div className="flex items-center">
            <div className="mr-3 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
              CF
            </div>
            <div>
              <h4 className="text-white font-medium">Cian O'Flynn</h4>
              <p className="text-gray-400 text-sm">Google Review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Review 3 */}
      <div className="bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-8 relative">
        <div className="absolute -top-4 left-8 text-yellow-400 text-6xl">&quot;</div>
        <div className="relative z-10">
          <div className="flex mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-300 text-base italic mb-6">
            &quot;A friend recommended I contact Darius about a seized hydraulic hand pump... he recommended a suitable replacement and made a suitable hose. Great service.&quot;
          </p>
          <div className="flex items-center">
            <div className="mr-3 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
              DH
            </div>
            <div>
              <h4 className="text-white font-medium">Denis Hogan</h4>
              <p className="text-gray-400 text-sm">Google Review</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Location Map */}
    <div className="mt-20">
      <div className="text-center mb-16">
        <div className="inline-block bg-yellow-400/20 px-4 py-2 rounded-full text-yellow-400 font-medium text-sm mb-4">
          Our Location
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Find Us Here</h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg mb-10">
          Visit us at Unit 1, Crossagalla Industrial Estate, Crossagalla, Limerick, V94 HH3V
        </p>
      </div>

      <div className="h-[500px] rounded-xl overflow-hidden shadow-2xl shadow-yellow-400/5">
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
);
}
