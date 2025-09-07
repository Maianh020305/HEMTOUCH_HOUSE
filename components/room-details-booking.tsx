"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, Mail, Users, Bed, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const branches = [
  {
    id: "branch-1",
    name: "Chi Nhánh Trung Tâm",
    location: "Quận 1, TP.HCM",
    description: "Không gian ấm cúng với kiến trúc truyền thống Việt Nam",
    amenities: ["Wifi miễn phí", "Bãi đậu xe", "Vườn xanh", "An ninh 24/7"],
    rooms: [
      {
        type: "Standard Room",
        price: "800.000",
        capacity: "2 người",
        size: "20m²",
        amenities: ["Wifi tốc độ cao", "Điều hòa", "Phòng tắm riêng", "Tủ lạnh mini"],
        images: [
          "/modern-hotel-standard-room-with-bed.jpg",
          "/hotel-room-bathroom-clean-modern.jpg",
          "/hotel-room-balcony-city-view.jpg",
        ],
        description: "Phòng tiêu chuẩn với đầy đủ tiện nghi cơ bản, phù hợp cho cặp đôi hoặc khách du lịch một mình.",
      },
      {
        type: "Superior Room",
        price: "1.200.000",
        capacity: "2-3 người",
        size: "28m²",
        amenities: ["Wifi tốc độ cao", "Điều hòa", "Phòng tắm riêng", "Tủ lạnh mini", "Ban công", "Bàn làm việc"],
        images: [
          "/superior-hotel-room-with-balcony.jpg",
          "/hotel-room-work-desk-modern.jpg",
          "/hotel-room-superior-bathroom.jpg",
        ],
        description: "Phòng cao cấp với không gian rộng rãi hơn, có ban công và khu vực làm việc riêng.",
      },
      {
        type: "Deluxe Room",
        price: "1.800.000",
        capacity: "3-4 người",
        size: "35m²",
        amenities: [
          "Wifi tốc độ cao",
          "Điều hòa",
          "Phòng tắm riêng",
          "Tủ lạnh mini",
          "Ban công lớn",
          "Sofa",
          "Bếp nhỏ",
        ],
        images: [
          "/deluxe-hotel-room-with-kitchenette.jpg",
          "/hotel-room-living-area-sofa.jpg",
          "/hotel-room-large-balcony-garden-view.jpg",
        ],
        description: "Phòng sang trọng với đầy đủ tiện nghi, có khu vực sinh hoạt riêng và bếp nhỏ tiện lợi.",
      },
      {
        type: "Standard Rooftop",
        price: "1.500.000",
        capacity: "2-4 người",
        size: "30m²",
        amenities: ["Wifi tốc độ cao", "Điều hòa", "Phòng tắm riêng", "Tủ lạnh mini", "Sân thượng riêng", "BBQ"],
        images: [
          "/rooftop-hotel-room-with-terrace.jpg",
          "/hotel-rooftop-terrace-bbq-area.jpg",
          "/hotel-rooftop-city-skyline-view.jpg",
        ],
        description: "Phòng trên tầng thượng với sân riêng, view toàn cảnh thành phố và khu vực BBQ.",
      },
    ],
  },
  {
    id: "branch-2",
    name: "Chi Nhánh Sân Vườn",
    location: "Quận 7, TP.HCM",
    description: "Không gian cà phê mở với view thiên nhiên tuyệt đẹp",
    amenities: ["Wifi miễn phí", "Sân vườn", "Cà phê đặc biệt", "An ninh 24/7"],
    rooms: [
      {
        type: "Standard Room",
        price: "700.000",
        capacity: "2 người",
        size: "22m²",
        amenities: ["Wifi tốc độ cao", "Điều hòa", "Phòng tắm riêng", "View vườn"],
        images: [
          "/garden-view-hotel-room-natural-light.jpg",
          "/hotel-room-garden-balcony-plants.jpg",
          "/hotel-room-bathroom-garden-theme.jpg",
        ],
        description: "Phòng tiêu chuẩn với view vườn xanh mát, không gian thư giãn lý tưởng.",
      },
      {
        type: "Superior Room",
        price: "1.000.000",
        capacity: "2-3 người",
        size: "26m²",
        amenities: ["Wifi tốc độ cao", "Điều hòa", "Phòng tắm riêng", "Ban công vườn", "Máy pha cà phê"],
        images: [
          "/superior-garden-room-with-coffee-machine.jpg",
          "/hotel-room-garden-balcony-with-plants.jpg",
          "/modern-bathroom-with-garden-view.jpg",
        ],
        description: "Phòng cao cấp với máy pha cà phê riêng và ban công nhìn ra vườn xanh.",
      },
      {
        type: "Deluxe Room",
        price: "1.500.000",
        capacity: "3-4 người",
        size: "32m²",
        amenities: ["Wifi tốc độ cao", "Điều hòa", "Phòng tắm riêng", "Sân vườn riêng", "Máy pha cà phê", "Khu BBQ"],
        images: [
          "/deluxe-room-with-private-garden-terrace.jpg",
          "/hotel-room-with-bbq-area-and-garden.jpg",
          "/spacious-room-with-garden-view-and-coffee-corner.jpg",
        ],
        description: "Phòng sang trọng với sân vườn riêng, khu vực BBQ và không gian thư giãn ngoài trời.",
      },
      {
        type: "Standard Rooftop",
        price: "1.300.000",
        capacity: "2-4 người",
        size: "28m²",
        amenities: ["Wifi tốc độ cao", "Điều hòa", "Phòng tắm riêng", "Sân thượng", "View vườn toàn cảnh"],
        images: [
          "/rooftop-room-with-panoramic-garden-view.jpg",
          "/hotel-rooftop-terrace-overlooking-gardens.jpg",
          "/rooftop-room-interior-with-large-windows.jpg",
        ],
        description: "Phòng trên tầng thượng với view toàn cảnh khu vườn và không gian mở thoáng đãng.",
      },
    ],
  },
]

