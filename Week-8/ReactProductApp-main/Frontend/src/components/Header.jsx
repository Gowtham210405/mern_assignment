import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-10 py-7 bg-gray-800 shadow-md">
      
      <img
        className="w-14 sm:w-16 md:w-16 rounded-full border-2 border-white shadow-md hover:scale-105 transition mb-3 sm:mb-0"
        src="https://static.vecteezy.com/system/resources/previews/015/259/493/original/business-consulting-services-logo-design-vector.jpg"
        alt="Logo"
      />

      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-base sm:text-lg md:text-2xl font-semibold text-gray-200">
        
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 border-b-2 border-orange-400 pb-1"
                : "hover:text-orange-300 transition"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 border-b-2 border-orange-400 pb-1"
                : "hover:text-orange-300 transition"
            }
          >
            ProductsList
          </NavLink>
        </li>

        <li>
          <NavLink
            to="contactus"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 border-b-2 border-orange-400 pb-1"
                : "hover:text-orange-300 transition"
            }
          >
            ContactUs
          </NavLink>
        </li>

      </ul>
    </div>
  )
}

export default Header