import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';

import Banner from "../assets/banner.png";


const HomePage = () => {
    const [showCallSection, setShowCallSection] = useState(false);
      const [toasts, setToasts] = useState([]);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setShowCallSection(true);
          } else {
            setShowCallSection(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const showToast = (message, type) => {
        const id = Date.now();
        const newToast = { id, message, type };
        setToasts(prevToasts => [...prevToasts, newToast]);
    
        setTimeout(() => {
          setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
        }, 3000);
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        showToast('Form submitted successfully! We will contact you shortly.', 'success');
        e.target.reset();
      };
    
      const handleCallFormSubmit = (e) => {
        e.preventDefault();
        showToast('We will call you shortly!', 'success');
        e.target.reset();
      };

  return (
    <>
      <SEO 
        title="AlphaCare247 - Home Healthcare Services | Blood Tests & Health Checkups"
        description="Professional home healthcare services in Delhi. Book blood tests, health checkups, and medical consultations at home. NABL-accredited labs, certified professionals, affordable packages starting ₹250."
        type="website"
      />
      <div className="font-sans bg-white text-gray-700">
      {/* Header/Banner */}
      <section id="banner">
        <img className='w-full' src={Banner} alt="" />
      </section>

      <div className="relative">
        <div className="w-full h-80 bg-gradient-to-r from-primary to-teal-300 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Your Health is Our Priority</h1>
            <p className="text-xl max-w-2xl mx-auto animate-fade-in">Quality diagnostic services in the comfort of your home</p>
            <button className="mt-6 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 animate-pulse-slow">
              Book a Test Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Form Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-center text-primary mb-6">Book Your Test in 3 Simple Steps</h2>

          <form id="myForm" className="space-y-6" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-mobile-alt text-primary text-xl mr-3"></i>
                <input type="tel" placeholder="Enter Your Mobile No." className="w-full py-2 px-2 outline-none" name="mobile" minLength="10" maxLength="10" required />
              </div>

              <div className="flex items-center border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-user text-primary text-xl mr-3"></i>
                <input type="text" placeholder="Enter Your Name" className="w-full py-2 px-2 outline-none" name="name" required />
              </div>

              <div className="flex items-center border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-city text-primary text-xl mr-3"></i>
                <select className="w-full py-2 px-2 outline-none bg-white" id="city" name="city" required>
                  <option value="" selected>Select Your City *</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Noida">Noida</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-primary focus:ring-primary" required />
                <span className="text-sm">You hereby affirm & authorise Alphacare247 to process the personal data as per the T&C.</span>
              </label>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-gradient-to-r from-primary to-teal-500 text-white px-8 py-3 rounded-lg font-medium hover:from-teal-500 hover:to-primary transition-all duration-300 shadow-md hover:shadow-lg">
                Get Free Call Now
              </button>
            </div>
          </form>
        </div>

        {/* Toast Container */}
        <div id="toast-container" className="fixed top-4 right-4 z-50 space-y-2">
          {toasts.map(toast => (
            <div
              key={toast.id}
              className={`px-6 py-3 rounded-lg shadow-lg text-white font-medium ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'} toast transition-opacity duration-500`}
            >
              {toast.message}
            </div>
          ))}
        </div>
      </section>



      {/* Statistics Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">2579+</h3>
              <p className="text-gray-600 text-lg">Happy Users</p>
              <div className="w-16 h-16 mx-auto mt-4 bg-teal-100 rounded-full flex items-center justify-center">
                <i className="fas fa-smile text-primary text-2xl"></i>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">7169+</h3>
              <p className="text-gray-600 text-lg">Tests Booked</p>
              <div className="w-16 h-16 mx-auto mt-4 bg-teal-100 rounded-full flex items-center justify-center">
                <i className="fas fa-vial text-primary text-2xl"></i>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">85+</h3>
              <p className="text-gray-600 text-lg">Trusted Labs</p>
              <div className="w-16 h-16 mx-auto mt-4 bg-teal-100 rounded-full flex items-center justify-center">
                <i className="fas fa-clinic-medical text-primary text-2xl"></i>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-gray-600 text-lg">Phlebotomist</p>
              <div className="w-16 h-16 mx-auto mt-4 bg-teal-100 rounded-full flex items-center justify-center">
                <i className="fas fa-user-md text-primary text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-bg-grey">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <div className="flex text-amber-400 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-600 mb-6">"Cost effective prices for pet ct in delhi , very good experience, staff is also good."</p>
              <h4 className="font-semibold text-lg">Pankaj Rajput</h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <div className="flex text-amber-400 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-600 mb-6">"It is good and budget friendly. It gives reports on time. Hence I will suggest to go for it."</p>
              <h4 className="font-semibold text-lg">Rashmi Suman</h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <div className="flex text-amber-400 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-600 mb-6">"Very good service and expert home sample collection staff"</p>
              <h4 className="font-semibold text-lg">Vikas Chaprana</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call Section */}
      <div
        id="call-section"
        className={`fixed bottom-0 left-0 w-full bg-primary text-white p-4 transform transition-transform duration-300 ${showCallSection ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-lg font-semibold mb-3 md:mb-0">Talk to our Health Advisor</h3>
          <form className="flex flex-col md:flex-row w-full md:w-auto" onSubmit={handleCallFormSubmit}>
            <input type="tel" placeholder="Enter your 10 digit mobile number" className="py-2 px-4 rounded-l text-gray-700 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-white" maxLength="10" minLength="10" name="mobile" required />
            <button type="submit" className="bg-gradient-to-r from-amber-500 to-secondary py-2 px-6 rounded-r font-medium mt-2 md:mt-0 md:ml-2 hover:opacity-90 transition-opacity">Get a free call</button>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default HomePage