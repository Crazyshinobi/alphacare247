import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetailPage1 = () => {
  const { id } = useParams()

  const blogData = {
    title: "Why Home Blood Test Services in Delhi Are Changing Healthcare Convenience",
    author: "AlphaCare247 Team",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1666887360976-75c4503fc8e9",
    excerpt: "Discover how home blood test services in Delhi are revolutionizing healthcare with convenience, accuracy, and affordability for busy residents.",
    content: [
      {
        type: "paragraph",
        text: "Delhi is a city that never pauses. Between traffic jams, office deadlines, and family responsibilities, finding time for regular health checkups can feel like a luxury. Standing in long queues at diagnostic labs not only takes hours but also drains energy. This is exactly why home blood test services in Delhi are becoming a game-changer—bringing healthcare right to your doorstep with speed, accuracy, and care."
      },
      {
        type: "heading",
        text: "Convenience at Your Doorstep"
      },
      {
        type: "paragraph",
        text: "No more waking up early to rush to a lab or waiting for your turn in crowded spaces. With home blood test services, the process is designed to fit seamlessly into your lifestyle:"
      },
      {
        type: "list",
        items: [
          "Book your test online in minutes",
          "A certified phlebotomist visits your home at your chosen time",
          "Reports are delivered digitally within 6–24 hours"
        ]
      },
      {
        type: "paragraph",
        text: "For working professionals, parents managing busy schedules, and senior citizens, this service saves valuable time while ensuring health checks are never ignored."
      },
      {
        type: "image",
        url: "/images/blog1-1.png"
      },
      {
        type: "heading",
        text: "Why AlphaCare247 Stands Out"
      },
      {
        type: "paragraph",
        text: "Among the growing demand for health-at-home services, AlphaCare247 is setting benchmarks in Delhi-NCR with its trusted approach:"
      },
      {
        type: "list",
        items: [
          "2,500+ satisfied users",
          "Partnerships with 85+ NABL-accredited labs",
          "Affordable tests starting from just INR 250",
          "24/7 flexible booking, including weekends",
          "Wide range of tests: CBC, HbA1c, lipid profile, thyroid, vitamin panels, and full-body health checkups"
        ]
      },
      {
        type: "paragraph",
        text: "With a 4.8/5 rating on Justdial, AlphaCare247 is known for professionalism, timely reports, and patient-friendly service."
      },
      {
        type: "heading",
        text: "Easy and Quick Booking Process"
      },
      {
        type: "paragraph",
        text: "Booking a test is as simple as ordering food online:"
      },
      {
        type: "numberedList",
        items: [
          "Visit www.alphacare247.in",
          "Choose your required test or health package",
          "Select your preferred date and time",
          "Get reports in your inbox within 24 hours"
        ]
      },
      {
        type: "paragraph",
        text: "This system is designed for comfort and flexibility, making healthcare hassle-free for every household in Delhi."
      },
      {
        type: "image",
        url: "/images/blog1-2.png"
      },
      {
        type: "heading",
        text: "Meeting Delhi's Unique Healthcare Needs"
      },
      {
        type: "paragraph",
        text: "With over 30 million residents, Delhi faces rising cases of lifestyle-related health issues such as:"
      },
      {
        type: "list",
        items: [
          "High stress and sedentary jobs leading to cholesterol and heart risks",
          "Pollution contributing to respiratory concerns and vitamin deficiencies",
          "Busy routines leaving little time for preventive care"
        ]
      },
      {
        type: "paragraph",
        text: "Home blood test services address these needs by making regular monitoring effortless. Whether it's a simple CBC or a detailed diabetes profile, the process ensures early detection without disrupting daily life."
      },
      {
        type: "image",
        url: "/images/blog1-3.png",
        height: 360
      },
      {
        type: "heading",
        text: "Safety and Professional Standards"
      },
      {
        type: "paragraph",
        text: "AlphaCare247 ensures that every home collection is carried out with the highest level of care:"
      },
      {
        type: "list",
        items: [
          "Certified and trained phlebotomists",
          "Sterile, single-use collection kits",
          "Secure sample handling and storage until testing"
        ]
      },
      {
        type: "paragraph",
        text: "This gives peace of mind to families who want accurate results without stepping outside."
      },
      {
        type: "heading",
        text: "Affordability That Fits Every Budget"
      },
      {
        type: "paragraph",
        text: "Healthcare shouldn't be expensive. With packages starting from INR 250 and full-body checkups under INR 2,000, AlphaCare247 ensures affordability without compromising on accuracy. For families, this means regular preventive checkups are finally within reach."
      },
      {
        type: "heading",
        text: "Final Thoughts"
      },
      {
        type: "paragraph",
        text: "Home blood test services in Delhi are more than a convenience—they are the future of healthcare. By saving time, offering reliable results, and making testing more accessible, AlphaCare247 is helping residents take control of their health in a stress-free way."
      },
      {
        type: "paragraph",
        text: "For professionals racing against deadlines, parents managing busy mornings, or seniors looking for comfort, these services bring care directly to your doorstep."
      },
      {
        type: "paragraph",
        text: "Take charge of your health today. Explore packages at www.alphacare247.in and experience healthcare designed for modern Delhi."
      }
    ],
    tags: ["home blood test", "Delhi healthcare", "blood test at home", "health checkup", "AlphaCare247"],
    relatedPosts: [
      {
        id: 1,
        title: "Top 5 Benefits of Regular Health Checkups",
        excerpt: "Discover why regular health monitoring is essential for preventive care.",
        image: "/images/blog/benefits-health-checkup.jpg"
      },
      {
        id: 2,
        title: "Understanding Different Types of Blood Tests",
        excerpt: "A comprehensive guide to common blood tests and what they mean.",
        image: "/images/blog/types-blood-tests.jpg"
      }
    ]
  }

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          return <h2 key={index} className="text-xl font-bold mt-6 mb-4 text-gray-800">{item.text}</h2>
        case 'paragraph':
          return <p key={index} className="mb-4 leading-7 text-gray-700">{item.text}</p>
        case 'list':
          return (
            <ul key={index} className="mb-4 list-disc list-inside space-y-2">
              {item.items.map((listItem, idx) => (
                <li key={idx} className="text-gray-700">{listItem}</li>
              ))}
            </ul>
          )
        case 'image':
          return (
            <div className="flex justify-center my-6">
              <img
                src={item.url}
                alt={item.alt || 'Blog image'}
                style={{ height: item?.height ? `${item.height}px` : '240px' }}
                className="w-auto max-w-full border border-gray-300 shadow-md rounded-lg"
              />
            </div>
          )
        case 'numberedList':
          return (
            <ol key={index} className="mb-4 list-decimal list-inside space-y-2">
              {item.items.map((listItem, idx) => (
                <li key={idx} className="text-gray-700">{listItem}</li>
              ))}
            </ol>
          )
        default:
          return null
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <a href="/" className="hover:text-blue-600">Home</a> /
          <a href="/blogs" className="hover:text-blue-600 ml-1">Blog</a> /
          <span className="ml-1 text-gray-400">Current Post</span>
        </nav>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={blogData.image}
            alt={blogData.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-blue-600 font-semibold">Healthcare</span>
              <span className="text-gray-500 text-sm">{blogData.date}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {blogData.title}
            </h1>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">A</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{blogData.author}</p>
                  <p className="text-sm text-gray-500">{blogData.readTime}</p>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none">
              {renderContent(blogData.content)}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {blogData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-8 bg-blue-600 text-white rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Ready to Take Control of Your Health?</h3>
          <p className="mb-4">Book your home blood test today and experience healthcare convenience</p>
          <a
            href="/"
            className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
          >
            Book Now
          </a>
        </div>

        {/* Related Posts */}
        {/* <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogData.relatedPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">{post.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <a href={`/blog/${post.id}`} className="text-blue-600 font-medium text-sm hover:text-blue-700">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default BlogDetailPage1