"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Users, Award, Heart, Leaf } from "lucide-react"

export function CompanyInfo() {
  return (
    <section className="space-y-12" id="business">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">HEMTOUCH HOUSE & COFFEE</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Mang đến trải nghiệm homestay và cà phê đích thực với tinh thần hiếu khách Việt Nam
        </p>
      </div>

      {/* Company Story */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">Câu Chuyện Của Chúng Tôi</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HEMTOUCH HOUSE & COFFEE được thành lập với mong muốn tạo ra một không gian ấm cúng, nơi du khách có thể
              trải nghiệm văn hóa Việt Nam một cách chân thực nhất. Chúng tôi kết hợp giữa lưu trú homestay truyền thống
              và văn hóa cà phê đặc sắc của Việt Nam.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Với hai chi nhánh tại trung tâm thành phố và khu vực sân vườn, chúng tôi mang đến những trải nghiệm đa
              dạng cho mọi loại du khách, từ những ai yêu thích sự nhộn nhịp của thành phố đến những người tìm kiếm sự
              yên bình của thiên nhiên.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="/traditional-vietnamese-house-with-garden.jpg"
            alt="HEMTOUCH House"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
      </div>

      {/* Mission & Values */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-amber-600" />
            </div>
            <CardTitle>Sứ Mệnh</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Tạo ra những kỷ niệm đáng nhớ cho du khách thông qua dịch vụ homestay chất lượng và trải nghiệm cà phê
              Việt Nam đích thực.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle>Tầm Nhìn</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Trở thành thương hiệu homestay và cà phê hàng đầu, góp phần quảng bá văn hóa và du lịch Việt Nam ra thế
              giới.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle>Giá Trị</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Chân thành, chất lượng, bền vững và luôn đặt trải nghiệm khách hàng lên hàng đầu trong mọi hoạt động.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Company Stats */}
      <div className="bg-amber-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-center mb-8">Thành Tựu Của Chúng Tôi</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">2</div>
            <div className="text-sm text-muted-foreground">Chi Nhánh</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Khách Hàng Hài Lòng</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">4.8/5</div>
            <div className="text-sm text-muted-foreground">Đánh Giá Trung Bình</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Hỗ Trợ Khách Hàng</div>
          </div>
        </div>
      </div>

      {/* Branch Information */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-center">Thông Tin Chi Nhánh</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                Chi Nhánh Trung Tâm
              </CardTitle>
              <CardDescription>Homestay & Coffee Experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img
                  src="/traditional-vietnamese-house-with-garden.jpg"
                  alt="Chi nhánh trung tâm"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>146/20 Võ Thị Sáu, Quận 3, TP.HCM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>(028) 3822 1234</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>07:00 - 22:00 - Phục vụ cả tuần</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Homestay</Badge>
                <Badge variant="secondary">Cà phê</Badge>
                <Badge variant="secondary">Trung tâm</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                Chi Nhánh Sân Vườn
              </CardTitle>
              <CardDescription>Garden Coffee & Homestay</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img
                  src="/vietnamese-garden-coffee-shop-with-traditional-arc.jpg"
                  alt="Chi nhánh sân vườn"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>456 Đường Nguyễn Văn Linh, Quận 7, TP.HCM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>(028) 3777 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>6:00 - 22:00 hàng ngày</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Sân vườn</Badge>
                <Badge variant="secondary">Cà phê đặc biệt</Badge>
                <Badge variant="secondary">Thiên nhiên</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

            </section>
  )
}
