"use client"

import * as React from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { submitPhoneNumber } from "../app/actions"

export function PhoneInput() {
  const [phone, setPhone] = React.useState("")
  const [showModal, setShowModal] = React.useState(false)
  const { pending } = useFormStatus()

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 10) {
      setPhone(value)
    }
  }

  async function handleSubmit(formData: FormData) {
    const result = await submitPhoneNumber(formData)

    if (result.success) {
      setShowModal(true)
      setPhone("")
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form action={handleSubmit} className="flex items-stretch rounded-lg overflow-hidden border border-gray-200">
        <div className="bg-white px-4 flex items-center border-r border-gray-200">
          <span className="text-gray-500">+91</span>
        </div>
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          className="border-0 focus-visible:ring-0 rounded-none"
          placeholder="Enter your phone number"
        />
        <Button
          type="submit"
          className="rounded-l-none bg-[#07C158] hover:bg-[#68CA68]"
          disabled={phone.length !== 10 || pending}
        >
          Get Support
        </Button>
      </form>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thanks for your interest</DialogTitle>
            <DialogDescription>Our support team will get in touch with you soon!</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

