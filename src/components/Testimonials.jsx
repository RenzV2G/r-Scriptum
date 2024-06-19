import React, { useState } from 'react';
import { testimonials } from '../data';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials section">
      <h2 className="section__title Mg-top">Testimonials</h2>
      <div className="testimonials__slider">
        <button className="buttonT button prev" onClick={handlePrev}>
        </button>

        <div className="testimonials__container">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial__card ${index === currentSlide ? 'active' : ''}`}
              style={{
                transform: `rotateY(${index === currentSlide ? '0' : '-60'}deg) translateX(${index === currentSlide ? '0' : '100'}%)`,
              }}
            >
              <img src={testimonial.profilePic} alt={testimonial.name} className="testimonial__img" />
              <div className="testimonial__stars">
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className="testimonial__comment">{testimonial.comment}</p>
              <h3 className="testimonial__name">{testimonial.name}</h3>
            </div>
          ))}
        </div>

        <button className="buttonT button next" onClick={handleNext}>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
