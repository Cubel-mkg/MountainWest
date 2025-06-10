"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Menu, Mountain, X } from "lucide-react"
import '@/app/regions.css'
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const regions = [
  {
    name: "Utah",
    description: "Salt Lake City, Provo, Park City",
    highlight: "Tech Hub",
  },
  {
    name: "Colorado",
    description: "Denver, Boulder, Colorado Springs",
    highlight: "Innovation Center",
  },
  {
    name: "Nevada",
    description: "Las Vegas, Reno, Carson City",
    highlight: "Entertainment Capital",
  },
  {
    name: "New Mexico",
    description: "Albuquerque, Santa Fe, Las Cruces",
    highlight: "Cultural Heritage",
  },
  {
    name: "Arizona",
    description: "Phoenix, Tucson, Scottsdale",
    highlight: "Desert Metropolis",
  },
  {
    name: "Idaho",
    description: "Boise, Coeur d'Alene, Sun Valley",
    highlight: "Natural Beauty",
  },
]

export default function RegionsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-gray-900/95 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 onClick={() => (window.location.href = '/')} className="w-6 h-6 text-white drop-shadow-sm cursor-pointer" />
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

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4 bg-blue-900/50 text-blue-300 hover:bg-blue-900/70 border-blue-800">
            Service Coverage
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Mountain West Regions</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We proudly serve six states across the Mountain West, bringing our services to diverse communities from
            bustling tech hubs to scenic mountain towns.
          </p>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <Card
                key={region.name}
                className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/80 hover:border-slate-600"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <h3 className="text-xl font-semibold text-slate-100">{region.name}</h3>
                    </div>
                    <Badge variant="outline" className="text-xs border-blue-700 text-blue-300 bg-blue-900/30">
                      {region.highlight}
                    </Badge>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{region.description}</p>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <span className="text-xs text-slate-400 font-medium">ACTIVE COVERAGE</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Summary */}
      <section className="py-16 px-4 bg-slate-800/30 backdrop-blur-sm border-y border-slate-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-6">Comprehensive Mountain West Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">6</div>
              <div className="text-sm text-slate-300 font-medium">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-sm text-slate-300 font-medium">Major Cities</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-sm text-slate-300 font-medium">Service Availability</div>
            </div>
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            From the tech corridors of Utah to the entertainment capitals of Nevada, we're committed to delivering
            exceptional service across the entire Mountain West region.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                  <Building2 className="w-5 h-5 text-white drop-shadow-sm" />
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
