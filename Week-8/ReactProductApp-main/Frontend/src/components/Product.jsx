import React from 'react';
import { useLocation, useNavigate } from 'react-router';

function Product() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;

  if (!product) {
    return (
      <p className="text-center text-lg sm:text-xl md:text-2xl mt-20 text-red-500 px-4">
        No product data available
      </p>
    );
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain hover:scale-105 transition duration-300"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              {product.title}
            </h1>

            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-xs sm:text-sm capitalize">
              {product.category}
            </span>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">
              ${product.price}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 justify-center md:justify-start">
              <button
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto px-6 py-3 bg-gray-300 rounded-xl hover:bg-gray-400 transition"
              >
                Back
              </button>

              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;