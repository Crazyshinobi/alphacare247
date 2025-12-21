import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogs } from '../data/blogs';

const BlogsPage = () => {
  return (
    <>
      <SEO 
        title="On-Site Blood Testing Delhi – Save Time & Stress"
        description="Doctor-led guide: How on-site blood testing brings lab accuracy to your home in Delhi traffic. Results in minutes. AlphaCare247"
        type="website"
      />
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
    </>
  );
};

export default BlogsPage;