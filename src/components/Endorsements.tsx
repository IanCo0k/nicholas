import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard: React.FC = () => {
  // Dummy testimonial data
  const testimonials = [
    {
      name: "Mike Potter",
      role: "Professor at Central Michigan University",
      text: "Working with Nick has been an absolute pleasure. He consistently delivers high-quality work and is always willing to go the extra mile."
    },
    {
      name: "Collin Romanick",
      role: "Blythefield Country Club Superintendent",
      text: "Nick's creativity and attention to detail are unmatched. He has a unique ability to bring ideas to life and exceed expectations."
    },
    {
      name: "Ian Cook",
      role: "Friend",
      text: "Nick is great friend, and he genuinely cares for others. He is always willing to lend a helping hand and is a great listener."
    }
  ];

  return (
    <div>
        <h1 className='text-4xl md:text-7xl text-gray-200 font-bold text-center my-8'>Endorsements</h1>
        <div className="grid p-8 grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-700 border-2 border-blue-200 rounded-lg p-6">
                <div className="flex items-start mb-4">
                    <FaQuoteLeft className="text-3xl text-gray-400 mr-2 mt-1" />
                    <p className="text-lg font-semibold">{testimonial.text}</p>
                </div>
                <div className="flex items-center">
                    <div className="mr-3">
                    <div className="text-xl font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default TestimonialCard;
