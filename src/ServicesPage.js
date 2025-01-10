import React from 'react';
import webDevImage from './assets/webDevelopment.jpg';
import softwareDesignImage from './assets/softwareDesign.jpg';
import appDevImage from './assets/applicationdevelopment.png';
import homeLoanImage from './assets/homeloan.jpg';
import personalLoanImage from './assets/personalloan.jpg';
import carLoanImage from './assets/carloan.jpg';
import buttonLoanImage from './assets/busisnessLoan.jpg';
import creditCardImage from './assets/creditcard.jpg';
import constructionImage from './assets/constructionServices.jpg';

const ServicesPage = () => {
  const services = [
    {
      title: 'Development Services',
      items: [
        { title: 'Web Development', imageUrl: webDevImage },
        { title: 'Software Design', imageUrl: softwareDesignImage },
        { title: 'Application Development', imageUrl: appDevImage },
      ],
    },
    {
      title: 'Finance',
      items: [
        { title: 'Home Loan', imageUrl: homeLoanImage },
        { title: 'Personal Loan', imageUrl: personalLoanImage },
        { title: 'Car Loan', imageUrl: carLoanImage },
        { title: 'Business Loan', imageUrl: buttonLoanImage },
        { title: 'Credit Card Services', imageUrl: creditCardImage },
      ],
    },
    {
      title: 'Civil',
      items: [
        { title: 'Construction Work', imageUrl: constructionImage },
      ],
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-10 sm:py-20 bg-gray-800 text-white">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6">Welcome to Our Services</h1>
        <p className="text-base sm:text-xl max-w-lg sm:max-w-2xl mx-auto mb-6 sm:mb-8">
          Discover a wide range of professional services tailored to meet your needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="space-y-8 sm:space-y-10 px-2 sm:px-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-xl rounded-lg p-4 sm:p-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-600 mb-4">{service.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {service.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md rounded-lg p-4 sm:p-6 overflow-hidden"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-40 sm:h-52 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-base sm:text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="text-center py-4 sm:py-6 bg-gray-800 text-white mt-10">
        <p className="text-xs sm:text-sm">Crafted with care for your needs. Connect with us for more information!</p>
      </footer>
    </div>
  );
};

export default ServicesPage;
