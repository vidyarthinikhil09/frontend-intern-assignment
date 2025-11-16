import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Base button styles
  const buttonStyles = "px-6 py-2 rounded-lg text-[#fffffe] font-semibold transition-all";
  const activeStyles = "bg-[#ff8906] hover:bg-[#ff8906]/80"; // Using highlight color
  const disabledStyles = "bg-gray-600 cursor-not-allowed opacity-50";

  return (
    <div className="flex justify-between items-center mt-8 py-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`${buttonStyles} ${currentPage > 1 ? activeStyles : disabledStyles}`}
      >
        Previous
      </button>

      <span className="text-[#a7a9be] font-medium">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`${buttonStyles} ${currentPage < totalPages ? activeStyles : disabledStyles}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;