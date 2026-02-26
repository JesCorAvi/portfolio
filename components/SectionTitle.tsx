import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white relative pb-4">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-black/20 dark:bg-white/20 rounded-full"></span>
    </h2>
  );
};

export default SectionTitle;