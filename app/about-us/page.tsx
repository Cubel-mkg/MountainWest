"use client";

import Image from "next/image"
import { Mail, MapPin, Clock, Building2, X, Menu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import '@/app/about-us.css'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutUs() {
  //show Iframe 
    const [showIframe, setShowIframe] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scriptLoaded, setScriptLoaded] = useState(false);

  
    useEffect(() => {
      setShowIframe(true); // This only runs on the client
    }, []);

    useEffect(() => {
      const scriptId = "calendly-widget-script";
      if (!document.getElementById(scriptId)) {
        console.log(scriptId)
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);
      } else {
        console.log("else")
        window.location.reload()
        scrollToContact()
        // Script already exists
        setScriptLoaded(true);
      }
      }, []);

    

    const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in tech innovation and strategic business development.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Technical architect passionate about scalable solutions and emerging technologies.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      description: "Creative director focused on user-centered design and exceptional digital experiences.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      description: "Engineering leader committed to building robust, high-performance software solutions.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      github: "#",
    },
  ]

  const values = [
    {
      title: "Tenant Screening",
      description: "Background checks, income verification, and rental history—so you get the best possible tenants.",
    },
    {
      title: "Lease Management",
      description: "We create and manage legally compliant leases designed to protect your property and income.",
    },
    {
      title: "Rent Collection & Owner Payouts",
      description: "Automated systems that ensure on-time rent and smooth reporting.",
    },
    {
      title: "Maintenance & Repairs",
      description: "We schedule, negotiate, and oversee every job—working with over 200 licensed professionals.",
    },
    {
      title: "HOA Coordination",
      description: "We deal directly with HOAs, keeping your property compliant and your inbox clear.",
    },
    {
      title: "24/7 Support",
      description: "Tenants and owners get help any time, any day. We don’t believe in business hours.",
    },
    {
      title: "Move-In / Move-Out Inspections",
      description: "Documented and detailed—so there are no surprises or disputes.",
    },
    {
      title: "?",
      description: "We believe in the power of teamwork and foster an inclusive environment where everyone thrives.",
    },
  ]

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
                onClick={scrollToContact}
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
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full" onClick={scrollToContact}>
                  Book a Free Property Audit
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">About Our Company</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              More Than Managers — We're Investors Who Get It
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                We founded <b>Mountain West</b> because we were tired of watching property owners get burned by
                impersonal management companies that didn't actually care. As real estate investors ourselves, we know
                exactly what it takes to protect an asset, maximize returns, and avoid headaches.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                That's why we manage every property like it's one of our own. We don't just collect rent—we build
                long-term stability, minimize vacancy, and take every call, no matter the hour. Our model is simple:
                treat your property like it's on our portfolio, and never stop showing up.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                <b>“When you succeed, we succeed. That's the Mountain West mindset.”</b>
              </p>
            </div>
            <div className="relative order-first lg:order-last">
              <Image
                src="/images/TeamWork.jpg?height=400&width=600"
                alt="Our mission"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl border border-gray-700 px-4 sm:px-0 about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-2xl shadow-blue-600/20 border border-blue-500/20">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Our Services</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Professional property management solutions engineered for maximum investment performance
            </p>
            <div className="w-20 h-0.5 bg-blue-600 mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Subtle glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/10 to-blue-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

                <Card className="relative bg-gray-900/95 backdrop-blur-sm border border-gray-800/80 shadow-xl hover:shadow-blue-600/5 transition-all duration-500 hover:-translate-y-1 hover:border-blue-600/30 rounded-2xl overflow-hidden h-full group-hover:bg-gray-850/95">
                  <CardContent className="p-6 text-center h-full flex flex-col relative">
                    {/* Subtle background accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-600/5 to-transparent rounded-full"></div>

                    {/* Icon container */}
                    <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600/15 to-blue-700/10 rounded-xl flex items-center justify-center mb-6 mx-auto border border-blue-600/20 group-hover:scale-105 transition-all duration-300 shadow-lg">
                      {index === 0 && (
                        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="800px" height="800px" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="dolarIconTitle" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" color="#000000">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                          <g id="SVGRepo_iconCarrier"> <title id="dolarIconTitle">Dolar</title> <path d="M12 4L12 6M12 18L12 20M15.5 8C15.1666667 6.66666667 14 6 12 6 9 6 8.5 7.95652174 8.5 9 8.5 13.140327 15.5 10.9649412 15.5 15 15.5 16.0434783 15 18 12 18 10 18 8.83333333 17.3333333 8.5 16"/> </g>
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                      {index === 4 && (
                        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      )}
                      {index === 5 && (
                        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      {index === 6 && (
                        <svg width="800px" height="800px" className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                          <g id="SVGRepo_iconCarrier"> <path d="M15 15L21 21" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#3b82f6" stroke-width="2"/> </g>
                        </svg>
                      )}
                      {index === 7 && (
                        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                      {value.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-sm flex-grow group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Minimal bottom accent */}
                    <div className="w-0 h-px bg-blue-600 mx-auto mt-6 group-hover:w-12 transition-all duration-500"></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Professional Call to action */}
          <div className="text-center mt-16">
            <div className="inline-block p-6 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800/60 shadow-xl">
              <p className="text-gray-400 mb-6 text-base">Ready to optimize your property investment?</p>
              <button className="group relative inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5" onClick={scrollToContact}>
                <span className="relative z-10">Book Your Free Propery Audit</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Team Section */}
      {/*  
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The talented individuals behind our success, each bringing unique expertise and passion to our mission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-850"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-gray-600"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.description}</p>
                  <div className="flex justify-center space-x-3">
                    {member.linkedin && (
                      <a href={member.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} className="text-gray-400 hover:text-blue-300 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} className="text-gray-400 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Schedule a consultation to discuss your property management needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", detail: "propertymanagersmw@gmail.com" },
                { icon: MapPin, title: "Service Area", detail: "Utah, Colorado, Nevada, Nuevo Mexico, Arizona, Idaho" },
                { icon: Clock, title: "Business Hours", detail: "Mon-Fri: 8:00 AM - 6:00 PM" },
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-xl flex items-center justify-center border border-blue-400/30 backdrop-blur-sm shadow-lg">
                    <contact.icon className="w-6 h-6 text-blue-400 drop-shadow-sm" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{contact.title}</div>
                    <div className="text-gray-300">{contact.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-0 overflow-hidden rounded-lg">
                {showIframe && (
                  <div>
                    <div
                      className="calendly-inline-widget rounded-lg"
                      data-url="https://calendly.com/propertymanagersmw/30min"
                      style={{ minWidth: "320px", height: "830px", overflow: "hidden", scrollbarWidth: "none" }}
                      id="calendly-widget-script"
                    ></div>
                    <script
                      type="text/javascript"
                      src="https://assets.calendly.com/assets/external/widget.js"
                      async
                    ></script>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
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
