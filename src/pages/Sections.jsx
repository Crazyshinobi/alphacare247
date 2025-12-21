import React from 'react';
import SEO from '../components/SEO';

import Kidney from "../assets/services/1.png";
import Liver from "../assets/services/2.png";
import Thyroid from "../assets/services/3.png";

const Sections = () => {
  return (
    <>
      <SEO 
        title="Blood Test at Home Delhi | Free Collection – AlphaCare247"
        description="CBC, Thyroid, Sugar, Lipid, Vitamin D tests at your doorstep in Delhi, Noida, Ghaziabad. NABL lab, reports in 6–8 hrs. Call 8377-895-404"
        type="website"
      />
      <div className="font-sans bg-white text-gray-700">
        {/* Services Section */}
        <section className="py-12 bg-bg-green px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-4">We Deal In</h2>

            <div className="flex justify-center space-x-4 mb-12">
              <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">Pathology</button>
              <button className="bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">Radiology</button>
            </div>

            <h3 className="text-2xl font-bold text-center text-primary mb-8">Most Booked Blood Tests</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-6 text-center card-hover">
                <div className="w-20 h-20 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                  <img src={Kidney} alt="Kidney test" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Kidney</h4>
                <p className="text-gray-600">The kidney is a vital organ of our body that is responsible for removing waste.</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center card-hover">
                <div className="w-20 h-20 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <img src={Liver} alt="Liver test" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Liver</h4>
                <p className="text-gray-600">The liver regulates most chemical levels in the blood and excretes a product called bile.</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center card-hover">
                <div className="w-20 h-20 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                <img src={Thyroid} alt="Thyroid test" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Thyroid</h4>
                <p className="text-gray-600">Thyroid tests tell your healthcare provider how well your thyroid gland works.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center text-secondary mb-8">Most Booked Health Scans and Imaging Tests</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 text-center card-hover">
                <div className="w-20 h-20 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-wave-square text-secondary text-3xl"></i>
                </div>
                <h4 className="text-xl font-semibold mb-2">Ultrasound</h4>
                <p className="text-gray-600">An ultrasound is an imaging test that uses sound waves to create a picture of organs, tissues, and other structures inside the body.</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center card-hover">
                <div className="w-20 h-20 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-brain text-primary text-3xl"></i>
                </div>
                <h4 className="text-xl font-semibold mb-2">CT Scan</h4>
                <p className="text-gray-600">A CT (computed tomography) scan is an imaging test that helps healthcare providers detect diseases and injuries.</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center card-hover">
                <div className="w-20 h-20 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-x-ray text-secondary text-3xl"></i>
                </div>
                <h4 className="text-xl font-semibold mb-2">X-Ray</h4>
                <p className="text-gray-600">An X-ray is a diagnostic test that uses radiation waves, called x-rays, to take pictures of your body tissues.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sections;