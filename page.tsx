"use client"
import Link from "next/link"
import type React from "react"
import { useRouter } from "next/navigation"

import Image from "next/image"
import { Download, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function ImportFromTallyPage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToSupport = () => {
    const supportSection = document.getElementById("support")
    supportSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 10) {
      setPhoneNumber(value)
    }
  }

  const isPhoneValid = /^\d{10}$/.test(phoneNumber)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isPhoneValid) {
      setIsModalOpen(true)
      setPhoneNumber("")
    }
  }

  const handleHomeNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/")
    setTimeout(() => window.scrollTo(0, 0), 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-xl text-brand-green"
            onClick={handleHomeNavigation}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-K1QjBahgH2HEUlKpNlDgP32PM0xP1e.png"
              alt="KiranaBuddy Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            KiranaBuddy
          </Link>
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

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl md:whitespace-nowrap font-bold text-brand-navy mb-4">
            Connect Tally with KiranaBuddy
          </h1>
          <p className="text-xl text-brand-gray mb-12">
            Seamlessly sync your Tally data with our secure cloud database
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-brand-green hover:bg-brand-green/90">
              <Download className="mr-2 h-5 w-5" /> Download Desktop App
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-green text-brand-green hover:bg-brand-green/10"
              onClick={scrollToSupport}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-4 bg-green-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-16">
            Three Simple Steps to Get Started
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 bg-brand-green text-white flex items-center justify-center text-lg font-semibold mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Download & Install</h3>
                <p className="text-brand-gray">Download our desktop application and login with your credentials</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 bg-brand-green text-white flex items-center justify-center text-lg font-semibold mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Connect Tally</h3>
                <p className="text-brand-gray">Open Tally on your computer and connect it with KiranaBuddy</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 bg-brand-green text-white flex items-center justify-center text-lg font-semibold mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Select Company</h3>
                <p className="text-brand-gray">
                  Select your company and your data will automatically sync with our database
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Need Help Getting Started?</h2>
          <p className="text-xl text-brand-gray mb-12">
            Our support team is available 24/7 to help you with the setup process
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-lg">
              <Phone className="w-5 h-5 text-brand-green" />
              <span>Call us at: </span>
              <a href="tel:+919678128228" className="text-brand-green hover:text-brand-green/80 font-semibold">
                +91 9678128228
              </a>
            </div>
            <div className="w-full max-w-md">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0">
                <div className="flex flex-1 rounded-lg sm:rounded-r-none overflow-hidden border border-gray-200">
                  <div className="bg-white px-3 flex items-center border-r border-gray-200">
                    <span className="text-gray-500 text-sm">+91</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="flex-1 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    maxLength={10}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full sm:w-auto rounded-lg sm:rounded-l-none bg-brand-green hover:bg-brand-green/90 text-sm"
                  disabled={!isPhoneValid}
                >
                  Get Support
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 px-4 bg-brand-green">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Download KiranaBuddy Tally Connector and start your digital journey today</p>
          <Button size="lg" variant="secondary" className="bg-white text-brand-green hover:bg-gray-100">
            <Download className="mr-2 h-5 w-5" /> Download Now
          </Button>
        </div>
      </section>

      {/* Modal */}
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
    </div>
  )
}

