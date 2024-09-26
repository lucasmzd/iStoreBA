import React from 'react';

const AboutView = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our online store, dedicated exclusively to Apple products in Buenos Aires, Argentina.
          We take pride in offering a unique experience for technology enthusiasts, providing access to the latest
          range of Apple products, from iPhones and MacBooks to original accessories.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our goal is to be the preferred destination for those seeking quality, design, and the performance that Apple guarantees.
          We are committed to offering 100% original products and exceptional customer service that reflects the high standards
          of the brand.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          With a team of specialists, we are here to guide you in choosing the ideal product that suits your needs.
          Whether you're looking for a new device or want to enhance your tech experience, we're ready to assist you.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for trusting us. We're here to make your Apple experience the best it can be!
        </p>
      </div>
    </div>
  );
}

export default AboutView;
