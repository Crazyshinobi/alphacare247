import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="logo.png" alt="" />
          <h3 className="text-xl font-semibold mb-4">"A Network of your Trusted Labs"</h3>
          <p className="text-gray-300">We have a network of various labs that people trust, and we are increasing their trust in them by providing quality and time-saving services.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="flex items-center mb-3 text-gray-300">
            <i className="fas fa-phone-alt text-primary mr-3"></i>
            +91-8377895401, +91-8377895404
          </p>
          <p className="flex items-center mb-3 text-gray-300">
            <i className="fas fa-envelope text-primary mr-3"></i>
            carealpha247@gmail.com
          </p>
          <p className="flex items-start text-gray-300">
            <i className="fas fa-map-marker-alt text-primary mr-3 mt-1"></i>
            C-3/76, 1st Floor, New Kondli, Mayur Vihar Phase-3, Delhi-96
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>Copyright © 2023 Alpha Care 247</p>
      </div>
    </footer>
  )
}

export default Footer