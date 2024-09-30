import { ShoppingCart, Instagram, Facebook, Twitter, ChevronRight, Cake, Coffee, IceCream } from "lucide-react"
import { Button } from "@/components/ui/button"

const CupcakeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C10.3431 4 9 5.34315 9 7V8H15V7C15 5.34315 13.6569 4 12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 11C5 9.34315 6.34315 8 8 8H16C17.6569 8 19 9.34315 19 11V13C19 14.6569 17.6569 16 16 16H8C6.34315 16 5 14.6569 5 13V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CandyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out hover:shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-pink-600 font-serif flex items-center">
            <CupcakeIcon className="w-8 h-8 mr-2 text-pink-600" />
            Sweet Delights
          </h1>
          <nav className="hidden md:flex space-x-6">
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-300 text-lg font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 font-serif leading-tight flex items-center justify-center">
              <Cake className="w-12 h-12 mr-4 text-pink-600" />
              Indulge in Sweet Perfection
              <IceCream className="w-12 h-12 ml-4 text-pink-600" />
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Handcrafted cakes and confections that turn moments into memories
            </p>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Explore Our Treats
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16 font-serif flex items-center justify-center">
              <CandyIcon className="w-10 h-10 mr-4 text-pink-600" />
              Our Specialties
              <CandyIcon className="w-10 h-10 ml-4 text-pink-600" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { name: "Chocolate Dream Cake", price: "$35", image: "/placeholder.svg?height=300&width=400", icon: Cake },
                { name: "Strawberry Shortcake", price: "$30", image: "/placeholder.svg?height=300&width=400", icon: Cake },
                { name: "Lemon Meringue Pie", price: "$25", image: "/placeholder.svg?height=300&width=400", icon: Cake },
                { name: "Red Velvet Cupcakes", price: "$20", image: "/placeholder.svg?height=300&width=400", icon: CupcakeIcon },
                { name: "Macarons Assortment", price: "$18", image: "/placeholder.svg?height=300&width=400", icon: CandyIcon },
                { name: "Tiramisu", price: "$28", image: "/placeholder.svg?height=300&width=400", icon: Coffee },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:-translate-y-2">
                  <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <item.icon className="w-6 h-6 mr-2 text-pink-600" />
                      <h4 className="text-2xl font-semibold text-gray-800 font-serif">{item.name}</h4>
                    </div>
                    <p className="text-gray-600 mb-4 text-lg">{item.price}</p>
                    <Button variant="outline" className="w-full text-pink-600 border-pink-600 hover:bg-pink-600 hover:text-white transition-colors duration-300">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-32">
          <div className="bg-pink-100 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-serif flex items-center justify-center">
              <CupcakeIcon className="w-8 h-8 mr-4 text-pink-600" />
              Join Our Sweet Community
              <CupcakeIcon className="w-8 h-8 ml-4 text-pink-600" />
            </h3>
            <p className="text-xl text-gray-600 mb-10">
              Subscribe for exclusive offers, new flavor announcements, and sweet surprises!
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-3 rounded-full text-gray-800 border-2 border-pink-300 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                />
                <Button className="px-8 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h4 className="text-2xl font-bold mb-4 font-serif flex items-center justify-center md:justify-start">
                <CupcakeIcon className="w-6 h-6 mr-2 text-pink-400" />
                Sweet Delights
              </h4>
              <p className="text-gray-300">123 Bakery Street, Sweetville, CA 90210</p>
              <p className="text-gray-300">Phone: (555) 123-4567</p>
            </div>
            <div className="flex space-x-6">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                  <Icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Sweet Delights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}