import React from 'react';
import VisualElement from './VisualElement';
import AnimatedSection from './AnimatedSection';

interface BlogPostProps {
  title: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  content: string;
  tags?: string[];
  coverImage?: string;
  readTime?: number;
  visualElements?: {
    type: 'quote' | 'image' | 'chart' | 'timeline';
    content: string;
    caption?: string;
    position: number; // Position in the content where this should appear
  }[];
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  author,
  date,
  content,
  tags = [],
  coverImage,
  readTime = 5,
  visualElements = [],
}) => {
  // Split content into paragraphs
  const paragraphs = content.split('\\n\\n');
  
  // Insert visual elements at specified positions
  const contentWithVisuals = paragraphs.reduce<React.ReactNode[]>((acc, paragraph, index) => {
    // Add the paragraph
    acc.push(
      <p key={`p-${index}`} className="mb-6 leading-relaxed">
        {paragraph}
      </p>
    );
    
    // Check if any visual elements should be inserted after this paragraph
    const visuals = visualElements.filter(v => v.position === index);
    visuals.forEach((visual, vIndex) => {
      acc.push(
        <AnimatedSection 
          key={`visual-${index}-${vIndex}`} 
          animation="fade-in"
          delay={200}
        >
          <VisualElement
            type={visual.type}
            content={visual.content}
            caption={visual.caption}
            theme="light"
            size="medium"
          />
        </AnimatedSection>
      );
    });
    
    return acc;
  }, []);

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {coverImage && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={coverImage} 
            alt={title} 
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      
      <AnimatedSection animation="slide-up" delay={100}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        
        <div className="flex items-center mb-6">
          <div className="flex items-center">
            {author.avatar ? (
              <img 
                src={author.avatar} 
                alt={author.name} 
                className="w-10 h-10 rounded-full mr-3"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                <span className="text-indigo-700 font-medium">
                  {author.name.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <p className="font-medium">{author.name}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{formattedDate}</span>
                <span className="mx-2">•</span>
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </AnimatedSection>
      
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {contentWithVisuals}
      </div>
    </article>
  );
};

export default BlogPost;