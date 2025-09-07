"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Phone, Mail } from "lucide-react"

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    requests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
    // Handle booking submission
  }

  return (
    <section className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-foreground">Đặt Phòng</CardTitle>
          <CardDescription>Điền thông tin để hoàn tất đặt phòng của bạn</CardDescription>
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

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
              Xác Nhận Đặt Phòng
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
