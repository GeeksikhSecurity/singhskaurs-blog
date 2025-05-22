import React from 'react';
import BlogPost from '../components/BlogPost';
import FearLevelsStack from '../components/FearLevelsStack';
import fearLevels from '../data/fearLevels';
import AnimatedSection from '../components/AnimatedSection';
import ShareButtons from '../components/ShareButtons';
import VisualElement from '../components/VisualElement';

const FearLevelsBlogPost: React.FC = () => {
  const blogContent = `
Moving beyond fear is one of the most important journeys we can take in life. Fear is a natural emotion, but when it controls our decisions and limits our potential, it becomes a problem.

Understanding the different levels of consciousness around fear can help us recognize where we are and where we want to go. Each level represents a different way of experiencing and responding to fear.

Sikh teachings offer profound wisdom on overcoming fear. The Mool Mantar begins with "Ik Onkar" - One Universal Creator - and includes "Nirbhau" (without fear) as a divine quality. This reminds us that connecting with the divine helps us transcend our fears.

Guru Nanak Dev Ji taught that fear often comes from attachment to worldly things and ego (haumai). By practicing naam simran (meditation on God's name) and following the path of truthful living, we can gradually free ourselves from the grip of fear.

The journey isn't always linear, and we might find ourselves at different levels depending on the situation. The key is awareness - recognizing where we are and making conscious choices about how we want to respond.

By understanding these levels and applying Sikh principles, we can begin to shift our relationship with fear. Instead of being controlled by it, we can learn to acknowledge it, work with it, and eventually move beyond it to live more authentic and fulfilling lives.

Remember, this is a journey, not a destination. Be patient with yourself as you navigate these levels, and celebrate your progress along the way.
  `;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <BlogPost
        title="Moving Beyond Fear: Levels of Consciousness"
        author={{
          name: "Jas Gur",
          avatar: "https://i.pravatar.cc/150?img=32"
        }}
        date="2022-09-18"
        content={blogContent}
        tags={["Sikh Wisdom", "Mindset", "Personal Growth", "Fear", "Consciousness"]}
        readTime={5}
        visualElements={[
          {
            type: 'quote',
            content: "Those who have the Fear of God, and Love of God in their hearts, they shine bright.",
            caption: "Guru Nanak Dev Ji",
            position: 2
          }
        ]}
      />
      
      <AnimatedSection animation="slide-up" className="my-12 px-4">
        <FearLevelsStack levels={fearLevels} />
      </AnimatedSection>
      
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <h3 className="text-xl font-bold mb-4">How to Apply This Wisdom</h3>
        <p className="mb-6">
          Take a moment to reflect on different areas of your life. Which level resonates with how you're currently 
          responding to challenges? Remember, there's no judgment here - just awareness. Once you identify where you are, 
          you can begin taking small steps toward the next level by applying the Sikh principles mentioned.
        </p>
        
        <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg mb-8 border-l-4 border-amber-500">
          <h4 className="font-bold mb-2">Daily Practice</h4>
          <p>
            Next time you feel fear arising, pause and remember "Nirbhau" (without fear) from the Mool Mantar. 
            Take a deep breath and ask yourself: "Which level am I operating from right now?" 
            Then consider: "How might I respond from the next level up, guided by Sikh teachings?"
          </p>
        </div>
        
        <ShareButtons 
          url="/blog/moving-beyond-fear-levels-of-consciousness" 
          title="Moving Beyond Fear: Levels of Consciousness" 
          description="Discover the 7 levels of consciousness with Sikh wisdom to help you move beyond fear and live more authentically."
          className="mt-8"
        />
      </div>
    </div>
  );
};

export default FearLevelsBlogPost;