interface BookingFormData {
  name: string
  email: string
  phone: string
  checkIn: string
  checkOut: string
  guests: string
  requests: string
}

export function RoomDetailsBooking() {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null)
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    requests: "",
  })

  const handleBranchSelect = (branchId: string) => {
    setSelectedBranch(branchId)
    setSelectedRoom(null)
    setShowBookingForm(false)
  }

  const handleRoomSelect = (room: any) => {
    setSelectedRoom(room)
    setCurrentImageIndex(0)
    setShowBookingForm(false)
  }

  const handleBookNow = () => {
    setShowBookingForm(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", {
      branch: selectedBranch,
      room: selectedRoom,
      ...formData,
    })
    // Handle booking submission
    alert("Đặt phòng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.")
  }

  const nextImage = () => {
    if (selectedRoom && selectedRoom.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedRoom.images.length)
    }
  }

  const prevImage = () => {
    if (selectedRoom && selectedRoom.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length)
    }
  }

  return (
    <section className="space-y-8" id="booking">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Đặt Phòng HEMTOUCH</h2>
        <p className="text-muted-foreground text-lg">Chọn chi nhánh và loại phòng phù hợp với nhu cầu của bạn</p>
      </div>

      {/* Branch Selection */}
      <div className="grid md:grid-cols-2 gap-8">
        {branches.map((branch) => (
          <Card
            key={branch.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedBranch === branch.id ? "ring-2 ring-primary shadow-lg" : ""
            }`}
            onClick={() => handleBranchSelect(branch.id)}
          >
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <img
                src={
                  branch.id === "branch-1"
                    ? "/traditional-vietnamese-house-with-garden.jpg"
                    : "/vietnamese-garden-coffee-shop-with-traditional-arc.jpg"
                }
                alt={branch.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-primary">
                <MapPin className="h-4 w-4 mr-1" />
                {branch.id === "branch-1" ? "Homestay" : "Cà Phê"}
              </Badge>
            </div>

            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {branch.name}
                <span className="text-sm text-muted-foreground">{branch.location}</span>
              </CardTitle>
              <CardDescription className="text-base">{branch.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {branch.amenities.map((amenity, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
              </div>

              <Button
                className={`w-full ${
                  selectedBranch === branch.id ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                }`}
              >
                {selectedBranch === branch.id ? "Đã Chọn Chi Nhánh" : "Chọn Chi Nhánh Này"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Room Selection */}
      {selectedBranch && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">Chọn Loại Phòng</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches
              .find((b) => b.id === selectedBranch)
              ?.rooms.map((room, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedRoom === room ? "ring-2 ring-primary shadow-lg" : ""
                  }`}
                  onClick={() => handleRoomSelect(room)}
                >
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <img
                      src={room.images[0] || "/placeholder.svg"}
                      alt={room.type}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{room.type}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{room.capacity}</span>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-primary">{room.price}₫/đêm</div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      )}

      {/* Room Details */}
      {selectedRoom && (
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">{selectedRoom.type}</CardTitle>
            <CardDescription>{selectedRoom.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Image Gallery */}
            <div className="relative">
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img
                  src={selectedRoom.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${selectedRoom.type} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center mt-2 space-x-2">
                {selectedRoom.images.map((_: any, index: number) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-primary" : "bg-gray-300"}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Room Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Thông tin phòng</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span>Diện tích: {selectedRoom.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Sức chứa: {selectedRoom.capacity}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary mt-4">
                    {selectedRoom.price}₫<span className="text-sm font-normal text-muted-foreground">/đêm</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Tiện nghi phòng</h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedRoom.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button onClick={handleBookNow} className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                Đặt Phòng Ngay
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Booking Form */}
      {showBookingForm && selectedRoom && (
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">Hoàn Tất Đặt Phòng</CardTitle>
            <CardDescription>
              {selectedRoom.type} - {branches.find((b) => b.id === selectedBranch)?.name}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ và Tên</Label>
                  <Input
                    id="name"
                    placeholder="Nhập họ tên của bạn"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Số Điện Thoại</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      placeholder="0123 456 789"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="checkin">Ngày Nhận Phòng</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="checkin"
                      type="date"
                      className="pl-10"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkout">Ngày Trả Phòng</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="checkout"
                      type="date"
                      className="pl-10"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Số Khách</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn số khách" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 người</SelectItem>
                      <SelectItem value="2">2 người</SelectItem>
                      <SelectItem value="3">3 người</SelectItem>
                      <SelectItem value="4">4 người</SelectItem>
                      <SelectItem value="5">5 người</SelectItem>
                      <SelectItem value="6">6 người</SelectItem>
                      <SelectItem value=">6">{">6 người"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requests">Yêu Cầu Đặc Biệt</Label>
                <Textarea
                  id="requests"
                  placeholder="Chia sẻ những yêu cầu đặc biệt của bạn..."
                  value={formData.requests}
                  onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Tổng tiền:</span>
                  <span className="text-2xl font-bold text-primary">{selectedRoom.price}₫/đêm</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Đã bao gồm thuế và phí</p>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                Xác Nhận Đặt Phòng
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </section>
  )
}
