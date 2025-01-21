"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // デモ用の遅延
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "送信完了",
      description: "お問い合わせありがとうございます。担当者より連絡させていただきます。",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">
          お名前 <span className="text-red-500">*</span>
        </Label>
        <Input id="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">
          メールアドレス <span className="text-red-500">*</span>
        </Label>
        <Input id="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">電話番号</Label>
        <Input id="phone" type="tel" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </Label>
        <Textarea id="message" required />
      </div>
      <Button
        type="submit"
        className="w-full text-lg py-6 bg-primary hover:bg-primary/90 transition-colors font-bold text-primary-foreground shadow-lg hover:shadow-xl"
        disabled={isSubmitting}
      >
        {isSubmitting ? "送信中..." : "送信する"}
      </Button>
    </form>
  )
}

