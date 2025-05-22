import React from 'react';
import { Link } from 'react-router-dom';
import { useGameContext } from '../context/GameContext';
import { principles } from '../data/principles';
import { 
  Sunrise, 
  Heart, 
  Eye, 
  Activity, 
  Lightbulb,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const Journey = () => {
  const { isCompleted } = useGameContext();

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
        return <CheckCircle2 className={className} />;
    }
  };

  // Calculate completion status for each principle
  const getPrincipleCompletion = (principleId: number) => {
    const principle = principles.find(p => p.id === principleId);
    if (!principle) return { completed: 0, total: 0, percent: 0 };
    
    const total = principle.challenges.length;
    const completed = principle.challenges.filter(
      challenge => isCompleted(principleId, challenge.id)
    ).length;
    
    return {
      completed,
      total,
      percent: total > 0 ? (completed / total) * 100 : 0
    };
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Mindset Journey</h1>
          <p className="text-lg text-gray-600">
            Explore these principles that connect modern mindset techniques with timeless Sikh wisdom.
            Complete challenges to earn points and unlock badges.
          </p>
        </header>
        
        <div className="space-y-8">
          {principles.map((principle) => {
            const { completed, total, percent } = getPrincipleCompletion(principle.id);
            
            return (
              <Link 
                key={principle.id}
                to={`/principle/${principle.id}`}
                className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition group"
              >
                <div className="md:flex">
                  <div className={`bg-${principle.color}-100 p-6 md:w-1/4 flex items-center justify-center`}>
                    <div className={`bg-${principle.color}-200 p-4 rounded-full`}>
                      {getIcon(principle.iconName, `h-10 w-10 text-${principle.color}-600`)}
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{principle.title}</h2>
                        <p className="text-gray-600 mb-4">{principle.description}</p>
                      </div>
                      <div className="hidden md:block">
                        <span className="bg-white p-2 rounded-full group-hover:bg-indigo-50 transition">
                          <ChevronRight className="h-5 w-5 text-indigo-600" />
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{completed}/{total} challenges</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`bg-${principle.color}-500 h-2.5 rounded-full transition-all duration-500 ease-out`}
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {principle.challenges.map((challenge) => (
                        <div 
                          key={challenge.id}
                          className={`px-3 py-1 text-sm rounded-full ${
                            isCompleted(principle.id, challenge.id)
                              ? `bg-${principle.color}-100 text-${principle.color}-700`
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {challenge.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Journey;