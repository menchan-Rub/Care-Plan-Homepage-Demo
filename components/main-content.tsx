"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
    {children}
  </motion.div>
)

const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
}: {
  children: React.ReactNode
  direction?: "left" | "right"
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

const HoverCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {children}
  </motion.div>
)

export default function MainContent() {
  return (
    <main className="flex-1">
      {/* メインビジュアル */}
      <section className="relative h-[500px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/udqo51j54ygyjmcev508inqbel86-cQNjeItscaCA3DnSr15SAf0c0tuLRI.webp"
          alt="ケアプラン作成の環境"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <FadeIn>
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">あなたの経験を活かせる職場です</h1>
              <p className="text-xl md:text-2xl">ケアマネジャーとして、新しいキャリアを築きませんか？</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* アピールポイント */}
      <section className="py-16 bg-gray-50" id="about">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">アピールポイント</h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "あなたの資格・経験が活かせるお仕事です",
              "完全週休2日制で、週2日のお休みがしっかり確保できます",
              "安定した年収アップにつながる賞与・昇給あり",
              "嬉しい交通費の支給で通勤代の心配なし",
              "マイカー通勤可能な駐車場完備",
              "年間休日140日以上でワークライフバランスを実現",
            ].map((point, index) => (
              <SlideIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                <HoverCard>
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg">{point}</p>
                    </CardContent>
                  </Card>
                </HoverCard>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* 募集要項 */}
      <section className="py-16" id="recruitment">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">募集要項</h2>
          </FadeIn>
          <div className="max-w-3xl mx-auto space-y-8">
            <FadeIn delay={0.2}>
              <div className="grid gap-4">
                <h3 className="text-xl font-bold">募集職種</h3>
                <p>介護支援専門員(ケアマネジャー)</p>

                <h3 className="text-xl font-bold mt-4">仕事内容</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>ケアプラン作成</li>
                  <li>認定調査</li>
                  <li>その他、付随する業務全般</li>
                </ul>

                <h3 className="text-xl font-bold mt-4">給与</h3>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary">月給 268,270円〜</p>
                  <div className="flex gap-2">
                    <Badge>賞与あり</Badge>
                    <Badge>昇給あり</Badge>
                  </div>
                  <p className="text-sm text-gray-600">※経験者は年数に応じて考慮します</p>
                </div>

                <h3 className="text-xl font-bold mt-4">勤務時間</h3>
                <p>9:00〜18:00（休憩60分）</p>
                <p className="text-sm text-gray-600">※完全フレックスタイム制</p>

                <h3 className="text-xl font-bold mt-4">休日・休暇</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>完全週休2日制（土日祝定休）</li>
                  <li>年間休日140日以上</li>
                  <li>年次有給休暇</li>
                  <li>慶弔休暇</li>
                  <li>リフレッシュ休暇（月1日）</li>
                  <li>夏季休暇（3日）</li>
                  <li>冬季休暇（6日）</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-16 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
          </FadeIn>
          <div className="max-w-md mx-auto">
            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}

