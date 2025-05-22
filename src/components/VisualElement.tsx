import React from 'react';

interface VisualElementProps {
  type: 'quote' | 'image' | 'chart' | 'timeline';
  content: string;
  caption?: string;
  theme?: 'light' | 'dark' | 'primary';
  size?: 'small' | 'medium' | 'large';
}

const VisualElement: React.FC<VisualElementProps> = ({
  type,
  content,
  caption,
  theme = 'light',
  size = 'medium',
}) => {
  const baseClasses = `rounded-lg overflow-hidden mb-6 ${
    theme === 'light' ? 'bg-gray-50 text-gray-800' : 
    theme === 'dark' ? 'bg-gray-800 text-white' : 
    'bg-indigo-50 text-indigo-900'
  }`;
  
  const sizeClasses = {
    small: 'p-3 text-sm',
    medium: 'p-5 text-base',
    large: 'p-8 text-lg',
  };
  
  const renderContent = () => {
    switch (type) {
      case 'quote':
        return (
          <div className={`${baseClasses} ${sizeClasses[size]} border-l-4 border-indigo-500`}>
            <blockquote className="italic">
              "{content}"
            </blockquote>
            {caption && <p className="mt-2 text-right font-medium">— {caption}</p>}
          </div>
        );
      
      case 'image':
        return (
          <figure className={`${baseClasses} p-0`}>
            <img 
              src={content} 
              alt={caption || 'Visual element'} 
              className="w-full h-auto object-cover"
            />
            {caption && (
              <figcaption className={`p-3 text-sm ${
                theme === 'light' ? 'bg-gray-100' : 
                theme === 'dark' ? 'bg-gray-700' : 
                'bg-indigo-100'
              }`}>
                {caption}
              </figcaption>
            )}
          </figure>
        );
      
      case 'chart':
        // This would integrate with a chart library
        return (
          <div className={`${baseClasses} ${sizeClasses[size]}`}>
            <div className="chart-container" dangerouslySetInnerHTML={{ __html: content }} />
            {caption && <p className="mt-2 text-sm text-center">{caption}</p>}
          </div>
        );
      
      case 'timeline':
        try {
          const events = JSON.parse(content);
          return (
            <div className={`${baseClasses} ${sizeClasses[size]}`}>
              <div className="relative">
                {events.map((event: any, index: number) => (
                  <div key={index} className="mb-8 flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className={`rounded-full h-4 w-4 ${
                        theme === 'light' ? 'bg-indigo-500' : 
                        theme === 'dark' ? 'bg-indigo-400' : 
                        'bg-indigo-600'
                      }`} />
                      {index < events.length - 1 && (
                        <div className={`h-full w-0.5 ${
                          theme === 'light' ? 'bg-gray-300' : 
                          theme === 'dark' ? 'bg-gray-600' : 
                          'bg-indigo-200'
                        }`} />
                      )}
                    </div>
                    <div>
                      <p className="font-bold">{event.date}</p>
                      <p>{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {caption && <p className="mt-2 text-sm">{caption}</p>}
            </div>
          );
        } catch (e) {
          return <div className="text-red-500">Invalid timeline data</div>;
        }
      
      default:
        return <div>Unsupported visual element type</div>;
    }
  };

  return renderContent();
};

export default VisualElement;