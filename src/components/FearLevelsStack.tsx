import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import LevelProgressBar from './LevelProgressBar';

interface LevelData {
  id: number;
  title: string;
  description: string;
  sikhPrinciple: string;
  color: string;
  icon?: string;
}

interface FearLevelsStackProps {
  levels: LevelData[];
  className?: string;
}

const LevelCard: React.FC<{
  level: LevelData;
  isExpanded: boolean;
  toggleExpand: () => void;
}> = ({ level, isExpanded, toggleExpand }) => {
  return (
    <div 
      className={`mb-3 rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md ${isExpanded ? 'shadow-md' : ''}`}
      style={{ borderLeft: `4px solid ${level.color}` }}
    >
      <div 
        className="flex items-center justify-between p-4 cursor-pointer bg-white dark:bg-gray-800"
        onClick={toggleExpand}
      >
        <div className="flex items-center">
          <span className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white font-bold" style={{ backgroundColor: level.color }}>
            {level.id}
          </span>
          <h3 className="font-medium text-lg">{level.title}</h3>
        </div>
        <div className="text-gray-500">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 bg-gray-50 dark:bg-gray-700 animate-fade-in">
          <p className="text-gray-700 dark:text-gray-300 mb-4">{level.description}</p>
          <div className="border-l-2 border-amber-500 pl-3 py-1 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-400">
            <p className="text-gray-700 dark:text-gray-300 italic text-sm">
              <span className="font-medium text-amber-700 dark:text-amber-300">Sikh Wisdom: </span>
              {level.sikhPrinciple}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const FearLevelsStack: React.FC<FearLevelsStackProps> = ({ levels, className = '' }) => {
  const [expandedLevelId, setExpandedLevelId] = useState<number | null>(null);
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  
  const toggleLevel = (levelId: number) => {
    setExpandedLevelId(expandedLevelId === levelId ? null : levelId);
    
    // Update current level if user clicks on a higher level
    if (levelId > currentLevel) {
      setCurrentLevel(levelId);
    }
  };
  
  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Your Fear-Busting Power Levels</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Tap each level to discover Sikh wisdom for your journey beyond fear</p>
        <LevelProgressBar 
          currentLevel={currentLevel} 
          totalLevels={levels.length} 
          className="max-w-md mx-auto"
        />
      </div>
      
      <div className="space-y-2">
        {levels.map((level) => (
          <LevelCard 
            key={level.id}
            level={level}
            isExpanded={expandedLevelId === level.id}
            toggleExpand={() => toggleLevel(level.id)}
          />
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-center">
        <p className="text-sm">
          "One who has conquered fear, has conquered everything." - Inspired by Sikh teachings
        </p>
      </div>
    </div>
  );
};

export default FearLevelsStack;