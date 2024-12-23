
import { Card, CardContent } from '@mui/material'
import { Video, Ticket, BookOpen, MessageSquare } from 'lucide-react'

export default function FeatureSection() {
  return (
    <section className="w-full bg-[#1C1C1C] py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-12">
          বোনাস কি পাচ্ছেন?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <Card className="bg-[#2C2C2C] border-none">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-red-100/10 flex items-center justify-center">
                <Video className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-white text-lg">ওয়েবিনারের রেকর্ডেড কপি</h3>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="bg-[#2C2C2C] border-none">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-yellow-100/10 flex items-center justify-center">
                <Ticket className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-white text-lg">এক্সক্লুসিভ কুপন</h3>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="bg-[#2C2C2C] border-none">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-blue-100/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-white text-lg">ফ্রি ইবুক বা চেকলিস্ট</h3>
            </CardContent>
          </Card>

          {/* Feature 4 */}
          <Card className="bg-[#2C2C2C] border-none">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-indigo-100/10 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-white text-lg">১২১ ফ্রি কনসাল্টেশন (১৫মিঃ)</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

