"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Apple,
  Store,
  Mail,
  PhoneCall,
  ShoppingBag,
  Tags,
  FileText,
  BarChart3,
  Users,
  Zap,
  Search,
  TrendingUp,
  Megaphone,
  Share2,
  Archive,
  Smartphone,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Head from "next/head"

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isIOSModalOpen, setIsIOSModalOpen] = useState(false)
  const supportSectionRef = useRef(null)
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSupport = () => {
    supportSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    setPhoneNumber(value)
  }

  const isPhoneValid = phoneNumber.length === 10

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isPhoneValid) {
      setIsModalOpen(true)
      setPhoneNumber("")
    }
  }

  const handleConnectWithTally = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/import-from-tally")
    setTimeout(() => window.scrollTo(0, 0), 100)
  }

  const features = [
    { name: "Connect with Your Local Network", icon: ShoppingBag },
    { name: "Optimize Your Pricing Strategy", icon: Tags },
    { name: "Streamline Your Order Process", icon: FileText },
    { name: "Automate Your Financial Processes", icon: BarChart3 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Head>
        <style>
          {`
            .bg-grid-pattern {
              background-image: linear-gradient(to right, #00000010 1px, transparent 1px),
                                linear-gradient(to bottom, #00000010 1px, transparent 1px);
              background-size: 20px 20px;
            }
          `}
        </style>
      </Head>
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div
              className="flex items-center gap-2 font-semibold text-xl text-brand-green cursor-pointer"
              onClick={scrollToTop}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-K1QjBahgH2HEUlKpNlDgP32PM0xP1e.png"
                alt="KiranaBuddy Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              KiranaBuddy
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={scrollToSupport} className="text-brand-navy hover:text-brand-green transition-colors">
                Contact
              </button>
              <Link
                href="/import-from-tally"
                className="text-brand-navy hover:text-brand-green transition-colors"
                onClick={handleConnectWithTally}
              >
                Connect with Tally
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-brand-navy hidden md:inline">+91 9678128228</span>
            <a
              href="https://expo.dev/artifacts/eas/4Sja1QZXa2Vud6AHC3hdsj.apk"
              download="KiranaBuddy.apk"
              className="bg-brand-green hover:bg-brand-green/90 text-white transition-colors px-4 py-2 rounded-lg font-semibold"
            >
              Download Now
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <div className="relative overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-50"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 animate-fade-in-up">
                Powering the <span className="text-brand-green">Next Generation</span> of SMB Distributors
              </h1>
              <p className="text-xl text-brand-gray mb-8 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto">
                <span className="font-semibold">Simplify</span> your buying, selling, and accounting—so you can{" "}
                <span className="font-semibold">focus on growing</span> your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
                <a
                  href="https://expo.dev/artifacts/eas/4Sja1QZXa2Vud6AHC3hdsj.apk"
                  download="KiranaBuddy.apk"
                  className="w-full sm:w-auto bg-brand-green hover:bg-brand-green/90 text-white flex items-center justify-center gap-2 py-6 px-8 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg rounded-lg text-lg font-semibold"
                >
                  <Store className="h-6 w-6" />
                  Download for Android
                </a>
                <button
                  onClick={() => setIsIOSModalOpen(true)}
                  className="w-full sm:w-auto border-2 border-brand-green text-brand-green hover:bg-brand-green/10 flex items-center justify-center gap-2 py-6 px-8 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg rounded-lg text-lg font-semibold"
                >
                  <Apple className="h-6 w-6" />
                  Download for iOS
                </button>
              </div>

              <div className="relative mt-16">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-brand-green animate-pulse"
                  >
                    <path
                      fill="currentColor"
                      d="M39.5,-65.3C50.2,-57.1,57.5,-45,63.1,-32.3C68.7,-19.6,72.6,-6.3,71.7,6.7C70.8,19.7,65.1,32.4,56.6,43C48.1,53.6,36.8,62.1,24,67.7C11.2,73.3,-3.1,76,-16.6,73.7C-30.1,71.4,-42.9,64.1,-53.1,54C-63.3,43.9,-71,31,-74.8,16.9C-78.6,2.8,-78.5,-12.5,-73.2,-25.3C-67.9,-38.1,-57.3,-48.4,-45.3,-56.1C-33.3,-63.8,-19.8,-68.9,-5.3,-61.7C9.2,-54.5,28.8,-73.5,39.5,-65.3Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Our Solution Section */}
        <div className="relative py-12 overflow-hidden bg-gradient-to-b from-white to-green-50">
          {/* Background decorative elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-green mb-6 animate-fade-in-up">
                A Smarter Way to Run Your Distribution Business
              </h2>
              <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                Kiranabuddy <span className="font-semibold">automates your daily operations</span>, helping you buy and
                sell at personalized prices, manage customers, and track finances effortlessly.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-16">
              {/* Feature 1 - Hyperlocal Marketplace */}
              <div className="relative group feature">
                <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl transform -skew-y-3"></div>
                <div className="relative flex flex-col md:flex-row items-center gap-8 p-6 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl">
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-green/10 rounded-lg transform rotate-6 transition-transform group-hover:rotate-4"></div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marketplace.jpg-829m8eLhSgDgXEGiEaxVhQnHBq3k5s.jpeg"
                        alt="Hyperlocal Marketplace Interface"
                        width={300}
                        height={600}
                        className="rounded-lg shadow-lg border-4 border-white relative z-10 transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <ShoppingBag className="w-12 h-12 text-brand-green" />
                        <h3 className="text-3xl font-bold text-brand-navy">Connect with your Local Network</h3>
                      </div>
                      <p className="text-lg text-brand-gray leading-relaxed mb-6">
                        Discover and trade with distributors, wholesalers, and retailers in your area—
                        <span className="font-semibold">without the hassle of endless calls</span> for inquiries.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                          <Tags className="w-6 h-6 text-brand-green" />
                          <span className="text-lg">
                            Buy and sell within your{" "}
                            <span className="font-bold text-brand-green">existing network</span> at personalized prices
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Search className="w-6 h-6 text-brand-green" />
                          <span className="text-lg">
                            Discover{" "}
                            <span className="font-bold text-brand-green">
                              best prices, customers, and product categories
                            </span>{" "}
                            effortlessly
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <TrendingUp className="w-6 h-6 text-brand-green" />
                          <span className="text-lg">
                            <span className="font-bold text-brand-green">Scale your business</span> by reaching more
                            buyers and sellers in your area
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Personalised Prices */}
              <div className="relative group feature">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-green-100 rounded-3xl transform skew-y-3"></div>
                <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 p-6 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl">
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-green/10 rounded-lg transform -rotate-6 transition-transform group-hover:-rotate-4"></div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Business%20page.jpg-5KHVIxrjtCM3adUplSFFRvJPz9x036.jpeg"
                        alt="Personalised Prices Interface"
                        width={300}
                        height={600}
                        className="rounded-lg shadow-lg border-4 border-white relative z-10 transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <Tags className="w-12 h-12 text-brand-green" />
                        <h3 className="text-3xl font-bold text-brand-navy">
                          Buy and Sell Seamlessly with Personalized Pricing
                        </h3>
                      </div>
                      <p className="text-lg text-brand-gray leading-relaxed mb-6">
                        Enable customers to browse and order at their{" "}
                        <span className="font-semibold">customised prices</span>—no more repetitive calls for pricing
                        and availability.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                          <Users className="w-6 h-6 text-brand-green" />
                          <span className="text-lg">
                            Buyers can <span className="font-bold text-brand-green">browse and place orders</span> at
                            their personalized prices
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Megaphone className="w-6 h-6 text-brand-green" />
                          <span className="text-lg">
                            <span className="font-bold text-brand-green">Market new products</span> and promote with
                            customised discounts
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 - Create Memo Easily */}
              <div className="relative group feature">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform -skew-y-3"></div>
                <div className="relative flex flex-col md:flex-row items-center gap-8 p-6 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl">
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-green/10 rounded-lg transform rotate-6 transition-transform group-hover:rotate-4"></div>
                      <div className="relative z-10 flex justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Memo.jpg-FwxUNfy0kTbo7iuoOVPamt164uP5rO.jpeg"
                          alt="Final Memo"
                          width={300}
                          height={600}
                          className="rounded-lg shadow-lg border-4 border-white transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <FileText className="w-12 h-12 text-brand-green" />
                        <h3 className="text-3xl font-bold text-brand-navy">
                          No More Manual Memos—Go Digital and Save Time
                        </h3>
                      </div>
                      <p className="text-lg text-brand-gray leading-relaxed mb-6">
                        Generate, store, and share <span className="font-semibold">digital memos instantly</span>
                        —without paperwork or manual errors.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                          <Zap className="w-6 h-6 text-brand-green" />
                          <span className="text-lg">
                            Create{" "}
                            <span className="font-bold text-brand-green">digital memos with personalized pricing</span>{" "}
                            in just a few clicks
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Share2 className="w-6 h-6 text-brand-green" />
                          <span className="text-lg">
                            <span className="font-bold text-brand-green">Share memos directly</span> with customers via
                            WhatsApp or SMS
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Archive className="w-6 h-6 text-brand-green" />
                          <span className="text-lg">
                            Keep all past memos{" "}
                            <span className="font-bold text-brand-green">accessible for quick reference</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4 - Automated Accounting */}
              <div className="relative group feature">
                <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-teal-100 rounded-3xl transform skew-y-3"></div>
                <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 p-6 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl">
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-green/10 rounded-lg transform -rotate-6 transition-transform group-hover:-rotate-4"></div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Accounting.jpg-RKipiviFg5EOtAhwH1Auk264uNcFJf.jpeg"
                        alt="Automated Accounting Interface"
                        width={300}
                        height={600}
                        className="rounded-lg shadow-lg border-4 border-white relative z-10 transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <BarChart3 className="w-12 h-12 text-brand-green" />
                        <h3 className="text-3xl font-bold text-brand-navy">
                          With us, your daily bookkeeping is on Auto-Pilot
                        </h3>
                      </div>
                      <p className="text-lg text-brand-gray leading-relaxed mb-6">
                        Eliminate bookkeeping headaches with{" "}
                        <span className="font-semibold">
                          auto-generated invoices, e-way bills, and real-time financial tracking
                        </span>
                        .
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                          <FileText className="w-6 h-6 text-brand-green" />
                          <span className="text-lg">
                            Orders <span className="font-bold text-brand-green">automatically generate invoices</span>{" "}
                            and accounting records
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Smartphone className="w-6 h-6 text-brand-green" />
                          <span className="text-lg">
                            Both buyers and sellers can{" "}
                            <span className="font-bold text-brand-green">access and share bills anytime</span>
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-6 h-6 text-brand-green" />
                          <span className="text-lg">
                            Generate{" "}
                            <span className="font-bold text-brand-green">GST-compliant invoices and e-way bills</span>{" "}
                            instantly
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Need Help Section */}
        <div ref={supportSectionRef} className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 z-10">
            <div className="bg-white/80 backdrop-filter backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-green-100">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-4">
                  24/7 Support
                </span>
                <h2 className="text-4xl font-bold mb-4 text-brand-navy bg-clip-text text-transparent bg-gradient-to-r from-brand-navy to-brand-green">
                  Get Started Now
                </h2>
                <p className="text-xl text-brand-gray max-w-2xl mx-auto">
                  Our dedicated support team is ready to help you transform your business
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="group bg-gray-50 hover:bg-brand-green/5 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                      <PhoneCall className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-brand-navy mb-1">Call us directly</h3>
                      <a
                        href="tel:+919678128228"
                        className="text-brand-green font-semibold hover:underline transition-all"
                      >
                        +91 9678128228
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group bg-gray-50 hover:bg-brand-green/5 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-brand-navy mb-1">Email support</h3>
                      <a
                        href="mailto:priyanshuj972@gmail.com"
                        className="text-brand-green font-semibold hover:underline transition-all"
                      >
                        priyanshuj972@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-navy mb-4">Request a callback</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-start">
                    <div className="flex-1 flex w-full">
                      <div className="bg-white px-3 py-2 rounded-l-lg border border-r-0 border-gray-200 text-brand-gray flex items-center">
                        +91
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="flex-1 px-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all rounded-r-lg text-sm"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        maxLength={10}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto mt-2 sm:mt-0"
                      disabled={!isPhoneValid}
                    >
                      Get Support
                    </Button>
                  </form>
                  <p className="text-xs text-brand-gray mt-3">
                    By submitting, you agree to receive support related communications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Existing Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Thanks for your interest!</h2>
            <p className="text-lg text-brand-gray mb-6">Our Support Agent will reach out to you soon!</p>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-2 rounded-lg transition-all duration-300 w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* iOS Coming Soon Modal */}
      {isIOSModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsIOSModalOpen(false)}
        >
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">iOS Version Coming Soon!</h2>
            <p className="text-lg text-brand-gray mb-6">We will shortly bring KiranaBuddy to iOS. Stay tuned!</p>
            <Button
              onClick={() => setIsIOSModalOpen(false)}
              className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-2 rounded-lg transition-all duration-300 w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

