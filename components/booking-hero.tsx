import { Button } from "@/components/ui/button"
import { Calendar, Coffee, Home } from "lucide-react"

export function BookingHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/traditional-vietnamese-house-with-garden.jpg"
          alt="Vietnamese homestay background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Home className="h-8 w-8 text-amber-400" />
            <Coffee className="h-8 w-8 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Trải Nghiệm Homestay
            <span className="text-amber-400 block">& Cà Phê Việt Nam</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto text-pretty">
            Khám phá không gian ấm cúng của homestay và thưởng thức hương vị cà phê truyền thống Việt Nam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Calendar className="mr-2 h-5 w-5" />
              Đặt Phòng Ngay
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-400 text-green-400 hover:bg-green-400/10 bg-black/20 backdrop-blur-sm"
            >
              <Coffee className="mr-2 h-5 w-5" />
              Khám Phá Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
