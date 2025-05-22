import React, { createContext, useContext, useState } from 'react';
import type { Journey } from '../types/journey';
import { getJourneyBySlug } from '../data/journeys';

type JourneyContextType = {
  currentJourney: Journey | null;
  setCurrentJourneyBySlug: (slug: string) => void;
};

const JourneyContext = createContext<JourneyContextType>({
  currentJourney: null,
  setCurrentJourneyBySlug: () => {},
});

export const useJourneyContext = () => useContext(JourneyContext);

export const JourneyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentJourney, setCurrentJourney] = useState<Journey | null>(null);

  const setCurrentJourneyBySlug = (slug: string) => {
    const journey = getJourneyBySlug(slug);
    setCurrentJourney(journey || null);
  };

  return (
    <JourneyContext.Provider value={{ currentJourney, setCurrentJourneyBySlug }}>
      {children}
    </JourneyContext.Provider>
  );
};