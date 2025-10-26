import React from 'react';

const PolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              Alphacare 247 ("Alphacare 247" or "we") takes the privacy of your information seriously. This privacy notice ("Privacy Notice") describes the types of personal information we collect from you through our website (including sub-domains and microsites). It also describes the purposes for which we collect that personal information, the other parties with whom we may share it and the measures we take to protect the security of your data.
            </p>
            <p className="text-gray-700 mb-6">
              The publication of this privacy statement complies with a number of laws and regulations, including Section 43A of the Information Technology Act of 2000, Regulation 4 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules of 2011 (the "SPI Rules"), and Regulation 3(1) of the Information Technology (Intermediaries Guidelines Rules) of 2011.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">What type of Personal Information we collect about you?</h2>
            <p className="text-gray-700 mb-4">
              Alpha Care 247 collects Data for various purposes set out in this Privacy Notice.
              This Data includes, without limitation, the following categories:
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
              <li><span className="font-medium">Contact information:</span> first and last name, email address, postal address, country, phone number and other similar contact data.</li>
              <li><span className="font-medium">Financial information:</span> payment instrument information, transactions, transaction history, preferences, method, mode and manner of payment and other similar data.</li>
              <li><span className="font-medium">Technical information:</span> website, device, passwords and Internet Protocol (IP) address and similar information collected via automated means, such as cookies, pixels and similar technologies.</li>
              <li><span className="font-medium">Transaction information:</span> the date of the transaction, total amount, transaction history and preferences and related details.</li>
              <li><span className="font-medium">Health related information:</span> such as information or records relating to Your medical/ health history, health status, Test booked through the platform, laboratory testing results and any other information inferred there from.</li>
              <li><span className="font-medium">Personal information:</span> Age, sex, date of birth, marital status, nationality, details of government identification documents provided, occupation, ethnicity, religion, travel history or any other personal information provided in responses to surveys or questionnaires.</li>
              <li><span className="font-medium">Your reviews, feedback and opinions</span> about our programmes and services.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To the extent permitted by law, Alphacare247.in may record and monitor your communications with us to ensure compliance with our legal and regulatory obligations and our internal policies. This may include the recording of telephone conversations.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-4">We collect Data in the following ways:</h3>
            <div className="mb-6">
              <p className="font-medium text-gray-800 mb-2">A. Information You Give Us:</p>
              <p className="text-gray-700 mb-4">We receive and store any information you enter on our website or give us in any other way (e.g., Health Camp, Laboratory). Please see the section titled "Data Shared by You" for more information.</p>
              
              <p className="font-medium text-gray-800 mb-2">B. Automatic Information We Collect:</p>
              <p className="text-gray-700 mb-4">We use "cookies", pixels and similar technologies to receive and store certain types of information whenever you interact with us. Please see the section below, titled "Data that is Collected Automatically" for more information.</p>
              
              <p className="font-medium text-gray-800 mb-2">C. E-mail Communications:</p>
              <p className="text-gray-700">To help us make e-mails more relevant and interesting, we often receive a confirmation (if your device supports such capabilities) when you open e-mail from us or click on a link in the e-mail. You can choose not to receive marketing emails from us by clicking on the unsubscribe link in any marketing email.</p>
            </div>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-4">DATA SHARED BY YOU</h3>
            <p className="text-gray-700 mb-4">
              Alpha Care 247 may collect your Data from your use of our website. For instance:
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
              <li>when you register with us to avail our services;</li>
              <li>when you conduct a transaction with us or attempt a transaction on our website;</li>
              <li>when you complete surveys conducted by or for us;</li>
              <li>when you elect to receive any communications (including promotional offers) from us.</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-4">DATA THAT IS COLLECTED AUTOMATICALLY</h3>
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                <span className="font-medium">A.</span> We automatically collect some information when you visit our. This information helps us to make improvements to our content and navigation. The information collected automatically includes your IP address.
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">B.</span> Our web servers or affiliates who provide analytics and performance enhancement services collect IP addresses, operating system details, browsing details, device details and language settings. This information is aggregated to measure the number of visits, average time spent on the site, pages viewed and similar information. Alpha Care 247 uses this information to measure the site usage, improve content and to ensure safety and security, as well as enhance performance of our website.
              </p>
              <p className="text-gray-700">
                <span className="font-medium">C.</span> We may collect your Data automatically via Cookies, pixels and similar technologies in line with settings on your browser. For more information about Cookies, please see the section below, titled "Cookies".
              </p>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">OUR USE OF DATA</h2>
            <p className="text-gray-700 mb-4">
              Any or all the above Data may be required by us from time to time to provide information relating to Alpha Care 247 and to work on the experience when using our website. Specifically, Data may be used by us for the following reasons:
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
              <li>carry out our obligations arising from any contract entered into between you and us;</li>
              <li>provide products and/or services and communicate with you about products and/or services offered by us;</li>
              <li>enable Alpha Care 247 and Partners to offer their products and/or services and communicate with you about such products and/or services;</li>
              <li>processing, disclosing, transmitting, and/or sharing the data/information with Alphacare 247, and other third parties which have business or contractual dealings with us;</li>
              <li>provide you with offers (including for financial products and/or services), personalized services and recommendations and improve your experience on our website;</li>
              <li>operate, evaluate and improve our business, website;</li>
              <li>generate aggregated data to prepare insights to enable us to understand customer behavior, patterns and trends with a view to learning more about your preferences or other characteristics;</li>
              <li>provide privileges and benefits to you, marketing and promotional campaigns based on your profile;</li>
              <li>communicate with you (including to respond to your requests, questions, feedback, claims or disputes) and to customize and improve our services;</li>
              <li>enforce the terms of use of our website;</li>
              <li>protect against and prevent fraud, illegal activity, harm, financial loss and other legal or information security risks; and</li>
              <li>serve other purposes for which we provide specific notice at the time of collection, and as otherwise authorized or required by applicable law.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We treat these inferences as personal information (or sensitive personal information, as the case may be), where required under applicable law. Some of the above grounds for processing will overlap and there may be several grounds which justify our use of your personal information.
            </p>
            <p className="text-gray-700">
              Where required under applicable law, we will only use your personal information (including sensitive personal information) with your consent; as necessary to provide you with products and/or services; to comply with a legal obligation; or when there is a legitimate interest that necessitates the use.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">MINORS</h2>
            <p className="text-gray-700 mb-6">
              Our website do not offer products or services for use by minors. If you are under 18, you may use our website only with the involvement of a parent or guardian.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">SHARING OF DATA</h2>
            <p className="text-gray-700 mb-4">
              We may share your Data with/for:
            </p>
            <div className="mb-6">
              <p className="font-medium text-gray-800 mb-2">A. Partners:</p>
              <p className="text-gray-700 mb-4">We may make available to you services, products, or applications provided by Partners for use on or through our website. If you choose to use such service, customer information related to those transactions may be shared with such Partner. Such Partners will be required to respect the security of your Data and to treat it in accordance with this privacy policy and applicable law.</p>
              
              <p className="font-medium text-gray-800 mb-2">B. Service Providers:</p>
              <p className="text-gray-700 mb-4">We may share your Data with Service Providers. Examples include storing and analyzing Data, protecting and securing our systems, providing search results and links, providing customer service, credit analysis, processing your information for profiling, user analysis and payment processing.</p>
              <p className="text-gray-700 mb-4">These Service Providers will be required to only process Data in accordance with express instructions and as necessary to perform services for purposes set forth in this Privacy Notice. The Service Providers will also be required to safeguard the security and confidentiality of the Data they process by implementing appropriate technical and organizational security measures and confidentiality obligations binding employees accessing Data.</p>
              
              <p className="font-medium text-gray-800 mb-2">C. Protecting Alphacare 247:</p>
              <p className="text-gray-700 mb-4">We may release Data when we believe release is appropriate to comply with applicable law or legal process, enforce or apply the Terms of Use of our website and other agreements, protect Alpha Care 247 against harm or financial loss, when we believe disclosure is necessary to protect individuals' vital interests, or in connection with an investigation of suspected or actual fraudulent or illegal activity. This may include exchanging information with other companies and organizations for fraud protection, risk management and dispute resolution. This does not include selling or otherwise disclosing personal information of users for commercial purposes in violation of this Privacy Notice.</p>
              
              <p className="font-medium text-gray-800 mb-2">D. Business Transfers:</p>
              <p className="text-gray-700 mb-4">As we continue to develop our business, we might sell or buy subsidiaries or business units. Your Data (including in relation to loyalty programs) may be transferred as part of such transaction. Any Data that we receive from a third party pursuant to such transactions will be processed in accordance with this Privacy Notice and applicable law.</p>
              
              <p className="font-medium text-gray-800 mb-2">E. Third Parties:</p>
              <p className="text-gray-700">We may also share your Data with other third parties where: You request or authorize us to do so; We need to comply with applicable law or respond to valid legal process.</p>
            </div>
            <p className="text-gray-700 mb-6">
              We require these third parties by contract to only process sensitive personal data in accordance with our instructions and as necessary to perform services on our behalf or in compliance with applicable law. We also require them to safeguard the security and confidentiality of the sensitive personal data they process on our behalf by implementing appropriate confidentiality, technical and organizational security measures.
            </p>
            <p className="text-gray-700">
              Please note that Alpha Care 247 Pvt. Ltd. and Partners may have privacy practices that differ from those of Alpha Care 247. The use of your Data will be governed by their privacy statements when you provide Data on their websites.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">RETENTION OF DATA</h2>
            <p className="text-gray-700 mb-6">
              Alpha Care 247 retains Data for as long as necessary for the use of our products and/or services or to provide access to and use of our website or mobile application, or for other essential purposes such as complying with our legal obligations, resolving disputes, enforcing our agreements and as long as processing and retaining your Data is necessary and is permitted by applicable law. Because these needs can vary for different data types and purposes, actual retention periods can vary significantly.
            </p>
            <p className="text-gray-700">
              Even if we delete your Data, including on account of exercise of your right under Clause 10 below, it may persist on backup or archival media for audit, legal, tax or regulatory purposes.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">YOUR RIGHTS AND CHOICES</h2>
            <p className="text-gray-700 mb-4">
              When we process Data about you, we do so with your consent and/or as necessary to operate our business, meet our contractual and legal obligations, protect the security of our systems and our customers, or fulfil other legitimate interests of Alpha Care 247 as described in this Privacy Notice.
            </p>
            <p className="text-gray-700 mb-4">
              You have the following rights in relation to your sensitive personal information and you can exercise it by submitting a request as described in the "How to Contact Us" section below.
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
              <li>Right to Access, Review and Modify</li>
              <li>Right to Correction</li>
              <li>Right to Withdraw Consent</li>
            </ul>
            <p className="text-gray-700">
              It is important that the Data we hold about you is accurate and current. Please keep us informed if your personal information changes during the period for which we hold it.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">CHANGES TO THIS PRIVACY NOTICE</h2>
            <p className="text-gray-700 mb-6">
              Our business changes constantly and our Privacy Notice may also change. We may e-mail periodic reminders of our notices and conditions, unless you have instructed us not to, but you should check our website frequently to see recent changes. The updated version will be effective as soon as it is accessible. Any changes will be immediately posted on our website and you are deemed to have accepted the terms of the updated Privacy Notice on your first use of our website on first purchase of the services following the alterations. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">HOW TO CONTACT US</h2>
            <p className="text-gray-700 mb-6">
              To request to access, review, update, or withdraw your consent for your personal information or to otherwise reach us, please submit a request by e-mailing us at support@alphacare247.in. You may contact us for information on Service Providers, Partners with whom we may share your Data in compliance with this Privacy Notice and applicable law. We will respond to your request within 30 days.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">GRIEVANCE OFFICER</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-medium text-gray-800">Alphacare247 Private Limited</p>
              <p className="text-gray-700">Email: support@alphacare247.in</p>
              <p className="text-gray-700">Phone: +91-8527521464</p>
              <p className="text-gray-700">Address: B-14, Pandav Nagar, Delhi-110092</p>
            </div>

            <div className="border-t border-gray-200 mt-12 pt-8 text-center">
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Alphacare247. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;