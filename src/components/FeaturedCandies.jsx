import React from 'react'
import { Star } from 'lucide-react'

const candies = [
  {
    name: "Cupcake",
    image: "src\\resources\\cupcake.jpeg",
    price: "R$8.00",
    rating: 4.5
  },
]

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function FeaturedCandies() {
  return (
    <section id='featured-candies' className="bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Nossos docinhos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {candies.map((candy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={candy.image} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{candy.name}</h3>
                <p className="text-pink-600 font-bold mb-2">{candy.price}</p>
                <StarRating rating={candy.rating} />
                <button className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}