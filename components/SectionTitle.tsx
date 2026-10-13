import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle }) => {
  return (
    <div className="text-center mb-14 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-5">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;