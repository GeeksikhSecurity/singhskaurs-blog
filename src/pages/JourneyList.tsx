import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Tag } from 'lucide-react';
import { getAllJourneys } from '../data/journeys';

const JourneyList = () => {
  const journeys = getAllJourneys();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Mindset Journeys
          </h1>
          <p className="text-lg text-gray-600">
            Explore our collection of interactive guides connecting spiritual wisdom with modern personal development
          </p>
        </header>

        <div className="space-y-6">
          {journeys.map((journey) => (
            <Link
              key={journey.id}
              to={`/journey/${journey.slug}`}
              className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {journey.title}
                    </h2>
                    <p className="text-gray-600">{journey.description}</p>
                  </div>
                  <span className="bg-white p-2 rounded-full group-hover:bg-indigo-50 transition">
                    <ChevronRight className="h-5 w-5 text-indigo-600" />
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(journey.publishedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {journey.category}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {journey.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JourneyList;