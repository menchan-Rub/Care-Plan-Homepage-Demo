export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold mb-4">ＡＬｉＣｏ・ケアプランセンター</h2>
            <address className="not-italic">
              <p>〒191-0041</p>
              <p>東京都日野市南平3丁目6番地7号</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">運営会社</h3>
            <p>ALiCoケアサービス株式会社</p>
            <p className="mt-4 text-sm text-gray-600">
              © {new Date().getFullYear()} ALiCoケアサービス株式会社 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

