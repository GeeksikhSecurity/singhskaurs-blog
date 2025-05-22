export interface FearLevel {
  id: number;
  title: string;
  description: string;
  sikhPrinciple: string;
  color: string;
}

const fearLevels: FearLevel[] = [
  {
    id: 1,
    title: "The Freeze Zone",
    description: "This is where fear completely takes over. You feel stuck, paralyzed, and unable to move forward. Your brain is in survival mode, and you can't think clearly.",
    sikhPrinciple: "\"Those who have fear of God and love for God in their hearts, they shine bright.\" - Guru Nanak Dev Ji teaches that acknowledging fear is the first step toward wisdom.",
    color: "#E53E3E" // red
  },
  {
    id: 2,
    title: "The Worry Cloud",
    description: "At this level, you're constantly thinking about what could go wrong. Your mind creates endless 'what if' scenarios that keep you from being present.",
    sikhPrinciple: "\"Why do you worry? God will take care of you.\" - This teaching from Gurbani reminds us that excessive worry shows lack of faith in Waheguru's plan.",
    color: "#DD6B20" // orange
  },
  {
    id: 3,
    title: "The Control Tower",
    description: "Here, you try to manage fear by controlling everything around you. You make lots of rules and plans to feel safe, but this limits your experiences.",
    sikhPrinciple: "\"Hukam\" teaches us to accept God's will rather than trying to control everything. True peace comes from surrender, not control.",
    color: "#D69E2E" // yellow
  },
  {
    id: 4,
    title: "The Acceptance Path",
    description: "This is where transformation begins! You start acknowledging your fears instead of fighting them. You understand that fear is just a feeling, not who you are.",
    sikhPrinciple: "\"Mann Tu Jot Saroop Hai, Apna Mool Pachhan\" - Recognize your true self as divine light. This self-awareness creates space between you and temporary emotions.",
    color: "#38A169" // green
  },
  {
    id: 5,
    title: "The Growth Mindset",
    description: "At this level, you see challenges as opportunities to learn rather than threats. You're willing to step outside your comfort zone because you know that's where growth happens.",
    sikhPrinciple: "\"Kirat Karo\" - Honest work and continuous self-improvement are core Sikh values. Each challenge is an opportunity to practice virtuous living.",
    color: "#3182CE" // blue
  },
  {
    id: 6,
    title: "The Connection Circle",
    description: "Here, you recognize we're all in this together. You feel compassion for yourself and others who experience fear. This sense of connection gives you strength.",
    sikhPrinciple: "\"Vand Chakko\" - Share with others and serve the community. Sewa (selfless service) helps us transcend our own fears by focusing on others' needs.",
    color: "#805AD5" // purple
  },
  {
    id: 7,
    title: "The Freedom Zone",
    description: "The highest level! You've integrated the lessons from all previous levels. Fear may still arise, but you have the wisdom to respond rather than react.",
    sikhPrinciple: "\"Nirbhau, Nirvair\" - Without fear, without hate. This divine quality from Mool Mantar represents the ultimate state of consciousness we aspire to reach.",
    color: "#6B46C1" // deeper purple
  }
];

export default fearLevels;