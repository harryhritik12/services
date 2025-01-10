import React, { useState } from 'react';
import developmentImage from './assets/Development.jpg';
import financeImage from './assets/finance.jpg';
import civilImage from './assets/construction.jpg';
import webDevImage from './assets/webDevelopment.jpg';
import softwareDesignImage from './assets/softwareDesign.jpg';
import appDevImage from './assets/applicationdevelopment.png';
import homeLoanImage from './assets/homeloan.jpg';
import personalLoanImage from './assets/personalloan.jpg';
import carLoanImage from './assets/carloan.jpg';
import constructionImage from './assets/constructionServices.jpg';
import buttonLoanImage from './assets/busisnessLoan.jpg';
import creditCardImage from './assets/creditcard.jpg';

const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState(null);
  
    const services = [
      {
        id: 'development',
        title: 'Development Services',
        imageUrl: developmentImage,
        items: [
          { title: 'Web Development', imageUrl: webDevImage },
          { title: 'Software Design', imageUrl: softwareDesignImage },
          { title: 'Application Development', imageUrl: appDevImage },
        ],
      },
      {
        id: 'finance',
        title: 'Finance',
        imageUrl: financeImage,
        items: [
          { title: 'Home Loan', imageUrl: homeLoanImage },
          { title: 'Personal Loan', imageUrl: personalLoanImage },
          { title: 'Car Loan', imageUrl: carLoanImage },
          { title: 'Business Loan', imageUrl: buttonLoanImage },
          { title: 'Credit Card Services', imageUrl: creditCardImage },
        ],
      },
      {
        id: 'civil',
        title: 'Civil',
        imageUrl: civilImage,
        items: [
          { title: 'Construction Work', imageUrl: constructionImage },
        ],
      },
    ];
  
    const handleServiceClick = (service) => {
      setSelectedService(service);
    };
  
    const goBack = () => {
      setSelectedService(null);
    };
  
    return (
      <div className="p-4 sm:p-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 min-h-screen">
        {!selectedService ? (
          <>
            {/* Hero Section */}
            <section className="text-center py-10 sm:py-20 bg-gray-800 text-white">
              <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6">Welcome to Our Services</h1>
              <p className="text-base sm:text-xl max-w-lg sm:max-w-2xl mx-auto mb-6 sm:mb-8">
                Discover a wide range of professional services tailored to meet your needs. Explore, choose, and connect with us.
              </p>
            </section>
  
            {/* Services Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(service)}
                  className="bg-white shadow-xl rounded-lg p-4 sm:p-6 transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-40 sm:h-52 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-blue-600 border-b-2 border-blue-300">
                    {service.title}
                  </h2>
                </div>
              ))}
            </section>
          </>
        ) : (
          <>
            {/* Sub-Service Section */}
            <div className="p-4 sm:p-6 bg-white shadow-lg rounded-lg mb-6">
              <h2 className="text-2xl sm:text-4xl font-bold text-blue-600 mb-4">{selectedService.title}</h2>
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {selectedService.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-xl rounded-lg p-4 sm:p-6 transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-40 sm:h-52 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-base sm:text-xl font-semibold text-gray-800">{item.title}</h3>
                  </div>
                ))}
              </section>
              <button
                onClick={goBack}
                className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
              >
                Go Back
              </button>
            </div>
          </>
        )}
  
        {/* Footer Section */}
        <footer className="text-center py-4 sm:py-6 bg-gray-800 text-white mt-10">
          <p className="text-xs sm:text-sm">Crafted with care for your needs. Connect with us for more information!</p>
        </footer>
      </div>
    );
  };
  
  export default ServicesPage;