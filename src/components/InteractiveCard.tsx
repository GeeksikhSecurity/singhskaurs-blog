import React, { useState } from 'react';

interface InteractiveCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actions?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
  }[];
  children?: React.ReactNode;
  expandable?: boolean;
  theme?: 'light' | 'dark' | 'primary';
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title,
  description,
  icon,
  actions,
  children,
  expandable = false,
  theme = 'light',
}) => {
  const [expanded, setExpanded] = useState(false);

  const themeClasses = {
    light: 'bg-white border border-gray-200 shadow-sm hover:shadow-md',
    dark: 'bg-gray-800 border border-gray-700 text-white shadow-sm hover:shadow-md',
    primary: 'bg-indigo-50 border border-indigo-100 shadow-sm hover:shadow-md',
  };

  const buttonVariants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'bg-transparent border border-current hover:bg-gray-50 text-indigo-600',
  };

  return (
    <div 
      className={`rounded-lg overflow-hidden transition-all duration-300 ${themeClasses[theme]}`}
    >
      <div className="p-5">
        <div className="flex items-start">
          {icon && <div className="mr-4 text-indigo-500">{icon}</div>}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-1">{title}</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
              {description}
            </p>
          </div>
          {expandable && (
            <button 
              onClick={() => setExpanded(!expanded)}
              className={`ml-2 p-1 rounded-full ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
              aria-label={expanded ? 'Collapse' : 'Expand'}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          )}
        </div>
        
        {(expanded || !expandable) && children && (
          <div className={`mt-4 ${
            theme === 'dark' ? 'border-t border-gray-700' : 'border-t border-gray-100'
          } pt-4`}>
            {children}
          </div>
        )}
        
        {actions && actions.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  buttonVariants[action.variant || 'primary']
                }`}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveCard;