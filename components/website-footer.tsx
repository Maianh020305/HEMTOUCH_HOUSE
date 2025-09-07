"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function WebsiteFooter() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">
              Trải nghiệm của bạn tại HEMTOUCH rất quan trọng với chúng tôi
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Chia sẻ suy nghĩ của bạn để chúng tôi có thể tạo ra trải nghiệm tốt hơn cho bạn lần sau
            </p>
            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
            >
              Chia sẻ suy nghĩ của bạn
            </Button>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold">Hotline</span>
                </div>
                <p className="text-xl font-bold">1900 3311 / Zalo OA</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold">Email</span>
                </div>
                <p className="text-lg">booking@hemtouch.vn</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4">Theo dõi chúng tôi qua</h4>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-amber-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-amber-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-amber-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.14 3.78 3.86 3.86 0 01-4.25-2.05 3.88 3.88 0 010-4.25A3.87 3.87 0 0110.5 2.5h.5V0h-.5A6.5 6.5 0 000 6.5a6.5 6.5 0 0010.5 6.5 6.5 6.5 0 006.5-6.5 6.49 6.49 0 00-2.91-5.31z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-amber-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* HEMTOUCH MORE */}
            <div>
              <h4 className="text-amber-600 font-semibold mb-4">HEMTOUCH MORE</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Độc quyền hội viên
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Chính sách & Điều khoản MORE
                  </a>
                </li>
              </ul>
            </div>

            {/* HEMTOUCH */}
            <div>
              <h4 className="text-amber-600 font-semibold mb-4">HEMTOUCH</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tuyển dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Đăng nhập/Đăng ký
                  </a>
                </li>
              </ul>
            </div>

            {/* ĐẶT PHÒNG */}
            <div>
              <h4 className="text-amber-600 font-semibold mb-4">ĐẶT PHÒNG</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Dành cho Khách hàng Cá nhân
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Lưu trú dài hạn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Dành cho Doanh nghiệp
                  </a>
                </li>
              </ul>
            </div>

            {/* CHÍNH SÁCH */}
            <div>
              <h4 className="text-amber-600 font-semibold mb-4">CHÍNH SÁCH</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Chính sách giao và nhận phòng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Chính sách đổi, trả phòng và hoàn tiền
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Câu hỏi thường gặp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-white">CÔNG TY CỔ PHẦN HEMTOUCH</h4>
            <p className="text-sm text-gray-300 mb-2">
              Mã số doanh nghiệp: 0316527995. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hồ Chí
              Minh cấp ngày 15/03/2024.
            </p>
            <p className="text-sm text-gray-300">Địa chỉ: 123 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center text-sm text-gray-400">
            <p>© CÔNG TY CỔ PHẦN HEMTOUCH</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
