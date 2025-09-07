"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function HeaderNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white border-b border-amber-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div
                className="bg-amber-600 text-white px-3 py-2 rounded font-bold text-xl shadow-sm"
                style={{ backgroundColor: "#d97706" }}
              >
                HT
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-gray-800">HEMTOUCH</div>
                <div className="text-xs text-gray-600 -mt-1">HOUSE & COFFEE</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("booking")}
              className={`text-gray-700 hover:text-amber-600 font-medium transition-colors ${
                activeSection === "booking" ? "text-amber-600" : ""
              }`}
            >
              Đặt Phòng
            </button>
            <button
              onClick={() => scrollToSection("business")}
              className={`text-gray-700 hover:text-amber-600 font-medium transition-colors ${
                activeSection === "business" ? "text-amber-600" : ""
              }`}
            >
              Doanh Nghiệp
            </button>
            <a href="#loyalty" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Hội Viên Thân Thiết
            </a>
            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">MỚI</span>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <span className="w-5 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                    <span className="text-yellow-400 text-xs">★</span>
                  </span>
                  <span className="font-medium">VIE</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>🇻🇳 Tiếng Việt</DropdownMenuItem>
                <DropdownMenuItem>🇺🇸 English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40">
          <div className="fixed right-0 top-0 h-full w-80 bg-black shadow-xl z-50">
            <div className="p-6">
              <div className="flex items-center justify-end mb-8">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:bg-gray-800"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <nav className="space-y-6">
                <button
                  onClick={() => scrollToSection("booking")}
                  className="block text-xl font-medium text-white hover:text-amber-400 transition-colors w-full text-left"
                >
                  Đặt phòng
                </button>
                <button
                  onClick={() => scrollToSection("business")}
                  className="block text-xl font-medium text-white hover:text-amber-400 transition-colors w-full text-left"
                >
                  Doanh nghiệp
                </button>
                <a
                  href="#loyalty"
                  className="block text-xl font-medium text-white hover:text-amber-400 transition-colors"
                >
                  Hội viên thân thiết
                </a>
                <a
                  href="#coffee"
                  className="block text-xl font-medium text-white hover:text-amber-400 transition-colors"
                >
                  Cà phê
                </a>
                <a
                  href="#register"
                  className="block text-xl font-medium text-white hover:text-amber-400 transition-colors"
                >
                  Đăng ký/Đăng nhập
                </a>
                <a
                  href="#about"
                  className="block text-xl font-medium text-white hover:text-amber-400 transition-colors"
                >
                  Về chúng tôi
                </a>

                <div className="border-t border-gray-700 pt-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-5 bg-red-500 rounded-sm flex items-center justify-center">
                      <span className="text-yellow-400 text-xs">★</span>
                    </span>
                    <span className="font-medium text-white">VIE</span>
                  </div>

                  <div className="space-y-3 text-sm text-gray-300">
                    <a href="#careers" className="block hover:text-amber-400 transition-colors">
                      TUYỂN DỤNG
                    </a>
                    <a href="#app" className="block hover:text-amber-400 transition-colors">
                      TẢI ỨNG DỤNG
                    </a>
                    <a href="#terms" className="block hover:text-amber-400 transition-colors">
                      ĐIỀU KHOẢN
                    </a>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex items-center justify-center space-x-6">
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017 0z" />
                        </svg>
                      </a>
                      <a href="mailto:info@mivillage.com" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.82L12 11.64l8.545-7.819h1.82c.904 0 1.636.732 1.636 1.636z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
