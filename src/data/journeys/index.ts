import { sikhMindsetJourney } from './sikh-mindset';
import type { Journey } from '../../types/journey';

export const journeys: Journey[] = [
  sikhMindsetJourney,
  // Additional journeys can be added here
];

export const getJourneyBySlug = (slug: string): Journey | undefined => {
  return journeys.find(journey => journey.slug === slug);
};

export const getAllJourneys = (): Journey[] => {
  return journeys;
};