import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight,
  Quote,
  CheckCircle,
  Circle,
  Sunrise,
  Heart,
  Eye,
  Activity,
  Lightbulb
} from 'lucide-react';
import { useGameContext } from '../context/GameContext';
import { principles } from '../data/principles';

const Principle = () => {
  const { id } = useParams<{ id: string }>();
  const principleId = parseInt(id || '1', 10);
  const principle = principles.find(p => p.id === principleId);
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null);
  const [reflection, setReflection] = useState('');
  
  const { 
    completeChallenge, 
    isCompleted, 
    saveReflection,
    getReflection
  } = useGameContext();

  if (!principle) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Principle not found</h1>
        <Link to="/journey" className="text-indigo-600 mt-4 inline-block">
          Return to Journey
        </Link>
      </div>
    );
  }

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'sunrise':
        return <Sunrise className={className} />;
      case 'heart':
        return <Heart className={className} />;
      case 'eye':
        return <Eye className={className} />;
      case 'activity':
        return <Activity className={className} />;
      case 'lightbulb':
        return <Lightbulb className={className} />;
      default:
        return <CheckCircle className={className} />;
    }
  };

  const handleChallengeClick = (challengeId: number) => {
    setActiveChallenge(activeChallenge === challengeId ? null : challengeId);
    // Load saved reflection if any
    if (activeChallenge !== challengeId) {
      const savedReflection = getReflection(principleId, challengeId);
      setReflection(savedReflection || '');
    }
  };

  const handleCompleteChallenge = (challengeId: number) => {
    completeChallenge(principleId, challengeId);
  };

  const handleSaveReflection = (challengeId: number) => {
    if (reflection.trim()) {
      saveReflection(principleId, challengeId, reflection);
      // After saving reflection, mark challenge as completed
      completeChallenge(principleId, challengeId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <Link 
          to="/journey" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Journey
        </Link>

        {/* Principle Header */}
        <div className={`bg-${principle.color}-100 rounded-xl p-8 mb-8`}>
          <div className="flex items-center mb-4">
            <div className={`bg-${principle.color}-200 p-3 rounded-full mr-4`}>
              {getIcon(principle.iconName, `h-8 w-8 text-${principle.color}-600`)}
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{principle.title}</h1>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">{principle.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <Quote className="h-5 w-5 text-indigo-500 mr-2" />
                <h3 className="text-lg font-semibold">Tony Robbins Says:</h3>
              </div>
              <p className="text-gray-700 italic">"{principle.tonyQuote}"</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <Quote className="h-5 w-5 text-amber-500 mr-2" />
                <h3 className="text-lg font-semibold">Sikh Wisdom:</h3>
              </div>
              <p className="text-gray-700 italic">"{principle.sikhQuote}"</p>
            </div>
          </div>
        </div>

        {/* Sikh Teaching */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">The Sikh Connection</h2>
          <p className="text-gray-700">{principle.sikhTeaching}</p>
        </div>
        
        {/* Challenges Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Challenges</h2>
            <p className="text-gray-600">
              Complete these challenges to earn points and deepen your understanding
            </p>
          </div>
          
          <div className="divide-y divide-gray-200">
            {principle.challenges.map((challenge) => {
              const completed = isCompleted(principleId, challenge.id);
              const isActive = activeChallenge === challenge.id;
              
              return (
                <div key={challenge.id} className="transition-all duration-300">
                  <div 
                    className={`p-6 cursor-pointer hover:bg-gray-50 ${isActive ? 'bg-gray-50' : ''}`}
                    onClick={() => handleChallengeClick(challenge.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {completed ? (
                          <CheckCircle className={`h-6 w-6 text-${principle.color}-500 mr-3`} />
                        ) : (
                          <Circle className="h-6 w-6 text-gray-300 mr-3" />
                        )}
                        <div>
                          <h3 className="font-medium text-gray-900">{challenge.title}</h3>
                          <p className="text-gray-600">{challenge.description}</p>
                        </div>
                      </div>
                      <ChevronRight 
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          isActive ? 'rotate-90' : ''
                        }`} 
                      />
                    </div>
                  </div>
                  
                  {isActive && (
                    <div className="p-6 bg-gray-50 border-t border-gray-200 animate-fadeIn">
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Sikh Connection:</h4>
                        <p className="text-gray-700">{challenge.sikhConnection}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Your Challenge:</h4>
                        <p className="text-gray-700">{challenge.activity}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Reflection:</h4>
                        <p className="text-gray-700 mb-3">{challenge.reflection}</p>
                        
                        <textarea
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                          rows={4}
                          placeholder="Write your reflection here..."
                          value={reflection}
                          onChange={(e) => setReflection(e.target.value)}
                        ></textarea>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        <button
                          className={`px-4 py-2 rounded-md ${
                            completed 
                              ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                              : `bg-${principle.color}-600 text-white hover:bg-${principle.color}-700`
                          }`}
                          onClick={() => handleCompleteChallenge(challenge.id)}
                          disabled={completed}
                        >
                          {completed ? 'Completed' : 'Mark as Complete'}
                        </button>
                        
                        {!completed && (
                          <button
                            className={`px-4 py-2 rounded-md border border-${principle.color}-600 text-${principle.color}-600 hover:bg-${principle.color}-50`}
                            onClick={() => handleSaveReflection(challenge.id)}
                            disabled={!reflection.trim()}
                          >
                            Save Reflection & Complete
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Navigation to Next Principle */}
        {principleId < principles.length && (
          <Link 
            to={`/principle/${principleId + 1}`}
            className="inline-flex items-center justify-center w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Next Principle: {principles.find(p => p.id === principleId + 1)?.title}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Principle;