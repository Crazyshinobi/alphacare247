import fs from 'fs';
import path from 'path';

// Define your routes and their meta data
const routes = {
  '/': {
    title: 'Blood Test at Home in Delhi – ₹99+ | AlphaCare247',
    description: 'Book NABL blood test at home in Delhi-NCR from ₹99. Same-day reports, free collection anywhere. Call/WhatsApp 8377-895-404'
  },
  '/blogs': {
    title: 'On-Site Blood Testing Delhi – Save Time & Stress',
    description: 'Doctor-led guide: How on-site blood testing brings lab accuracy to your home in Delhi traffic. Results in minutes. AlphaCare247'
  },
  '/policy': {
    title: 'Privacy Policy | AlphaCare247',
    description: 'How AlphaCare247 protects your personal & medical data. 100% secure & transparent privacy practices.'
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | AlphaCare247',
    description: 'Terms and conditions for AlphaCare247 home healthcare services.'
  },
  '/sections': {
    title: 'Blood Test at Home Delhi | Free Collection – AlphaCare247',
    description: 'CBC, Thyroid, Sugar, Lipid, Vitamin D tests at your doorstep in Delhi, Noida, Ghaziabad. NABL lab, reports in 6–8 hrs. Call 8377-895-404'
  },
  '/locations': {
    title: 'Blood Test at Home Delhi – All Areas Covered',
    description: 'Free blood test home collection in South Delhi, East Delhi, North Delhi, West Delhi, Central Delhi. Same-day reports. Call/WhatsApp 8377-895-404'
  }
};

// Read the base HTML template
const baseHtml = fs.readFileSync('dist/index.html', 'utf8');

// Generate HTML for each route
Object.entries(routes).forEach(([route, meta]) => {
  let html = baseHtml;
  
  // Replace title and meta tags
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${meta.title}</title>`
  );
  
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${meta.description}" />`
  );
  
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${meta.title}" />`
  );
  
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${meta.description}" />`
  );
  
  // Create directory if needed
  const routePath = route === '/' ? '' : route;
  const dir = path.join('dist', routePath);
  
  if (routePath && !fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write the HTML file
  const filePath = route === '/' ? 'dist/index.html' : `dist${route}/index.html`;
  fs.writeFileSync(filePath, html);
  
  console.log(`Generated: ${filePath}`);
});

console.log('Static HTML files generated successfully!');