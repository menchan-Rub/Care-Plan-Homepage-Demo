import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            ＡＬｉＣｏ・ケアプランセンター
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/#about">
              <Button variant="ghost">企業情報</Button>
            </Link>
            <Link href="/#recruitment">
              <Button variant="ghost">募集要項</Button>
            </Link>
            <Link href="/#contact">
              <Button variant="default">お問い合わせ</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

