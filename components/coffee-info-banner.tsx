import { Clock, Coffee, Leaf } from "lucide-react"

export function CoffeeInfoBanner() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-2xl p-8 shadow-sm border border-amber-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Opening Hours */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
            <Clock className="w-8 h-8 text-amber-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Giờ Mở Cửa</h3>
          <p className="text-gray-600 font-medium">6:00 - 22:00</p>
        </div>

        {/* Fresh Coffee */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Coffee className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Cà Phê Tươi</h3>
          <p className="text-gray-600">Pha mới mỗi ngày</p>
        </div>

        {/* 100% Organic */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
            <Leaf className="w-8 h-8 text-amber-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">100% Organic</h3>
          <p className="text-gray-600">Hạt cà phê sạch</p>
        </div>
      </div>
    </div>
  )
}
