// Data structure connecting Tony Robbins' mindset principles with Sikh values
export interface Challenge {
  id: number;
  title: string;
  description: string;
  sikhConnection: string;
  activity: string;
  reflection: string;
}

export interface Principle {
  id: number;
  title: string;
  description: string;
  tonyQuote: string;
  sikhTeaching: string;
  sikhQuote: string;
  challenges: Challenge[];
  iconName: string;
  color: string;
}

export const principles: Principle[] = [
  {
    id: 1,
    title: "Start Your Day Strong",
    description: "Begin each day with purpose and intention, setting yourself up for success.",
    tonyQuote: "If you talk about it, it's a dream. If you envision it, it's possible. If you schedule it, it's real.",
    sikhTeaching: "Amrit Vela (early morning meditation) is a sacred time in Sikhism. Rising early to connect with Waheguru (God) establishes a foundation of strength and purpose for the day.",
    sikhQuote: "Those who remember God early in the morning are blessed with the treasure of Naam (God's Name).",
    iconName: "sunrise",
    color: "amber",
    challenges: [
      {
        id: 1,
        title: "Morning Discipline",
        description: "Wake up 30 minutes earlier than usual and establish a positive morning routine.",
        sikhConnection: "In Sikhism, Amrit Vela (ambrosial hours before dawn) is considered the most auspicious time for meditation and connection with the divine.",
        activity: "For the next 3 days, wake up early and spend 10 minutes in quiet reflection, setting intentions for your day.",
        reflection: "How did starting your day with intention change your mindset throughout the day? How might this connect to the Sikh practice of Amrit Vela?"
      },
      {
        id: 2,
        title: "Cold Water Challenge",
        description: "Just as Tony Robbins starts with something uncomfortable, try ending your shower with 30 seconds of cold water.",
        sikhConnection: "Sikh history is filled with stories of resilience and embracing discomfort for growth, like Guru Nanak Dev Ji bathing in the freezing Kali Bein river.",
        activity: "Try ending your shower with 30 seconds of cold water for 3 days straight. Notice how it affects your energy and mindset.",
        reflection: "How does pushing through physical discomfort translate to mental strength? How does this relate to the Sikh value of discipline (Niyam)?"
      },
      {
        id: 3,
        title: "First Action",
        description: "Identify one important task and complete it first thing in the morning before anything else.",
        sikhConnection: "Sikhs believe in Kirat Karni - honest, hard work and taking action rather than passive existence.",
        activity: "Choose one important task each morning and complete it before checking social media or other distractions.",
        reflection: "How does completing important work first thing affect your confidence for the rest of the day? How does this reflect the Sikh principle of Kirat Karni?"
      }
    ]
  },
  {
    id: 2,
    title: "Practice Gratitude",
    description: "Cultivate an attitude of thankfulness for both challenges and blessings.",
    tonyQuote: "When you are grateful, fear disappears, and abundance appears.",
    sikhTeaching: "Dhann Guru, Dhann Guru, Dhann Guru, Dhann Jeeo - an expression of gratitude to the divine. Sikhs practice gratitude (Dhannvaad) as a way to recognize God's gifts and blessings in all circumstances.",
    sikhQuote: "One who feels gratitude is blessed with the jewels of contentment.",
    iconName: "heart",
    color: "rose",
    challenges: [
      {
        id: 1,
        title: "Gratitude Journal",
        description: "Start a gratitude journal and list three things you're thankful for each day.",
        sikhConnection: "The Sikh practice of Dhannvaad (gratitude) teaches us to see blessings in all circumstances and to express thankfulness to Waheguru.",
        activity: "Create a gratitude journal and write down 3 things you're thankful for each day for one week.",
        reflection: "How does focusing on gratitude change your perception of challenges? How does this connect to the Sikh concept of Chardi Kala (eternal optimism)?"
      },
      {
        id: 2,
        title: "Thank You Note",
        description: "Write a genuine thank-you message to someone who has positively impacted your life.",
        sikhConnection: "Sikhi emphasizes Seva (selfless service) and recognizing the divine light in all. Expressing thanks honors both the giver and the divine presence within them.",
        activity: "Write a heartfelt note of appreciation to someone who has helped you recently, explaining specifically how they made a difference.",
        reflection: "How did expressing gratitude affect both you and the recipient? How does this relate to seeing the divine light in all people?"
      },
      {
        id: 3,
        title: "Gratitude Walk",
        description: "Take a 10-minute walk focusing exclusively on things you're grateful for.",
        sikhConnection: "The Sikh concept of Naam Simran (remembrance of God) can be practiced while walking, combining mindfulness with gratitude.",
        activity: "During this walk, notice beauty around you and mentally say 'thank you' for each blessing you observe.",
        reflection: "How did this walking meditation on gratitude affect your state of mind? How might this practice connect to the Sikh concept of seeing Waheguru in all of creation?"
      }
    ]
  },
  {
    id: 3,
    title: "Visualize Success",
    description: "See your goals as already accomplished to program your mind for achievement.",
    tonyQuote: "See it as done. See yourself as having a goal already completed.",
    sikhTeaching: "Ardaas (prayer) in Sikhism includes visualization of positive outcomes and surrender to God's will. It combines faithful action with divine support.",
    sikhQuote: "Whatever you ask for with pure intention and devotion shall be given to you.",
    iconName: "eye",
    color: "indigo",
    challenges: [
      {
        id: 1,
        title: "Vision Board",
        description: "Create a digital or physical vision board representing your goals and aspirations.",
        sikhConnection: "The Sikh concept of Haumai (ego) teaches that focusing on positive goals aligned with divine will leads to success, rather than ego-driven desires.",
        activity: "Create a vision board with images and words representing your goals. Include elements that connect to service and helping others.",
        reflection: "How does visualizing your goals make them feel more achievable? How might you align your goals with Sikh values of community service and spiritual growth?"
      },
      {
        id: 2,
        title: "Mental Rehearsal",
        description: "Practice visualizing yourself successfully completing an upcoming challenge.",
        sikhConnection: "Before battle, Sikh warriors would prepare mentally and spiritually, visualizing victory while reciting Gurbani (Sikh scriptures).",
        activity: "Spend 5 minutes each day visualizing yourself succeeding at an upcoming challenge, feeling the emotions of success.",
        reflection: "How did mental rehearsal affect your confidence and performance? How might this practice connect to the Sikh warrior tradition of mental preparation?"
      },
      {
        id: 3,
        title: "Affirmation Creation",
        description: "Write positive affirmations that align with your goals and values.",
        sikhConnection: "Sikhs recite Japji Sahib and other Banis (prayers) daily as a form of positive affirmation and connection with divine truths.",
        activity: "Create three positive affirmations that reflect both your personal goals and values like courage, service, or honesty.",
        reflection: "How do these affirmations affect your mindset? How might this practice connect to the Sikh tradition of reciting Gurbani?"
      }
    ]
  },
  {
    id: 4,
    title: "Move Your Body",
    description: "Use physical movement to transform your emotional state and energy.",
    tonyQuote: "Motion creates emotion. Whatever you're feeling, stand the way you would if you were feeling magnificent.",
    sikhTeaching: "Gatka (Sikh martial art) combines physical movement with spiritual discipline. Through Gatka and other physical practices, Sikhs maintain both physical fitness and mental focus.",
    sikhQuote: "A healthy body is the temple where the divine light resides.",
    iconName: "activity",
    color: "emerald",
    challenges: [
      {
        id: 1,
        title: "Energy Boost",
        description: "When feeling low energy or negative, change your physiology with movement for 2 minutes.",
        sikhConnection: "The Sikh martial art Gatka teaches that physical movement is connected to spiritual and mental strength.",
        activity: "When you notice negative emotions, stand up, stretch your arms wide, take deep breaths, and jump or move energetically for 2 minutes.",
        reflection: "How did changing your physical state affect your emotional state? How might this connect to the Sikh tradition of maintaining physical fitness for spiritual readiness?"
      },
      {
        id: 2,
        title: "Morning Stretch",
        description: "Start each day with 5 minutes of stretching to awaken your body and mind.",
        sikhConnection: "Sikhs traditionally begin their day with Sodarshan Chakra Kriya, a form of movement and breath work that energizes the body and mind.",
        activity: "Create a simple 5-minute morning stretch routine and practice it daily for one week.",
        reflection: "How does morning movement affect your energy and focus throughout the day? How might this connect to Sikh practices of morning discipline?"
      },
      {
        id: 3,
        title: "Nature Walk",
        description: "Take a mindful walk in nature, paying attention to your surroundings and your body.",
        sikhConnection: "Sikhs believe in seeing God in nature (Kudrat) and practicing awareness of divine presence in all creation.",
        activity: "Take a 20-minute walk in nature, paying attention to your breathing, the sensations in your body, and the beauty around you.",
        reflection: "How did connecting with nature through movement affect your mindset? How does this relate to the Sikh concept of seeing Waheguru in all of creation?"
      }
    ]
  },
  {
    id: 5,
    title: "Focus on Solutions",
    description: "Shift from problems to possibilities by asking better questions.",
    tonyQuote: "Successful people ask better questions, and as a result, they get better answers.",
    sikhTeaching: "Chardi Kala (eternal optimism) is a core Sikh value that encourages maintaining high spirits even in difficult times. Sikhs are taught to see challenges as opportunities for growth.",
    sikhQuote: "The Guru's wisdom turns obstacles into stepping stones on the path to enlightenment.",
    iconName: "lightbulb",
    color: "cyan",
    challenges: [
      {
        id: 1,
        title: "Problem Reframing",
        description: "Take a current challenge and reframe it as an opportunity for growth.",
        sikhConnection: "The Sikh concept of Chardi Kala (eternal optimism) teaches facing challenges with high spirits and seeing difficulties as opportunities.",
        activity: "Write down a current problem, then rewrite it as a question starting with 'How might I...' to focus on solutions.",
        reflection: "How does reframing problems as questions change your approach? How does this connect to the Sikh principle of maintaining Chardi Kala in all circumstances?"
      },
      {
        id: 2,
        title: "Solution Journal",
        description: "Instead of complaining about problems, write down possible solutions.",
        sikhConnection: "Sikhs believe in Bhana (accepting God's will) while taking positive action rather than passive complaining.",
        activity: "Create a solution journal where you write one problem and three possible solutions each day for a week.",
        reflection: "How does focusing on solutions rather than problems change your mindset? How does this approach reflect the Sikh value of taking positive action?"
      },
      {
        id: 3,
        title: "Better Questions",
        description: "Practice asking empowering questions that lead to growth and solutions.",
        sikhConnection: "The tradition of Sangat (spiritual community) in Sikhism encourages thoughtful questioning and discussion to reach deeper understanding.",
        activity: "When facing a challenge, ask yourself: 'What can I learn from this?' 'What's the opportunity here?' and 'How can this make me stronger?'",
        reflection: "How do empowering questions change your perspective on challenges? How might this practice connect to the Sikh tradition of thoughtful inquiry?"
      }
    ]
  }
];