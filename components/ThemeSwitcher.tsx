import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeSwitcherProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, toggleTheme }) => {
  return (
        <button 
      onClick={toggleTheme} 
      className="text-sm font-bold text-text-secondary-light dark:text-text-secondary hover:text-accent-light dark:hover:text-accent transition-colors uppercase"
      aria-label="Change theme"
    >
      {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
    </button>
  );
};

export default ThemeSwitcher;
