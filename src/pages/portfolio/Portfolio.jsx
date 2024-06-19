import React, { useState, useRef, useEffect } from 'react';
import './portfolio.scss';
import { portfolio } from '../../data';
import PortfolioItem from '../../components/PortfolioItem';
import Testimonials from '../../components/Testimonials';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';

const Portfolio = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  const [transitioning, setTransitioning] = useState(false); // New state for transitioning
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = portfolio.slice(startIndex, endIndex);
  const touchStartXRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowGuide(true);
        setTimeout(() => {
          setShowGuide(false);
        }, 5000); // Hide guide after 5 seconds
      } else {
        setShowGuide(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (endIndex < portfolio.length) {
      setTransitioning(true); // Start transitioning
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setTransitioning(false); // End transitioning after page change
      }, 300); // Adjust timing as per your transition duration
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setTransitioning(true); // Start transitioning
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setTransitioning(false); // End transitioning after page change
      }, 300); // Adjust timing as per your transition duration
    }
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchDeltaX = touchStartXRef.current - touchEndX;

      if (touchDeltaX > 50) {
        handleNext();
      } else if (touchDeltaX < -50) {
        handlePrevious();
      }

      touchStartXRef.current = null;
    }
  };

  return (
    <section className="portfolio section">
      <h2 className="section__title Mg-top">
        My<span>Portfolio</span>
      </h2>

      {showGuide && (
        <div className="portfolio__hint fade-in-out">
          <p>Swipe or drag to view more items</p>
        </div>
      )}

      <div
        className={`portfolio__container container grid ${transitioning ? 'is-transitioning' : ''} ${showGuide ? 'show-guide' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {currentItems.map((item) => (
          <PortfolioItem key={item.id} {...item} />
        ))}
        
        
      </div>

      <div className="portfolio__navigation">
        <button
          className="button portfolio__button"
          onClick={handlePrevious}
          disabled={startIndex === 0 || transitioning}
        >
          <FaArrowLeftLong className="icon" />
        </button>
        <button
          className="button portfolio__button"
          onClick={handleNext}
          disabled={endIndex >= portfolio.length || transitioning}
        >
          <FaArrowRightLong className="icon" />
        </button>
      </div>

      <div className="separator2"></div>

      <Testimonials />
    </section>
  );
};

export default Portfolio;
