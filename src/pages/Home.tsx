import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Sparkles, ArrowRight } from 'lucide-react';
import { useGameContext } from '../context/GameContext';
import { principles } from '../data/principles';

const Home = () => {
  const { progress, completedCount, totalChallenges, badges } = useGameContext();

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Modern <span className="text-indigo-600">Sikh</span> Wisdom
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your life through timeless Sikh principles and modern mindset techniques. Start your journey of growth and wisdom today.
        </p>
        <div className="mt-8">
          <Link
            to="/journey"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 inline-flex items-center group"
          >
            Begin Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="mb-12 bg-white rounded-2xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Journey</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-indigo-50 rounded-xl p-5 flex items-center">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <Award className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Progress</p>
              <p className="text-xl font-semibold text-gray-800">{progress.toFixed(0)}% Complete</p>
            </div>
          </div>
          
          <div className="bg-amber-50 rounded-xl p-5 flex items-center">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <Sparkles className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Challenges</p>
              <p className="text-xl font-semibold text-gray-800">{completedCount} of {totalChallenges} Complete</p>
            </div>
          </div>
          
          <div className="bg-emerald-50 rounded-xl p-5 flex items-center">
            <div className="bg-emerald-100 p-3 rounded-full mr-4">
              <Award className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Badges</p>
              <p className="text-xl font-semibold text-gray-800">{badges.length} Earned</p>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div 
            className="bg-indigo-600 h-4 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Complete challenges to earn points and unlock badges
        </p>
        
        <Link
          to="/profile"
          className="text-indigo-600 font-medium inline-flex items-center hover:text-indigo-800 transition"
        >
          View your profile
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </section>

      {/* Featured Principles */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Mindset Principles</h2>
          <Link
            to="/journey"
            className="text-indigo-600 font-medium inline-flex items-center hover:text-indigo-800 transition"
          >
            View all
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.slice(0, 3).map((principle) => (
            <Link
              key={principle.id}
              to={`/principle/${principle.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition group"
            >
              <div className={`bg-${principle.color}-100 p-6`}>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{principle.title}</h3>
                <p className="text-gray-600 mb-4">{principle.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-${principle.color}-600 font-medium`}>
                    3 Challenges
                  </span>
                  <span className="bg-white p-2 rounded-full group-hover:bg-indigo-50 transition">
                    <ChevronRight className="h-5 w-5 text-indigo-600" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white p-8 md:p-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-indigo-100 mb-8">
            Connect ancient Sikh wisdom with modern mindset techniques. Complete challenges, earn badges, and develop habits that will serve you for a lifetime.
          </p>
          <Link
            to="/journey"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition inline-flex items-center"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;