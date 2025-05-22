import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle, 
  Sunrise, 
  Heart, 
  Eye, 
  Activity, 
  Lightbulb, 
  ArrowUpRight 
} from 'lucide-react';
import { useGameContext } from '../context/GameContext';
import { principles } from '../data/principles';

const Profile = () => {
  const { 
    points, 
    completedCount, 
    totalChallenges, 
    progress, 
    badges,
    isCompleted 
  } = useGameContext();

  // Badge descriptions
  const badgeInfo = {
    Beginner: {
      description: "Completed your first challenge and earned 50 points",
      color: "blue"
    },
    Explorer: {
      description: "Earned 100 points by exploring mindset principles",
      color: "purple"
    },
    Seeker: {
      description: "Earned 250 points through consistent practice",
      color: "green"
    },
    Warrior: {
      description: "Mastery level with 500 points earned",
      color: "red"
    },
    Enlightened: {
      description: "Completed 100% of all challenges",
      color: "yellow"
    }
  };

  // All possible badges
  const allBadges = [
    "Beginner",
    "Explorer",
    "Seeker",
    "Warrior",
    "Enlightened"
  ];

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Profile</h1>
          <p className="text-lg text-gray-600">
            Track your progress, view earned badges, and see your journey insights
          </p>
        </header>
        
        {/* Stats Overview */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Progress</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-indigo-50 rounded-xl p-5 flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-3">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <p className="text-3xl font-bold text-indigo-600 mb-1">{points}</p>
              <p className="text-gray-600">Total Points</p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-5 flex flex-col items-center text-center">
              <div className="bg-amber-100 p-3 rounded-full mb-3">
                <CheckCircle className="h-6 w-6 text-amber-600" />
              </div>
              <p className="text-3xl font-bold text-amber-600 mb-1">{completedCount}</p>
              <p className="text-gray-600">Challenges Completed</p>
            </div>
            
            <div className="bg-emerald-50 rounded-xl p-5 flex flex-col items-center text-center">
              <div className="bg-emerald-100 p-3 rounded-full mb-3">
                <Award className="h-6 w-6 text-emerald-600" />
              </div>
              <p className="text-3xl font-bold text-emerald-600 mb-1">{badges.length}</p>
              <p className="text-gray-600">Badges Earned</p>
            </div>
          </div>
          
          {/* Overall progress */}
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Overall Progress</span>
              <span>{progress.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-indigo-600 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </section>
        
        {/* Badges */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Badges</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {allBadges.map((badge) => {
              const earned = badges.includes(badge);
              const info = badgeInfo[badge as keyof typeof badgeInfo];
              
              return (
                <div 
                  key={badge}
                  className={`rounded-lg p-4 text-center ${
                    earned ? `bg-${info.color}-50 border border-${info.color}-200` : 'bg-gray-100 opacity-60'
                  }`}
                >
                  <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-3 ${
                    earned ? `bg-${info.color}-100` : 'bg-gray-200'
                  }`}>
                    <Award className={`h-8 w-8 ${
                      earned ? `text-${info.color}-600` : 'text-gray-400'
                    }`} />
                  </div>
                  <h3 className={`font-bold ${earned ? 'text-gray-800' : 'text-gray-500'}`}>
                    {badge}
                  </h3>
                  <p className="text-sm mt-1 text-gray-600">
                    {earned ? info.description : 'Not yet earned'}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        
        {/* Principle Completion */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Principle Progress</h2>
          
          <div className="space-y-6">
            {principles.map((principle) => {
              // Calculate completion for this principle
              const totalChallenges = principle.challenges.length;
              const completedChallenges = principle.challenges.filter(
                challenge => isCompleted(principle.id, challenge.id)
              ).length;
              const principleProgress = totalChallenges > 0 
                ? (completedChallenges / totalChallenges) * 100 
                : 0;
              
              return (
                <div key={principle.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                    <div className="flex items-center">
                      <div className={`bg-${principle.color}-100 p-2 rounded-full mr-3`}>
                        {getIcon(principle.iconName, `h-5 w-5 text-${principle.color}-600`)}
                      </div>
                      <h3 className="font-semibold text-gray-800">{principle.title}</h3>
                    </div>
                    
                    <Link 
                      to={`/principle/${principle.id}`}
                      className="text-indigo-600 text-sm font-medium hover:text-indigo-800 inline-flex items-center"
                    >
                      View Principle
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                  
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-600">
                      {completedChallenges} of {totalChallenges} challenges
                    </span>
                    <span className="font-medium">
                      {principleProgress.toFixed(0)}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`bg-${principle.color}-500 h-2.5 rounded-full transition-all duration-500 ease-out`}
                      style={{ width: `${principleProgress}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="text-center">
          <Link
            to="/journey"
            className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Continue Your Journey
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Profile;