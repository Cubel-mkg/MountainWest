"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredCards } from "@/components/staggered-cards"
import { AnimatedCounter } from "@/components/animated-counter"
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Building2,
  Shield,
  AlertTriangle,
  Home,
  FileSignature,
  DollarSignIcon as MoneyBill,
  ChevronDown,
  Menu,
  X,
  Calendar,
  Award,
} from "lucide-react"
import { useState, useEffect } from "react"

// Custom CheckCircle SVG component
const CustomCheckCircleGreen = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" className={className}>
    <path
      fill="#10b981"
      fillRule="evenodd"
      d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
    />
  </svg>
)

const CustomCheckCircle = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" className={className}>
    <path
      fill="#FFFFFF"
      fillRule="evenodd"
      d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
    />
  </svg>
)
const CustomCheckCircleBlue = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" className={className}>
    <path
      fill="#60a5fa"
      fillRule="evenodd"
      d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
    />
  </svg>
)

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)

  //show Iframe 
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    setShowIframe(true); // This only runs on the client
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

  useEffect(() => {
      const sendHeight = () => {
        const height = document.body.scrollHeight;
        window.parent.postMessage({ type: 'setHeight', height }, '*');
      };

      sendHeight();
      window.addEventListener('resize', sendHeight);

      return () => {
        window.removeEventListener('resize', sendHeight);
      };
    }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    "Tenant Screening & Placement",
    "Rent Collection & Accounting",
    "Maintenance Coordination",
    "Legal Compliance",
    "HOA Management",
    "24/7 Emergency Response",
  ]

  const updatedServices = [
    "Rent Collection & Accounting",
    "Maintenance Coordination (with Competitive Bids)",
    "Working Directly with HOAs",
    "Legal Compliance, Lease Enforcement",
    "Emergency Response",
    "Contractor Scheduling & Negotiation",
  ]

  const stats = [
    { number: 100, suffix: "+", label: "Properties Managed" },
    { number: 200, suffix: "+", label: "Vetted Contractors" },
    { number: 7, suffix: "+", label: "Years Experience" },
  ]

  const painPoints = [
    {
      icon: Users,
      title: "Bad Tenants",
      description: "Dealing with difficult or unreliable tenants can be a major headache.",
    },
    {
      icon: WrenchScrewdriver,
      title: "Maintenance Problems",
      description: "Unexpected repairs and ongoing maintenance can strain your budget.",
    },
    { icon: Home, title: "Long Vacancies", description: "Empty properties mean lost income and increased expenses." },
    {
      icon: FileSignature,
      title: "Unresponsive Management/HOA",
      description: "Lack of communication and slow response times can be frustrating.",
    },
    {
      icon: MoneyBill,
      title: "Late Payments and Evictions",
      description: "Chasing rent and handling evictions is time-consuming and stressful.",
    },
  ]

  const whyUs = [
    { number: 100, label: "+ Units Under Management" },
    { label: "Flat Rate, Full Service" },
    { number: 200, label: "+ Elite Contractor Network" },
  ]

  const pricing = {
    flatRate: "10%",
    includes: [
      "Tenant Screening",
      "Rent Collection",
      "Maintenance Coordination",
      "Financial Reporting",
      "Legal Compliance",
    ],
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Dark Header */}
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
      <section className="relative py-16 sm:py-20 lg:py-32 xl:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full object-cover"
            style={{
              backgroundImage: "url('/images/hero-house.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Darker overlay for dark theme */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection animation="fadeInUp">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Your Property, Managed Like It's Our Own
              </h1>
              <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">We Handle Everything. Seriously.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
                  onClick={scrollToContact}
                >
                  <Calendar className="w-5 h-5 mr-2 drop-shadow-sm" />
                  Book a Free Property Audit
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
                  <Phone className="w-5 h-5 mr-2 drop-shadow-sm" />
                  (555) 697-7673
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 border-y border-gray-800">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-400">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Handling everything as a landlord? IT´S A LOT.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let’s turn your rental into passive income with zero stress.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {painPoints.map((point, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:shadow-lg transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/30 rounded-xl flex items-center justify-center border border-red-500/20 backdrop-blur-sm">
                      <AlertTriangle className="w-6 h-6 text-red-400 drop-shadow-sm" />
                    </div>
                    <div className="text-white font-medium text-center">{point.title}</div>
                    <div className="text-gray-400 text-sm text-center">{point.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pick Mountain West Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Pick Mountain West?</h2>
            <p className="text-xl text-gray-300">
              As investors ourselves, we know how to protect your asset, boost returns, and cut the stress.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <StaggeredCards className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" delay={150}>
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br flex items-center justify-center mt-1">
                      <CustomCheckCircleGreen className="w-5 h-5 text-white drop-shadow-sm" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">+100 Units Under Management</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We’re trusted by dozens of owners and growing every month.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br flex items-center justify-center">
                      <CustomCheckCircleGreen className="w-5 h-5 text-white drop-shadow-sm" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Flat Rate, Full Service</h3>
                      <p className="text-gray-300 leading-relaxed">
                        No percentages. One fixed fee covers everything from tenant relations to HOA headaches.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center mt-1">
                      <CustomCheckCircleGreen className="w-5 h-5 text-white drop-shadow-sm" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Elite Contractor Network</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We negotiate the best rates and ensure top-tier workmanship every time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggeredCards>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Full-service property management with transparent pricing and professional execution.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <StaggeredCards className="grid md:grid-cols-2 gap-6" delay={150}>
              {updatedServices.map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-xl flex items-center justify-center border border-blue-400/30 backdrop-blur-sm">
                        <CustomCheckCircleBlue className="w-5 h-5 text-blue-400 drop-shadow-sm" />
                      </div>
                      <span className="text-white font-medium">{service}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredCards>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideRight">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Investor-Focused Property Management</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  As property investors ourselves, we understand what it takes to maximize your ROI while minimizing the
                  headaches. We treat your property like our own, ensuring consistent performance and transparent
                  reporting.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-blue-400 drop-shadow-sm" />
                    <span className="text-gray-300">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-blue-400 drop-shadow-sm" />
                    <span className="text-gray-300">Industry Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-400 drop-shadow-sm" />
                    <span className="text-gray-300">Dedicated Account Management</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={200}>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-6">Why Choose MW Property Management</h3>
                <div className="space-y-4">
                  {whyUs.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mt-0.5 shadow-md ring-1 ring-blue-400/30">
                        <CustomCheckCircle className="w-4 h-4 text-white drop-shadow-sm" />
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          {item.number ? item.number + " " : ""}
                          {item.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            </AnimatedSection>

            <StaggeredCards className="space-y-4" delay={200}>
              {[
                {
                  question: "What is included in your management fee?",
                  answer:
                    "Our comprehensive fee includes tenant screening, rent collection, maintenance coordination, financial reporting, and legal compliance.",
                },
                {
                  question: "How do you handle maintenance requests?",
                  answer:
                    "We maintain a network of licensed contractors and handle all coordination, ensuring quality work at competitive rates.",
                },
                {
                  question: "What are your tenant screening criteria?",
                  answer:
                    "We conduct thorough background checks, credit verification, employment verification, and reference checks for all prospective tenants.",
                },
                {
                  question: "How often do you provide financial reports?",
                  answer:
                    "Monthly financial statements are provided, along with annual tax documentation and detailed expense tracking.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                  <CardContent
                    className="p-6 cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-white">{faq.question}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-all duration-300 drop-shadow-sm ${openFaq === index ? "rotate-180 text-blue-400" : ""}`}
                      />
                    </div>
                    {openFaq === index && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </StaggeredCards>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-xl text-gray-300">Schedule a consultation to discuss your property management needs.</p>
          </AnimatedSection>

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
                      id="calendly-iframe"
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

      {/*  
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
      </footer>*/}
    </div>
  )
}

// Dummy component for WrenchScrewdriver
const WrenchScrewdriver = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-wrench-screwdriver"
  >
    <path d="M14.21 14.21a7 7 0 0 1-9.9-9.9l9.9-9.9 9.9 9.9a7 7 0 0 1-9.9 9.9z" />
    <path d="M12 2v4" />
    <path d="M2 12h4" />
    <path d="M18.37 5.63 13 11" />
    <path d="M22 9v7h-3l3-3" />
  </svg>
)
