import React from 'react';

interface LevelProgressBarProps {
  currentLevel: number;
  totalLevels: number;
  className?: string;
}

const LevelProgressBar: React.FC<LevelProgressBarProps> = ({
  currentLevel,
  totalLevels,
  className = '',
}) => {
  // Calculate percentage of progress
  const progressPercentage = (currentLevel / totalLevels) * 100;
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between mb-1 text-sm">
        <span>Level {currentLevel} of {totalLevels}</span>
        <span>{Math.round(progressPercentage)}% Complete</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LevelProgressBar;