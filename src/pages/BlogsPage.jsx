import React from 'react';
import { Link } from 'react-router-dom';

// Sample pharmacy/lab test blog data with image links
const blogs = [
  {
    id: 1,
    title: 'Home Blood Test Services in Delhi – Convenient & Affordable with AlphaCare247',
    excerpt: 'Skip long lab queues with home blood test services in Delhi. AlphaCare247 offers NABL-accredited lab tie-ups, certified phlebotomists, and fast digital reports. Affordable packages start at just ₹250—book anytime, anywhere for hassle-free healthcare at home.',
    date: 'September 5, 2025',
    slug: 'home-blood-test-services-in-delhi',
    image: 'https://images.unsplash.com/photo-1666887360976-75c4503fc8e9?w=400&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'TOP 5 BENEFITS OF BOOKING A HEALTH CHECKUP PACKAGE ONLINE',
    excerpt: 'Taking charge of your health doesn’t have to be overwhelming. In an era where convenience is king, booking a health checkup package online is transforming how we approach preventive care. Whether you’re managing a hectic schedule...',
    date: 'September 12, 2025',
    slug: 'benefits-of-booking-health-checkup',
    image: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=400&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'DOCTOR-CENTRIC DIAGNOSTICS: HOW ON-SITE BLOOD TESTING SAVES TIME FOR PATIENTS',
    excerpt: 'In today’s fast-paced world, patients value convenience and efficiency in healthcare. Doctor-centric diagnostics, particularly on-site blood testing, is revolutionizing how medical care is delivered. ',
    date: 'September 17, 2025',
    slug: 'onsite-blood-testing-saves-time',
    image: 'https://images.unsplash.com/photo-1518281361980-b26bfd556770?w=400&h=200&fit=crop'
  },
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-bg-grey py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-sans font-bold text-primary text-center mb-12 animate-fade-in">
          Pharmacy & Lab Test Insights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-sans font-medium mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{blog.date}</span>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="text-primary font-sans font-medium hover:text-secondary transition-colors duration-200"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;