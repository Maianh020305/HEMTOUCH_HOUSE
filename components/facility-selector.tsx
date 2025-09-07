"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Coffee, Users, Bed } from "lucide-react"

const facilities = [
  {
    id: "branch-1",
    name: "Chi Nhánh Trung Tâm",
    type: "homestay",
    description: "Không gian ấm cúng với kiến trúc truyền thống Việt Nam",
    location: "Quận 1, TP.HCM",
    amenities: ["Wifi miễn phí", "Bãi đậu xe", "Vườn xanh"],
    image: "/traditional-vietnamese-house-with-garden.jpg",
    rooms: [
      { type: "Standard Room", price: "800.000", capacity: "2 người" },
      { type: "Superior Room", price: "1.200.000", capacity: "2-3 người" },
      { type: "Deluxe Room", price: "1.800.000", capacity: "3-4 người" },
      { type: "Standard Rooftop", price: "1.500.000", capacity: "2-4 người" },
    ],
  },
  {
    id: "branch-2",
    name: "Chi Nhánh Sân Vườn",
    type: "coffee",
    description: "Không gian cà phê mở với view thiên nhiên tuyệt đẹp",
    location: "Quận 7, TP.HCM",
    amenities: ["Wifi miễn phí", "Sân vườn", "Cà phê đặc biệt"],
    image: "/vietnamese-garden-coffee-shop-with-traditional-arc.jpg",
    rooms: [
      { type: "Standard Room", price: "700.000", capacity: "2 người" },
      { type: "Superior Room", price: "1.000.000", capacity: "2-3 người" },
      { type: "Deluxe Room", price: "1.500.000", capacity: "3-4 người" },
      { type: "Standard Rooftop", price: "1.300.000", capacity: "2-4 người" },
    ],
  },
]

export function FacilitySelector() {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null)
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

  const getIcon = (type: string) => {
    return type === "homestay" ? <Home className="h-5 w-5" /> : <Coffee className="h-5 w-5" />
  }

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Chọn Chi Nhánh & Loại Phòng</h2>
        <p className="text-muted-foreground text-lg">Lựa chọn chi nhánh và loại phòng phù hợp với nhu cầu của bạn</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {facilities.map((facility) => (
          <Card
            key={facility.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedFacility === facility.id ? "ring-2 ring-primary shadow-lg" : ""
            }`}
            onClick={() => {
              setSelectedFacility(facility.id)
              setSelectedRoom(null)
            }}
          >
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <img
                src={facility.image || "/placeholder.svg"}
                alt={facility.name}
                className="w-full h-full object-cover"
              />
              <Badge
                className={`absolute top-4 left-4 ${
                  facility.type === "homestay" ? "bg-primary" : "bg-accent text-accent-foreground"
                }`}
              >
                {getIcon(facility.type)}
                <span className="ml-1">{facility.type === "homestay" ? "Homestay" : "Cà Phê"}</span>
              </Badge>
            </div>

            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {facility.name}
                <span className="text-sm text-muted-foreground">{facility.location}</span>
              </CardTitle>
              <CardDescription className="text-base">{facility.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {facility.amenities.map((amenity, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
              </div>

              {selectedFacility === facility.id && (
                <div className="space-y-3 border-t pt-4">
                  <h4 className="font-semibold text-sm">Chọn loại phòng:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {facility.rooms.map((room, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                          selectedRoom === `${facility.id}-${index}`
                            ? "bg-primary/10 border-primary"
                            : "bg-secondary/50 hover:bg-secondary"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedRoom(`${facility.id}-${index}`)
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Bed className="h-4 w-4" />
                            <span className="font-medium text-sm">{room.type}</span>
                          </div>
                          <span className="text-primary font-bold text-sm">{room.price}₫/đêm</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                          <Users className="h-3 w-3" />
                          {room.capacity}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Button
                className={`w-full ${
                  selectedFacility === facility.id
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary hover:bg-secondary/90"
                }`}
              >
                {selectedFacility === facility.id ? "Đã Chọn Chi Nhánh" : "Chọn Chi Nhánh Này"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">Tiện nghi được ưu chuộng nhất</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Sân vườn</span>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Phòng giặt miễn phí</span>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Lau dọn hàng tuần</span>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">An ninh 24/7</span>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Khu vực công đông</span>
          </div>
        </div>
      </div>
    </section>
  )
}
