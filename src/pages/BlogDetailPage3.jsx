import React from 'react'
import { useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { getBlogBySlug } from '../data/blogs'

const BlogDetailPage3 = () => {
  const { id } = useParams()
  const blog = getBlogBySlug('onsite-blood-testing-saves-time')

 const blogData = {
  title: "Doctor-Centric Diagnostics: How On-Site Blood Testing Saves Time for Patients",
  author: "AlphaCare247 Team",
  date: "2025-10-25",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1666887360976-75c4503fc8e9",
  excerpt: "Discover how on-site blood testing at AlphaCare247 saves time and improves patient care with fast, accurate diagnostics at the point of care.",
  content: [
    {
      type: "paragraph",
      text: "In today’s fast-paced world, patients value convenience and efficiency in healthcare. Doctor-centric diagnostics, particularly on-site blood testing, is revolutionizing how medical care is delivered. By bringing diagnostic tools directly to the point of care, this approach saves time, reduces stress, and enhances patient outcomes. At AlphaCare247, we’re committed to making healthcare accessible and efficient."
    },
    {
      type: "heading",
      text: "What Is On-Site Blood Testing?"
    },
    {
      type: "paragraph",
      text: "On-site blood testing refers to conducting diagnostic blood tests at the point of care—whether in a doctor’s office, clinic, or even a patient’s home. Unlike traditional methods that require samples to be sent to off-site laboratories, on-site testing delivers results quickly, often within minutes."
    },
    {
      type: "list",
      items: [
        "Speed: Results available in real-time, reducing wait times",
        "Convenience: No need to visit separate labs",
        "Accuracy: Advanced portable devices ensure reliable results"
      ]
    },
    {
      type: "paragraph",
      text: "AlphaCare247’s Primary Care Services integrate on-site testing to ensure prompt and precise diagnoses."
    },
    {
      type: "image",
      url: "/images/blog3-1.png"
    },
    {
      type: "heading",
      text: "How On-Site Blood Testing Saves Time"
    },
    {
      type: "numberedList",
      items: [
        "Immediate Results for Faster Diagnoses: Tests like cholesterol, glucose, or hemoglobin A1c are completed in minutes, allowing doctors to discuss results and treatment plans in the same visit.",
        "Reduced Travel and Wait Times: Eliminates the need to travel to a lab or wait for appointments, ideal for elderly patients or those with mobility challenges via AlphaCare247’s Mobile Healthcare Services.",
        "Streamlined Chronic Disease Management: Real-time monitoring for conditions like diabetes or hypertension enables on-the-spot adjustments to treatment plans."
      ]
    },
    {
      type: "image",
      url: "/images/blog3-2.png"
    },
    {
      type: "heading",
      text: "Benefits Beyond Time Savings"
    },
    {
      type: "paragraph",
      text: "On-site blood testing offers advantages that go beyond just saving time, enhancing the overall healthcare experience."
    },
    {
      type: "list",
      items: [
        "Enhanced Patient-Doctor Communication: Immediate results allow for same-visit discussions, improving understanding and engagement.",
        "Cost-Effective Care: Reduces the need for multiple appointments and lab visits, lowering travel expenses and copays.",
        "Improved Outcomes: Quick diagnoses enable faster interventions, critical for conditions like infections or anemia."
      ]
    },
    {
      type: "image",
      url: "/images/blog3-3.png"
    },
    {
      type: "heading",
      text: "How AlphaCare247 Implements On-Site Testing"
    },
    {
      type: "paragraph",
      text: "At AlphaCare247, we prioritize patient-centered care with state-of-the-art portable diagnostic tools to deliver accurate results quickly."
    },
    {
      type: "numberedList",
      items: [
        "Testing: Blood samples are collected and analyzed on-site.",
        "Results and Action: Results are reviewed immediately, and a personalized care plan is discussed."
      ]
    },
    {
      type: "paragraph",
      text: "This streamlined process minimizes disruptions while ensuring high-quality care. Learn more about our Innovative Healthcare Solutions at www.alphacare247.com/innovative-healthcare-solutions."
    },
    {
      type: "heading",
      text: "Frequently Asked Questions (FAQs)"
    },
    {
      type: "list",
      items: [
        "What types of tests can be done on-site? A wide range, including cholesterol, glucose, hemoglobin A1c, and liver function tests.",
        "Can on-site blood testing be done at home? Yes, AlphaCare247’s Mobile Healthcare Services bring testing to your doorstep.",
        "How quickly are results available? Most tests provide results within minutes, allowing same-visit discussions with your doctor.",
        "Is on-site testing safe and accurate? Yes, portable diagnostic devices meet strict regulatory standards for reliable outcomes.",
        "Who benefits most from on-site testing? Busy professionals, parents, seniors, and patients with chronic conditions benefit greatly."
      ]
    },
    {
      type: "heading",
      text: "Conclusion"
    },
    {
      type: "paragraph",
      text: "On-site blood testing is transforming healthcare by putting patients first. By delivering fast, accurate results at the point of care, this doctor-centric approach saves time, reduces costs, and improves outcomes. At AlphaCare247, we’re proud to offer this innovative service to make your healthcare journey smoother and more efficient."
    },
    {
      type: "paragraph",
      text: "Ready to experience the benefits of on-site diagnostics? Book your appointment at www.alphacare247.com/book-appointment and take control of your health today."
    }
  ],
  tags: ["on-site blood testing", "doctor-centric diagnostics", "rapid diagnostics", "patient time savings", "AlphaCare247"],
  relatedPosts: [
    {
      id: 1,
      title: "Top 5 Benefits of Booking Health Checkups Online",
      excerpt: "Explore the convenience and savings of online health checkup packages with AlphaCare247.",
      image: "/images/blog/benefits-health-checkup.jpg"
    },
    {
      id: 2,
      title: "Why Home Blood Test Services Are Changing Healthcare",
      excerpt: "Discover how home blood test services bring convenience and accuracy to healthcare.",
      image: "/images/blog/home-blood-test.jpg"
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
    <>
      <SEO 
        title={blog?.title || 'On-Site Blood Testing - AlphaCare247'}
        description={blog?.excerpt || 'Learn how on-site blood testing saves time for patients with doctor-centric diagnostics.'}
        image={blog?.image}
        type="article"
      />
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
    </>
  )
}

export default BlogDetailPage3