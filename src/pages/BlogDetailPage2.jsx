import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetailPage2 = () => {
  const { id } = useParams()

  const blogData = {
  title: "Top 5 Benefits of Booking a Health Checkup Package Online",
  author: "AlphaCare247 Team",
  date: "2025-10-25",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1666887360976-75c4503fc8e9",
  excerpt: "Discover the top 5 benefits of booking a health checkup package online with Alphacare247—convenience, savings, and personalized preventive care for a healthier tomorrow.",
  content: [
    {
      type: "paragraph",
      text: "Taking charge of your health doesn’t have to be overwhelming. In an era where convenience is king, booking a health checkup package online is transforming how we approach preventive care. Whether you’re managing a hectic schedule or simply want a stress-free way to monitor your well-being, online booking through platforms like Alphacare247 makes it easier than ever."
    },
    {
      type: "heading",
      text: "1. Unmatched Convenience"
    },
    {
      type: "paragraph",
      text: "Finding time for a doctor’s visit can feel like solving a puzzle. Booking a health checkup package online eliminates the hassle of long phone calls or in-person appointments. With just a few taps on your phone or clicks on your laptop, you can schedule a checkup at a time that suits you, whether it’s late at night or during a quick break."
    },
    {
      type: "list",
      items: [
        "Book your health checkup in minutes",
        "Choose a time slot that fits your schedule",
        "Explore packages like full-body screenings, thyroid tests, or heart health checks"
      ]
    },
    {
      type: "paragraph",
      text: "This is a lifesaver for busy folks, from working professionals to parents on the go. At Alphacare247, you can compare and book instantly at www.alphacare247.com/health-checkup-packages."
    },
    {
      type: "image",
      url: "/images/blog2-1.png"
    },
    {
      type: "heading",
      text: "2. Clear Pricing and Budget-Friendly Deals"
    },
    {
      type: "paragraph",
      text: "One major perk of booking a health checkup package online is the transparency it offers. Unlike traditional bookings where costs can be vague until the bill arrives, online platforms show you exactly what you’re paying for upfront, including blood tests, scans, or doctor consultations with no hidden fees."
    },
    {
      type: "list",
      items: [
        "Transparent pricing with no surprises",
        "Exclusive online discounts and promo codes",
        "Affordable packages starting from competitive rates"
      ]
    },
    {
      type: "paragraph",
      text: "Regular checkups catch problems early, saving you money and stress in the long run. Browse affordable options at www.alphacare247.com/health-checkup-packages."
    },
    {
      type: "heading",
      text: "3. A World of Choices"
    },
    {
      type: "paragraph",
      text: "When you book online, you’re not limited to what’s available at your local clinic. Online platforms let you explore a variety of health checkup packages designed for specific needs—like women’s wellness, senior care, or diabetes monitoring."
    },
    {
      type: "list",
      items: [
        "Choose packages tailored to your health goals",
        "Partnered with top labs and hospitals",
        "Option for home sample collection for ultimate convenience"
      ]
    },
    {
      type: "paragraph",
      text: "Alphacare247 ensures flexibility, allowing you to select based on location, ratings, or specific tests, putting you in control of your preventive health plan."
    },
    {
      type: "heading",
      text: "4. Privacy and Less Waiting"
    },
    {
      type: "paragraph",
      text: "Health is personal, and booking a health checkup package online respects your need for discretion. You can manage everything privately from home, with secure systems protecting your data. Test results are often delivered digitally, reducing the chance of misplaced records."
    },
    {
      type: "list",
      items: [
        "Secure data handling with advanced encryption",
        "Digital delivery of test results",
        "At-home testing options to avoid crowded clinics"
      ]
    },
    {
      type: "paragraph",
      text: "Smart scheduling reduces wait times, making your health checkup quick and stress-free. Learn more at www.alphacare247.com/book-appointment-guide."
    },
    {
      type: "image",
      url: "/images/blog2-2.png"
    },
    {
      type: "heading",
      text: "5. Seamless Tracking and Support"
    },
    {
      type: "paragraph",
      text: "Booking online doesn’t just end with the appointment. Digital platforms make it easy to track your booking, reschedule if needed, and access your results with a click. You’ll also get handy reminders via email or text to keep you on top of your health game."
    },
    {
      type: "list",
      items: [
        "Track bookings and results via user-friendly dashboards",
        "Email or text reminders for appointments",
        "Virtual consultations for follow-up questions"
      ]
    },
    {
      type: "paragraph",
      text: "Alphacare247 offers tools to monitor your health trends, ensuring you stay proactive about your wellness. Start today at www.alphacare247.com/online-booking."
    },
    {
      type: "heading",
      text: "Frequently Asked Questions (FAQs)"
    },
    {
      type: "list",
      items: [
        "What does a health checkup package include? A package typically bundles medical tests like blood work, imaging, and consultations to monitor your health and catch issues early.",
        "Is it secure to book a health checkup package online? Yes, trusted platforms like Alphacare247 use advanced encryption to keep your personal information safe.",
        "Can I modify my online health checkup booking? Most platforms allow easy rescheduling or cancellations, often with minimal or no fees—check the specific policy when booking.",
        "How do I pick the best health checkup package online? Look at your health needs, age, and lifestyle; Alphacare247 offers filters to help you find the perfect package.",
        "Do online health checkup bookings offer savings? Absolutely, online platforms often provide exclusive discounts, making preventive health more budget-friendly."
      ]
    },
    {
      type: "paragraph",
      text: "Ready to take charge of your health? Explore packages at www.alphacare247.com/online-booking and make preventive care a breeze with Alphacare247."
    }
  ],
  tags: ["health checkup", "online booking", "preventive care", "Alphacare247", "medical tests"],
  relatedPosts: [
    {
      id: 1,
      title: "Why Home Blood Test Services Are Changing Healthcare",
      excerpt: "Discover how home blood test services are revolutionizing healthcare with convenience and accuracy.",
      image: "/images/blog/benefits-home-blood-test.jpg"
    },
    {
      id: 2,
      title: "Understanding Different Types of Health Checkup Packages",
      excerpt: "A guide to choosing the right health checkup package for your needs.",
      image: "/images/blog/types-health-checkups.jpg"
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

export default BlogDetailPage2