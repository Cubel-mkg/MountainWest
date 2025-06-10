"use client";

import Image from "next/image"
import { Building2, Menu, Star, X } from "lucide-react"
import Link from 'next/link';
import '@/app/testimonials.css'
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function TestimonialsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Parker",
      company: "TechFlow Solutions",
      role: "",
      content:
        "As a first-time landlord, I had no idea how much work goes into managing a rental. MW Property Management made it so easy. They took care of everything. I don’t get surprise bills, and their team is super easy to reach. I finally feel like I can enjoy owning a rental property without the stress.",
      rating: 5,
      image: "/images/Sarah-Parker.png?height=80&width=80",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      company: "",
      role: "",
      content:
        "I’ve worked with a few property managers over the years, and none come close to MW. They understand what investors need—clear reporting, no hidden fees, and reliable service. They’re professional, quick to respond, and actually care about keeping my properties running smoothly. I finally feel like I have a true partner.",
      rating: 5,
      image: "/images/Marcus-Rodriguez.png?height=80&width=80",
    },
    {
      id: 3,
      name: "Emily Watson",
      company: "Creative Studios",
      role: "Creative Director",
      content:
        "What a difference it makes working with a team that actually communicates! MW Property Management is on top of everything—repairs, tenants, even legal stuff. I get regular updates, and they always follow through. It’s such a relief to not have to chase anyone down for answers anymore.",
      rating: 5,
      image: "/images/Emily-Watson.png?height=80&width=80",
    },
    {
      id: 4,
      name: "David Kim",
      company: "StartupLab",
      role: "Founder",
      content:
        "I used to dread those late-night maintenance calls. Since switching to MW Property Management, I haven’t had to worry once. They’ve got a great network of contractors and handle repairs fast—and the quality of work is way better than what I was getting before. Their team really knows what they’re doing.",
      rating: 5,
      image: "/images/David-Kim.png?height=80&width=80",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      company: "Global Enterprises",
      role: "Operations Director",
      content:
        "Vacancies were killing my cash flow, and tenant issues were a constant problem. MW turned that around so fast. They found great tenants, handled the screening and lease stuff, and made everything feel effortless. Best of all, they charge a flat fee—no random extras. I’m actually making more money now with less hassle.",
      rating: 4,
      image: "/images/Lisa-Thompson.jpg?height=80&width=80",
    },
    {
      id: 6,
      name: "James Wilson",
      company: "Innovation Hub",
      role: "CTO",
      content:
        "Managing out-of-state properties used to be a nightmare. MW Property Management changed all that. They’re licensed, insured, and super organized. I get clean reports every month, and they handle everything from rent collection to compliance. It’s the first time I’ve felt totally confident in my property manager.",
      rating: 5,
      image: "/images/James-Wilson.png?height=80&width=80",
    },
  ]

  // Update David Kim's rating to 5
  testimonials[3].rating = 5

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900/95 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Link href="/">
                  <Building2 className="w-6 h-6 text-white drop-shadow-sm cursor-pointer" />
                </Link>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">MW Property Management</h1>
                <p className="text-xs text-gray-400">Professional Property Services</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about-us" className="text-gray-300 hover:text-white font-medium transition-colors">
                About Us
              </Link>
              <Link href="/testimonials" className="text-gray-300 hover:text-white font-medium transition-colors">
                Testimonials
              </Link>
              <Link href="/regions" className="text-gray-300 hover:text-white font-medium transition-colors">
                Regions
              </Link>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                  onClick={() => (window.location.href = '/#contact')}
                >
                  Book a Free Property Audit
                </Button>
            </nav>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
              <div className="flex flex-col space-y-4">
                <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
                <Link href="/regions" className="text-gray-300 hover:text-white transition-colors">
                  Regions
                </Link>
                  <Button onClick={() => (window.location.href = '/#contact')} className="bg-blue-600 hover:bg-blue-700 text-white w-full" >
                    Book a Free Property Audit
                  </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">What Our Customers Say</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what real customers have to say about their experience with our
              platform.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6 hover:shadow-xl hover:border-gray-600 transition-all duration-200 flex flex-col justify-between h-full"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                       i < testimonial.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-400 fill-gray-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
              </div>

              {/* Customer Info */}
              <div className="flex items-center mt-auto">
                <div className="relative">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover ring-2 ring-gray-600"
                  />
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Them?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the same success as our satisfied customers. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => (window.location.href = '/#contact')} className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  Book a Free Property Audit
                </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                  <Building2 onClick={() => (window.location.href = '/')} className="w-5 h-5 text-white drop-shadow-sm" />
                </div>
                <span className="text-xl font-semibold">MW Property Management</span>
              </div>
              <p className="text-gray-400">Professional property management services for discerning investors.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Property Management</li>
                <li>Tenant Screening</li>
                <li>Maintenance Services</li>
                <li>Financial Reporting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: propertymanagersmw@gmail.com</p>
                <p>Mountain West Region</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MW Property Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
