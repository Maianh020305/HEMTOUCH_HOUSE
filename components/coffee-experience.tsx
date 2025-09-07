import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Leaf, Clock, Star } from "lucide-react"

const coffeeMenu = [
  {
    name: "Cà Phê Phin Truyền Thống",
    description: "Cà phê pha phin đậm đà, thưởng thức theo cách truyền thống",
    price: "35.000",
    specialty: true,
    image: "/traditional-vietnamese-drip-coffee-phin-filter.jpg",
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị quen thuộc của cà phê sữa đá Việt Nam",
    price: "30.000",
    specialty: false,
    image: "/vietnamese-iced-coffee-with-condensed-milk.jpg",
  },
  {
    name: "Cà Phê Trứng",
    description: "Đặc sản Hà Nội với lớp kem trứng béo ngậy",
    price: "45.000",
    specialty: true,
    image: "/vietnamese-egg-coffee-with-creamy-foam.jpg",
  },
  {
    name: "Cà Phê Dừa",
    description: "Sự kết hợp độc đáo giữa cà phê và nước cốt dừa",
    price: "40.000",
    specialty: true,
    image: "/coconut-coffee-vietnamese-style-drink.jpg",
  },
]

export function CoffeeExperience() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Coffee className="h-8 w-8 text-accent" />
          <Leaf className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Trải Nghiệm Cà Phê</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Thưởng thức những ly cà phê đặc trưng được pha chế từ hạt cà phê Việt Nam chất lượng cao
        </p>
      </div>

      <div className="relative rounded-lg overflow-hidden mb-8">
        <img
          src="/vietnamese-garden-coffee-shop-with-traditional-arc.jpg"
          alt="Vietnamese coffee shop atmosphere"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white bg-black/30 backdrop-blur-sm rounded-lg p-3">
          <h3 className="text-xl font-bold mb-2">Không Gian Cà Phê Truyền Thống</h3>
          <p className="text-sm opacity-90">Thưởng thức cà phê trong không gian yên tĩnh, gần gũi với thiên nhiên</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {coffeeMenu.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
              {item.specialty && (
                <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Đặc Biệt
                </Badge>
              )}
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <span className="text-primary font-bold text-lg">{item.price}₫</span>
              </div>
              <CardDescription className="text-base">{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>g
    </section>
  )
}
