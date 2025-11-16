import React from 'react';

const SkeletonCard = () => (
  // ... (SkeletonCard code is unchanged)
  <div className="bg-[#1a1a2e] rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-[#a7a9be]/10"></div>
    <div className="p-4">
      <div className="h-4 bg-[#a7a9be]/10 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-[#a7a9be]/10 rounded w-1/2"></div>
    </div>
  </div>
);

const Loader = () => {
  return (
    // UPDATED: From 'grid-cols-auto-fill' to explicit responsive columns
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default Loader;