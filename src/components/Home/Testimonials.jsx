import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Working with SCF Strategies transformed our approach to supply chain finance. Their team brought not only deep industry knowledge but also a hands-on, practical approach to implementation. Thanks to their guidance, we optimized our SCF program and improved cash flow significantly.",
      author: "Global Retail Corporation",
      position: "CFO",
      rating: 5
    },
    {
      text: "SCF Strategies went above and beyond in helping us implement a reverse factoring program that delivered real, measurable results. Their expertise in supplier onboarding and working capital analysis was instrumental in the success of our initiative.",
      author: "Leading Manufacturing Firm",
      position: "Head of Procurement",
      rating: 5
    },
    {
      text: "We partnered with SCF Strategies for an audit of our existing SCF platform, and the insights they provided were invaluable. They not only identified gaps but gave us clear, actionable recommendations to improve performance. Their team's professionalism and dedication were outstanding.",
      author: "Fintech Company",
      position: "CEO",
      rating: 5
    },
    {
      text: "SCF Strategies made a complex process feel seamless. From evaluating potential partners to managing our go-to-market strategy, they were with us every step of the way. The team's industry experience was clearly evident, and we've seen incredible improvements in both our supplier relationships and cash flow.",
      author: "International Bank",
      position: "Treasurer",
      rating: 5
    },
    {
      text: "SCF Strategies helped us launch our Supply Chain Finance program with precision and expertise. Their ability to align cross-functional teams and navigate the challenges of accounting treatment was a game-changer for us. They're not just consultants – they're true partners in success.",
      author: "Global Logistics Company",
      position: "VP of Finance",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext]);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden" style={{ backgroundImage: "url('/images/LandingPage/fintech.jpg')" }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-75" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="relative text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What our clients say</h2>
          <svg className="w-16 h-2 mx-auto" viewBox="0 0 60 8">
            <rect width="60" height="8" fill="#2563eb" rx="4" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large Quote SVG */}
          <Quote className="absolute -top-6 -left-8 w-16 h-16 text-blue-100" />
          
          {/* Testimonial Card */}
          <div className="relative bg-primary rounded-2xl shadow-xl p-8 md:p-12 min-h-[300px]">
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              {/* Stars */}
           
              
              {/* Testimonial Text */}
              <p className="text-gray-700 text-center  md:text-lg  text-base sm:text-sm mb-6">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
              
              {/* Author */}
              <div className="text-center">
                <p className="text-title font-bold ">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-600 text-lg ">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full">
            <div className="flex justify-between mx-auto  px-4">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
              >
                <ChevronLeft className="w-6 h-6 text-cyan-600" />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
              >
                <ChevronRight className="w-6 h-6 text-cyan-600" />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-6' : 'bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;