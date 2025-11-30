import fs from 'fs';
import path from 'path';

const routes = [
  {
    path: '/',
    title: 'AlphaCare247 - Home Healthcare Services | Blood Tests & Health Checkups',
    description: 'Professional home healthcare services in Delhi. Book blood tests, health checkups, and medical consultations at home. NABL-accredited labs, certified professionals, affordable packages starting ₹250.'
  },
  {
    path: '/blogs',
    title: 'Health & Medical Blogs - AlphaCare247',
    description: 'Read expert insights on home healthcare, blood tests, health checkups, and medical diagnostics. Stay informed with AlphaCare247\'s health blog.'
  },
  {
    path: '/blog/home-blood-test-services-in-delhi',
    title: 'Home Blood Test Services in Delhi – Convenient & Affordable with AlphaCare247',
    description: 'Skip long lab queues with home blood test services in Delhi. AlphaCare247 offers NABL-accredited lab tie-ups, certified phlebotomists, and fast digital reports.'
  },
  {
    path: '/blog/benefits-of-booking-health-checkup',
    title: 'TOP 5 BENEFITS OF BOOKING A HEALTH CHECKUP PACKAGE ONLINE',
    description: 'Taking charge of your health doesn\'t have to be overwhelming. In an era where convenience is king, booking a health checkup package online is transforming how we approach preventive care.'
  },
  {
    path: '/blog/onsite-blood-testing-saves-time',
    title: 'DOCTOR-CENTRIC DIAGNOSTICS: HOW ON-SITE BLOOD TESTING SAVES TIME FOR PATIENTS',
    description: 'In today\'s fast-paced world, patients value convenience and efficiency in healthcare. Doctor-centric diagnostics, particularly on-site blood testing, is revolutionizing how medical care is delivered.'
  },
  {
    path: '/policy',
    title: 'Privacy Policy - AlphaCare247',
    description: 'Read AlphaCare247\'s privacy policy to understand how we collect, use, and protect your personal information for our home healthcare services.'
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms and Conditions - AlphaCare247',
    description: 'Read AlphaCare247\'s terms and conditions for using our home healthcare services, blood tests, and health checkup packages.'
  }
];

const baseHTML = fs.readFileSync('./dist/index.html', 'utf8');

routes.forEach(route => {
  let html = baseHTML;
  
  // Replace title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  
  // Replace description
  html = html.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${route.description}"`);
  
  // Update Open Graph
  html = html.replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${route.title}"`);
  html = html.replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${route.description}"`);
  
  // Update Twitter
  html = html.replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${route.title}"`);
  html = html.replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${route.description}"`);
  
  // Create directory structure
  const filePath = route.path === '/' ? './dist/index.html' : `./dist${route.path}/index.html`;
  const dir = path.dirname(filePath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filePath, html);
  console.log(`Generated: ${filePath}`);
});

console.log('Static HTML files generated with unique meta tags!');