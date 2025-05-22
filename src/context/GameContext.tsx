import React, { createContext, useContext, useState, useEffect } from 'react';
import { principles } from '../data/principles';

type Completion = {
  principleId: number;
  challengeId: number;
  completed: boolean;
  reflection?: string;
};

type GameContextType = {
  points: number;
  addPoints: (amount: number) => void;
  completions: Completion[];
  completeChallenge: (principleId: number, challengeId: number) => void;
  saveReflection: (principleId: number, challengeId: number, text: string) => void;
  isCompleted: (principleId: number, challengeId: number) => boolean;
  getReflection: (principleId: number, challengeId: number) => string | undefined;
  completedCount: number;
  totalChallenges: number;
  progress: number;
  badges: string[];
};

const defaultContext: GameContextType = {
  points: 0,
  addPoints: () => {},
  completions: [],
  completeChallenge: () => {},
  saveReflection: () => {},
  isCompleted: () => false,
  getReflection: () => undefined,
  completedCount: 0,
  totalChallenges: 0,
  progress: 0,
  badges: [],
};

const GameContext = createContext<GameContextType>(defaultContext);

export const useGameContext = () => useContext(GameContext);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [points, setPoints] = useState<number>(() => {
    const saved = localStorage.getItem('sikhMindset_points');
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [completions, setCompletions] = useState<Completion[]>(() => {
    const saved = localStorage.getItem('sikhMindset_completions');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [badges, setBadges] = useState<string[]>(() => {
    const saved = localStorage.getItem('sikhMindset_badges');
    return saved ? JSON.parse(saved) : [];
  });

  // Calculate total challenges
  const totalChallenges = principles.reduce(
    (sum, principle) => sum + principle.challenges.length, 
    0
  );
  
  // Calculate completed challenges
  const completedCount = completions.filter(c => c.completed).length;
  
  // Calculate progress percentage
  const progress = totalChallenges > 0 ? (completedCount / totalChallenges) * 100 : 0;

  // Check for badge unlocks on changes
  useEffect(() => {
    // Check point thresholds for badges
    const newBadges = [...badges];
    
    if (points >= 50 && !badges.includes('Beginner')) {
      newBadges.push('Beginner');
    }
    
    if (points >= 100 && !badges.includes('Explorer')) {
      newBadges.push('Explorer');
    }
    
    if (points >= 250 && !badges.includes('Seeker')) {
      newBadges.push('Seeker');
    }
    
    if (points >= 500 && !badges.includes('Warrior')) {
      newBadges.push('Warrior');
    }
    
    if (progress >= 100 && !badges.includes('Enlightened')) {
      newBadges.push('Enlightened');
    }
    
    if (newBadges.length !== badges.length) {
      setBadges(newBadges);
    }
  }, [points, progress, badges]);

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('sikhMindset_points', points.toString());
    localStorage.setItem('sikhMindset_completions', JSON.stringify(completions));
    localStorage.setItem('sikhMindset_badges', JSON.stringify(badges));
  }, [points, completions, badges]);

  const addPoints = (amount: number) => {
    setPoints(prev => prev + amount);
  };

  const completeChallenge = (principleId: number, challengeId: number) => {
    // Check if already completed to avoid duplicate points
    const isAlreadyCompleted = completions.some(
      c => c.principleId === principleId && c.challengeId === challengeId && c.completed
    );
    
    if (!isAlreadyCompleted) {
      // Add points
      addPoints(10);
      
      // Update completions
      setCompletions(prev => {
        const existingIndex = prev.findIndex(
          c => c.principleId === principleId && c.challengeId === challengeId
        );
        
        if (existingIndex >= 0) {
          const updated = [...prev];
          updated[existingIndex] = { ...updated[existingIndex], completed: true };
          return updated;
        } else {
          return [...prev, { principleId, challengeId, completed: true }];
        }
      });
    }
  };

  const saveReflection = (principleId: number, challengeId: number, text: string) => {
    setCompletions(prev => {
      const existingIndex = prev.findIndex(
        c => c.principleId === principleId && c.challengeId === challengeId
      );
      
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = { 
          ...updated[existingIndex], 
          reflection: text 
        };
        return updated;
      } else {
        return [
          ...prev, 
          { principleId, challengeId, completed: false, reflection: text }
        ];
      }
    });
  };

  const isCompleted = (principleId: number, challengeId: number): boolean => {
    return completions.some(
      c => c.principleId === principleId && 
           c.challengeId === challengeId && 
           c.completed
    );
  };

  const getReflection = (principleId: number, challengeId: number): string | undefined => {
    const completion = completions.find(
      c => c.principleId === principleId && c.challengeId === challengeId
    );
    return completion?.reflection;
  };

  const value = {
    points,
    addPoints,
    completions,
    completeChallenge,
    saveReflection,
    isCompleted,
    getReflection,
    completedCount,
    totalChallenges,
    progress,
    badges,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};