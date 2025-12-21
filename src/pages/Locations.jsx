import React from 'react';
import SEO from '../components/SEO';

const Locations = () => {
  const locations = [
    {
      title: "AlphaCare24x7 - Main Center",
      location: "Doctor Consultation, Blood Tests, Ultrasound, CT-MRI Facility",
      mapUrl: "https://maps.app.goo.gl/wgv7cVvEhk4LZu2x5?g_st=ipc",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.549037955052!2d77.3382858!3d28.613302599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce570b632c4c5%3A0x757f99656c4d5802!2sAlphacare24x7%20(Doctor%20Consultation%2CBlood%20Tests%2C%20Ultrasound%2CCT-MRI%20Facility%20Available)!5e0!3m2!1sen!2sin!4v1766310012098!5m2!1sen!2sin"
    },
    {
      title: "AlphaCare 24x7 - Dava India",
      location: "All Blood Test, CT Scan, MRI, Ultrasounds Available",
      mapUrl: "https://maps.app.goo.gl/HGEzzxMZ6JHQv9RL8?g_st=ipc",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6682790265354!2d77.35076529999999!3d28.6397025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0056a2bfc1%3A0xc58d3a3b18232e6e!2sAlphacare%2024x7%20Dava%20India%20(All%20Blood%20test%20%2CCT%20Scan%2CMRI%2CUltrasounds..%20available)!5e0!3m2!1sen!2sin!4v1766310043207!5m2!1sen!2sin"
    },
    {
      title: "Dr. Preeti Saxena Clinic",
      location: "General Physician & Gynecologist | Blood Test & Ultrasound, MRI, CT Scan",
      mapUrl: "https://maps.app.goo.gl/b1pjjRWD9AbEcFJc7?g_st=ipc",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3557309682956!2d77.2840178!3d28.619098700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3fe7605d2ef%3A0xd3f2e896f183602a!2sDr.Preeti%20Saxena%20(M.B.B.S)%20I%20General%20Physician%20and%20gynecologist%20%7C%20All%20blood%20test%20%26%20ultrasound%2C%20mri%2C%20ct%20scan..!5e0!3m2!1sen!2sin!4v1766310068131!5m2!1sen!2sin"
    },
    {
      title: "AlphaCare 24x7 - Shib Medical Center",
      location: "All Blood Test & Urine Test | X-ray, Ultrasound, MRI, CT Scan",
      mapUrl: "https://maps.app.goo.gl/4dQvsiTEuEhoyN398?g_st=ipc",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5383564959943!2d77.33122790000002!3d28.6136229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57308f0c009%3A0xe360bc3e6f0f35b8!2sAlphaCare%2024x7%20(Shib%20Medical%20Center)%20All%20Blood%20Test%20and%20Urine%20Test..%7C%20All%20X-ray%2C%20Ultrasound%2C%20MRI%2C%20CT%20Scan.!5e0!3m2!1sen!2sin!4v1766310092377!5m2!1sen!2sin"
    },
    {
      title: "AlphaCare 247 - EMOHA",
      location: "All Blood Test & Urine Test | X-ray, Ultrasound, MRI, CT Scan",
      mapUrl: "https://maps.app.goo.gl/7Wm1MpbZ9abAyBEDA?g_st=ipc",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6552878192133!2d77.3633977!3d28.5801122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d412c1049d%3A0xe886d36b524c297f!2sAlphacare%20247%20%7C%20EMOHA%20%7C%20All%20Blood%20Test%20and%20Urine%20Test..%7C%20All%20X-ray%2C%20Ultrasound%2C%20MRI%2C%20CT%20Scan..!5e0!3m2!1sen!2sin!4v1766310117989!5m2!1sen!2sin"
    },
    {
      title: "AlphaCare 24x7 - Physician/Gynecologist",
      location: "All Blood Test & Urine Test | Ultrasound, MRI, CT Scans Available",
      mapUrl: "https://maps.app.goo.gl/7yCULvjPQaBmezdz9?g_st=ipc",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.060987332658!2d77.2788704!3d28.6279342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3904499e343%3A0x842ea62ff7db59ad!2sAlphacare%2024x7%20%7C%20All%20Blood%20Test%20and%20Urine%20Test..I(Physician%2FGynecologist%20Doctor)%20All%20Ultrasound%2C%20MRI%2C%20CT%20Scans%20available..!5e0!3m2!1sen!2sin!4v1766310149824!5m2!1sen!2sin"
    },
    {
      title: "AlphaCare 24x7 - Davaindia Pharmacy",
      location: "All Blood Test & Urine Test | MRI, CT Scans Available",
      mapUrl: "https://maps.app.goo.gl/ff8aDLNDE8L6um21A?g_st=ipc",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2933765596936!2d77.3811702!3d28.620968100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff52f06dd89%3A0x11f97e50497af283!2sAlphacare%2024x7%20%7C%20Davaindia%20Pharmacy%20(All%20blood%20test%20and%20urine%20test..%7C%20All%20mri%2C%20ct%20scans.!5e0!3m2!1sen!2sin!4v1766310171465!5m2!1sen!2sin"
    }
  ];

  return (
    <>
      <SEO 
        title="Blood Test at Home Delhi – All Areas Covered"
        description="Free blood test home collection in South Delhi, East Delhi, North Delhi, West Delhi, Central Delhi. Same-day reports. Call/WhatsApp 8377-895-404"
        type="website"
      />
      <div className="font-sans bg-white text-gray-700">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-teal-300">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Service Locations</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">We provide quality healthcare services across multiple locations for your convenience</p>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  {/* Location Info */}
                  <div className="p-6 pb-4">
                    <h3 className="text-xl font-bold text-primary mb-2">{location.title}</h3>
                    <p className="text-gray-600 text-sm">{location.location}</p>
                  </div>
                  
                  {/* Map Embed */}
                  <div className="h-80 w-full">
                    <iframe
                      src={location.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={location.title}
                    ></iframe>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
                      >
                        <i className="fas fa-directions mr-2"></i>
                        Get Directions
                      </a>
                      
                      <button className="flex-1 bg-secondary text-white py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300">
                        <i className="fas fa-phone mr-2"></i>
                        Book Service
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-bg-green px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Need Help Finding Us?</h2>
            <p className="text-lg text-gray-600 mb-8">Our customer support team is here to help you locate the nearest service center and book your appointment.</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a href="tel:+911234567890" className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300">
                <i className="fas fa-phone mr-2"></i>
                Call Us Now
              </a>
              
              <a href="mailto:info@alphacare247.com" className="bg-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300">
                <i className="fas fa-envelope mr-2"></i>
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Locations;