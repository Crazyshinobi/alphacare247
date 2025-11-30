export const blogs = [
  {
    id: 1,
    title: "Home Blood Test Services in Delhi – Convenient & Affordable with AlphaCare247",
    excerpt: "Skip long lab queues with home blood test services in Delhi. AlphaCare247 offers NABL-accredited lab tie-ups, certified phlebotomists, and fast digital reports. Affordable packages start at just ₹250—book anytime, anywhere for hassle-free healthcare at home.",
    date: "September 5, 2024",
    slug: "home-blood-test-services-in-delhi",
    image: "https://images.unsplash.com/photo-1666887360976-75c4503fc8e9?w=400&h=200&fit=crop",
    keywords: "home blood test Delhi, blood test at home, NABL lab, phlebotomist, digital reports"
  },
  {
    id: 2,
    title: "TOP 5 BENEFITS OF BOOKING A HEALTH CHECKUP PACKAGE ONLINE",
    excerpt: "Taking charge of your health doesn't have to be overwhelming. In an era where convenience is king, booking a health checkup package online is transforming how we approach preventive care.",
    date: "September 12, 2024",
    slug: "benefits-of-booking-health-checkup",
    image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=400&h=200&fit=crop",
    keywords: "online health checkup, preventive care, health package booking, digital health"
  },
  {
    id: 3,
    title: "DOCTOR-CENTRIC DIAGNOSTICS: HOW ON-SITE BLOOD TESTING SAVES TIME FOR PATIENTS",
    excerpt: "In today's fast-paced world, patients value convenience and efficiency in healthcare. Doctor-centric diagnostics, particularly on-site blood testing, is revolutionizing how medical care is delivered.",
    date: "September 17, 2024",
    slug: "onsite-blood-testing-saves-time",
    image: "https://images.unsplash.com/photo-1518281361980-b26bfd556770?w=400&h=200&fit=crop",
    keywords: "on-site blood testing, doctor diagnostics, patient convenience, healthcare efficiency"
  }
];

export const getBlogBySlug = (slug) => {
  return blogs.find(blog => blog.slug === slug);
};
