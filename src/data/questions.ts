// Define the CliftonStrengths themes
enum StrengthTheme {
  Achiever = "Achiever",
  Activator = "Activator",
  Adaptability = "Adaptability",
  Analytical = "Analytical",
  Arranger = "Arranger",
  Belief = "Belief",
  Command = "Command",
  Communication = "Communication",
  Competition = "Competition",
  Connectedness = "Connectedness",
  Consistency = "Consistency",
  Context = "Context",
  Deliberative = "Deliberative",
  Developer = "Developer",
  Discipline = "Discipline",
  Empathy = "Empathy",
  Focus = "Focus",
  Futuristic = "Futuristic",
  Harmony = "Harmony",
  Ideation = "Ideation",
  Includer = "Includer",
  Individualization = "Individualization",
  Input = "Input",
  Intellection = "Intellection",
  Learner = "Learner",
  Maximizer = "Maximizer",
  Positivity = "Positivity",
  Relator = "Relator",
  Responsibility = "Responsibility",
  Restorative = "Restorative",
  SelfAssurance = "Self Assurance",
  Significance = "Significance",
  Strategic = "Strategic",
  Woo = "Woo",
}

// Define the domains for categorization
enum StrengthDomain {
  StrategicThinking = "Strategic Thinking",
  Executing = "Executing",
  Influencing = "Influencing",
  RelationshipBuilding = "Relationship Building",
}

// Map each theme to its domain
interface StrengthInfo {
  theme: StrengthTheme;
  domain: StrengthDomain;
  description: string; // Added description field
}

const strengthInfoMap: Record<StrengthTheme, StrengthInfo> = {
  [StrengthTheme.Achiever]: {
    theme: StrengthTheme.Achiever,
    domain: StrengthDomain.Executing,
    description:
      "You have a strong drive to accomplish tasks and achieve goals, thriving on the satisfaction of completing what you set out to do.",
  },
  [StrengthTheme.Activator]: {
    theme: StrengthTheme.Activator,
    domain: StrengthDomain.Influencing,
    description:
      "You are energized by taking action and turning ideas into reality, often inspiring others to get started.",
  },
  [StrengthTheme.Adaptability]: {
    theme: StrengthTheme.Adaptability,
    domain: StrengthDomain.RelationshipBuilding,
    description:
      "You thrive in dynamic environments, embracing change and adjusting to new circumstances with ease.",
  },
  [StrengthTheme.Analytical]: {
    theme: StrengthTheme.Analytical,
    domain: StrengthDomain.StrategicThinking,
    description:
      "You seek to understand the 'why' behind things, relying on data and analysis to make informed decisions.",
  },
  [StrengthTheme.Arranger]: {
    theme: StrengthTheme.Arranger,
    domain: StrengthDomain.Executing,
    description:
      "You excel at organizing complex tasks and resources, finding the most efficient path to success.",
  },
  [StrengthTheme.Belief]: {
    theme: StrengthTheme.Belief,
    domain: StrengthDomain.Executing,
    description:
      "Your core values guide your actions, giving you purpose and consistency in your decisions.",
  },
  [StrengthTheme.Command]: {
    theme: StrengthTheme.Command,
    domain: StrengthDomain.Influencing,
    description:
      "You take charge in challenging situations, providing clear direction and inspiring confidence in others.",
  },
  [StrengthTheme.Communication]: {
    theme: StrengthTheme.Communication,
    domain: StrengthDomain.Influencing,
    description:
      "You have a talent for expressing ideas clearly and engaging others through storytelling and dialogue.",
  },
  [StrengthTheme.Competition]: {
    theme: StrengthTheme.Competition,
    domain: StrengthDomain.Influencing,
    description:
      "You thrive on challenges and strive to outperform others, using competition as a motivator.",
  },
  [StrengthTheme.Connectedness]: {
    theme: StrengthTheme.Connectedness,
    domain: StrengthDomain.RelationshipBuilding,
    description:
      "You see the bigger picture, finding meaning in the connections between people, events, and ideas.",
  },
  [StrengthTheme.Consistency]: {
    theme: StrengthTheme.Consistency,
    domain: StrengthDomain.Executing,
    description:
      "You value fairness and create structure by ensuring rules and processes are applied equitably.",
  },
  [StrengthTheme.Context]: {
    theme: StrengthTheme.Context,
    domain: StrengthDomain.StrategicThinking,
    description:
      "You look to the past to understand the present, using historical insights to inform decisions.",
  },
  [StrengthTheme.Deliberative]: {
    theme: StrengthTheme.Deliberative,
    domain: StrengthDomain.Executing,
    description:
      "You take a careful, thoughtful approach to decision-making, anticipating risks and planning accordingly.",
  },
  [StrengthTheme.Developer]: {
    theme: StrengthTheme.Developer,
    domain: StrengthDomain.RelationshipBuilding,
    description:
      "You enjoy helping others grow, recognizing and nurturing their potential to achieve success.",
  },
  [StrengthTheme.Discipline]: {
    theme: StrengthTheme.Discipline,
    domain: StrengthDomain.Executing,
    description:
      "You create order and structure, thriving in environments where routines and plans are clear.",
  },
  [StrengthTheme.Empathy]: {
    theme: StrengthTheme.Empathy,
    domain: StrengthDomain.RelationshipBuilding,
    description:
      "You can sense and understand others' emotions, building trust through compassion and connection.",
  },
  [StrengthTheme.Focus]: {
    theme: StrengthTheme.Focus,
    domain: StrengthDomain.Executing,
    description:
      "You prioritize goals and stay on track, maintaining a clear direction to achieve results.",
  },
  [StrengthTheme.Futuristic]: {
    theme: StrengthTheme.Futuristic,
    domain: StrengthDomain.StrategicThinking,
    description:
      "You are inspired by what could be, envisioning future possibilities to guide your actions.",
  },
  [StrengthTheme.Harmony]: {
    theme: StrengthTheme.Harmony,
    domain: StrengthDomain.RelationshipBuilding,
    description:
      "You seek consensus and collaboration, fostering peace and cooperation in groups.",
  },
  [StrengthTheme.Ideation]: {
    theme: StrengthTheme.Ideation,
    domain: StrengthDomain.StrategicThinking,
    description:
      "You are fascinated by new ideas, finding innovative and creative solutions to problems.",
  },
  [StrengthTheme.Includer]: {
    theme: StrengthTheme.Includer,
    domain: StrengthDomain.RelationshipBuilding,
    description:
      "You strive to make everyone feel valued, ensuring no one is left out or overlooked.",
  },
  [StrengthTheme.Individualization]: {
    theme: StrengthTheme.Individualization,
    domain: StrengthDomain.RelationshipBuilding,
    description:
      "You recognize and appreciate the unique qualities of each person, tailoring your approach to their needs.",
  },
  [StrengthTheme.Input]: {
    theme: StrengthTheme.Input,
    domain: StrengthDomain.StrategicThinking,
    description:
      "You have a thirst for knowledge, collecting and sharing information to deepen understanding.",
  },
  [StrengthTheme.Intellection]: {
    theme: StrengthTheme.Intellection,
    domain: StrengthDomain.StrategicThinking,
    description:
      "You enjoy deep thinking and reflection, exploring ideas to gain clarity and insight.",
  },
  [StrengthTheme.Learner]: {
    theme: StrengthTheme.Learner,
    domain: StrengthDomain.StrategicThinking,
    description:
      "You love to learn and grow, finding joy in the process of acquiring new skills and knowledge.",
  },
  [StrengthTheme.Maximizer]: {
    theme: StrengthTheme.Maximizer,
    domain: StrengthDomain.Influencing,
    description:
      "You focus on transforming good ideas into great outcomes, striving for excellence in all you do.",
  },
  [StrengthTheme.Positivity]: {
    theme: StrengthTheme.Positivity,
    domain: StrengthDomain.RelationshipBuilding,
    description:
      "Your enthusiasm and optimism are contagious, uplifting others and fostering a positive environment.",
  },
  [StrengthTheme.Relator]: {
    theme: StrengthTheme.Relator,
    domain: StrengthDomain.RelationshipBuilding,
    description:
      "You build deep, meaningful relationships, finding satisfaction in close connections with others.",
  },
  [StrengthTheme.Responsibility]: {
    theme: StrengthTheme.Responsibility,
    domain: StrengthDomain.Executing,
    description:
      "You take ownership of your commitments, delivering on promises with reliability and care.",
  },
  [StrengthTheme.Restorative]: {
    theme: StrengthTheme.Restorative,
    domain: StrengthDomain.Executing,
    description:
      "You enjoy solving problems, finding satisfaction in fixing what is broken or improving systems.",
  },
  [StrengthTheme.SelfAssurance]: {
    theme: StrengthTheme.SelfAssurance,
    domain: StrengthDomain.Influencing,
    description:
      "You have confidence in your abilities, trusting your instincts to guide decisions and actions.",
  },
  [StrengthTheme.Significance]: {
    theme: StrengthTheme.Significance,
    domain: StrengthDomain.Influencing,
    description:
      "You are driven to make a lasting impact, seeking to achieve meaningful and recognized results.",
  },
  [StrengthTheme.Strategic]: {
    theme: StrengthTheme.Strategic,
    domain: StrengthDomain.StrategicThinking,
    description:
      "You excel at finding the best path forward, creating clear strategies to achieve goals.",
  },
  [StrengthTheme.Woo]: {
    theme: StrengthTheme.Woo,
    domain: StrengthDomain.Influencing,
    description:
      "You love meeting new people and building connections, making others feel welcome and engaged.",
  },
};

// Define the structure of a statement
interface Statement {
  text: string;
  associatedStrength: StrengthTheme;
}

// Define the structure of a question pair
interface QuestionPair {
  id: number;
  statement1: Statement;
  statement2: Statement;
}

// Define response options
enum ResponseOption {
  StronglyStatement1 = "StronglyStatement1",
  SlightlyStatement1 = "SlightlyStatement1",
  Neutral = "Neutral",
  SlightlyStatement2 = "SlightlyStatement2",
  StronglyStatement2 = "StronglyStatement2",
}

// Define the structure of a response
interface Response {
  questionId: number;
  selectedOption: ResponseOption;
  update?: boolean;
}

// Sample question pairs inspired by CliftonStrengths themes
const basicQuestionPairs: QuestionPair[] = [
  {
    id: 1,
    statement1: {
      text: "I enjoy setting ambitious goals and working hard to achieve them.",
      associatedStrength: StrengthTheme.Achiever,
    },
    statement2: {
      text: "I find satisfaction in exploring new ideas and creative solutions.",
      associatedStrength: StrengthTheme.Ideation,
    },
  },
  {
    id: 2,
    statement1: {
      text: "I thrive in dynamic environments and adapt quickly to change.",
      associatedStrength: StrengthTheme.Adaptability,
    },
    statement2: {
      text: "I prefer structured plans and organized processes.",
      associatedStrength: StrengthTheme.Discipline,
    },
  },
  {
    id: 3,
    statement1: {
      text: "I enjoy persuading others to see my point of view.",
      associatedStrength: StrengthTheme.Communication,
    },
    statement2: {
      text: "I focus on building deep, meaningful relationships.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 4,
    statement1: {
      text: "I am driven by a need to understand how things work.",
      associatedStrength: StrengthTheme.Analytical,
    },
    statement2: {
      text: "I am energized by taking action and making things happen.",
      associatedStrength: StrengthTheme.Activator,
    },
  },
  {
    id: 5,
    statement1: {
      text: "I take pride in treating everyone fairly and consistently.",
      associatedStrength: StrengthTheme.Consistency,
    },
    statement2: {
      text: "I enjoy recognizing and celebrating individual differences.",
      associatedStrength: StrengthTheme.Individualization,
    },
  },
  {
    id: 6,
    statement1: {
      text: "I am motivated by solving complex problems.",
      associatedStrength: StrengthTheme.Restorative,
    },
    statement2: {
      text: "I find joy in inspiring others with a positive outlook.",
      associatedStrength: StrengthTheme.Positivity,
    },
  },
  {
    id: 7,
    statement1: {
      text: "I enjoy learning new skills and gaining knowledge.",
      associatedStrength: StrengthTheme.Learner,
    },
    statement2: {
      text: "I am confident in making decisions based on my instincts.",
      associatedStrength: StrengthTheme.SelfAssurance,
    },
  },
  {
    id: 8,
    statement1: {
      text: "I like to take charge and lead others in a clear direction.",
      associatedStrength: StrengthTheme.Command,
    },
    statement2: {
      text: "I enjoy collaborating to find solutions that benefit everyone.",
      associatedStrength: StrengthTheme.Harmony,
    },
  },
  {
    id: 9,
    statement1: {
      text: "I am excited by envisioning future possibilities.",
      associatedStrength: StrengthTheme.Futuristic,
    },
    statement2: {
      text: "I value understanding the historical context of situations.",
      associatedStrength: StrengthTheme.Context,
    },
  },
  {
    id: 10,
    statement1: {
      text: "I enjoy meeting new people and making them feel welcome.",
      associatedStrength: StrengthTheme.Woo,
    },
    statement2: {
      text: "I focus on ensuring tasks are completed with precision.",
      associatedStrength: StrengthTheme.Focus,
    },
  },
  {
    id: 11,
    statement1: {
      text: "I feel a strong sense of duty to fulfill my commitments.",
      associatedStrength: StrengthTheme.Responsibility,
    },
    statement2: {
      text: "I am energized by competing and striving to win.",
      associatedStrength: StrengthTheme.Competition,
    },
  },
  {
    id: 12,
    statement1: {
      text: "I enjoy helping others grow and develop their potential.",
      associatedStrength: StrengthTheme.Developer,
    },
    statement2: {
      text: "I am driven to make a significant impact in my work.",
      associatedStrength: StrengthTheme.Significance,
    },
  },
  {
    id: 13,
    statement1: {
      text: "I find meaning in connecting events and ideas.",
      associatedStrength: StrengthTheme.Connectedness,
    },
    statement2: {
      text: "I enjoy carefully weighing options before deciding.",
      associatedStrength: StrengthTheme.Deliberative,
    },
  },
  {
    id: 14,
    statement1: {
      text: "I am skilled at finding the best path to achieve goals.",
      associatedStrength: StrengthTheme.Strategic,
    },
    statement2: {
      text: "I enjoy collecting and archiving useful information.",
      associatedStrength: StrengthTheme.Input,
    },
  },
  {
    id: 15,
    statement1: {
      text: "I am energized by deep thinking and reflection.",
      associatedStrength: StrengthTheme.Intellection,
    },
    statement2: {
      text: "I enjoy including everyone and making them feel valued.",
      associatedStrength: StrengthTheme.Includer,
    },
  },
  {
    id: 16,
    statement1: {
      text: "I focus on transforming good ideas into great outcomes.",
      associatedStrength: StrengthTheme.Maximizer,
    },
    statement2: {
      text: "I am driven by my core values and convictions.",
      associatedStrength: StrengthTheme.Belief,
    },
  },
  {
    id: 17,
    statement1: {
      text: "I enjoy organizing complex tasks and projects.",
      associatedStrength: StrengthTheme.Arranger,
    },
    statement2: {
      text: "I am skilled at understanding others’ emotions.",
      associatedStrength: StrengthTheme.Empathy,
    },
  },
  {
    id: 18,
    statement1: {
      text: "I am motivated by turning ideas into action quickly.",
      associatedStrength: StrengthTheme.Activator,
    },
    statement2: {
      text: "I enjoy reflecting on the deeper meaning of ideas.",
      associatedStrength: StrengthTheme.Intellection,
    },
  },
  {
    id: 19,
    statement1: {
      text: "I find satisfaction in creating order and structure.",
      associatedStrength: StrengthTheme.Discipline,
    },
    statement2: {
      text: "I am energized by envisioning what could be in the future.",
      associatedStrength: StrengthTheme.Futuristic,
    },
  },
  {
    id: 20,
    statement1: {
      text: "I enjoy inspiring others with my enthusiasm and energy.",
      associatedStrength: StrengthTheme.Positivity,
    },
    statement2: {
      text: "I focus on analyzing data to make informed decisions.",
      associatedStrength: StrengthTheme.Analytical,
    },
  },
  {
    id: 21,
    statement1: {
      text: "I am driven to achieve excellence in everything I do.",
      associatedStrength: StrengthTheme.Maximizer,
    },
    statement2: {
      text: "I enjoy forming close, trusting relationships.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 22,
    statement1: {
      text: "I thrive when leading others through challenging situations.",
      associatedStrength: StrengthTheme.Command,
    },
    statement2: {
      text: "I enjoy gathering and sharing knowledge with others.",
      associatedStrength: StrengthTheme.Input,
    },
  },
  {
    id: 23,
    statement1: {
      text: "I am motivated by pursuing challenging goals.",
      associatedStrength: StrengthTheme.Achiever,
    },
    statement2: {
      text: "I find joy in fostering collaboration and agreement.",
      associatedStrength: StrengthTheme.Harmony,
    },
  },
  {
    id: 24,
    statement1: {
      text: "I enjoy exploring new concepts and learning continuously.",
      associatedStrength: StrengthTheme.Learner,
    },
    statement2: {
      text: "I am confident in my ability to influence others.",
      associatedStrength: StrengthTheme.SelfAssurance,
    },
  },
  {
    id: 25,
    statement1: {
      text: "I take pride in ensuring everyone is treated equitably.",
      associatedStrength: StrengthTheme.Consistency,
    },
    statement2: {
      text: "I enjoy solving problems by finding innovative solutions.",
      associatedStrength: StrengthTheme.Restorative,
    },
  },
  {
    id: 26,
    statement1: {
      text: "I am energized by connecting with new people.",
      associatedStrength: StrengthTheme.Woo,
    },
    statement2: {
      text: "I focus on creating strategic plans to achieve goals.",
      associatedStrength: StrengthTheme.Strategic,
    },
  },
  {
    id: 27,
    statement1: {
      text: "I find meaning in helping others see the bigger picture.",
      associatedStrength: StrengthTheme.Connectedness,
    },
    statement2: {
      text: "I am driven by a desire to make a lasting impact.",
      associatedStrength: StrengthTheme.Significance,
    },
  },
  {
    id: 28,
    statement1: {
      text: "I enjoy tailoring solutions to individual needs.",
      associatedStrength: StrengthTheme.Individualization,
    },
    statement2: {
      text: "I am motivated by following through on my promises.",
      associatedStrength: StrengthTheme.Responsibility,
    },
  },
  {
    id: 29,
    statement1: {
      text: "I thrive on exploring creative and original ideas.",
      associatedStrength: StrengthTheme.Ideation,
    },
    statement2: {
      text: "I enjoy looking back at past events to inform decisions.",
      associatedStrength: StrengthTheme.Context,
    },
  },
  {
    id: 30,
    statement1: {
      text: "I am energized by helping others reach their potential.",
      associatedStrength: StrengthTheme.Developer,
    },
    statement2: {
      text: "I focus on maintaining a clear direction to achieve goals.",
      associatedStrength: StrengthTheme.Focus,
    },
  },
  {
    id: 31,
    statement1: {
      text: "I enjoy taking immediate action to get things moving.",
      associatedStrength: StrengthTheme.Activator,
    },
    statement2: {
      text: "I find satisfaction in ensuring tasks are completed consistently.",
      associatedStrength: StrengthTheme.Consistency,
    },
  },
  {
    id: 32,
    statement1: {
      text: "I am motivated by understanding the emotions of others.",
      associatedStrength: StrengthTheme.Empathy,
    },
    statement2: {
      text: "I enjoy envisioning innovative possibilities for the future.",
      associatedStrength: StrengthTheme.Futuristic,
    },
  },
  {
    id: 33,
    statement1: {
      text: "I thrive on creating systems to keep things organized.",
      associatedStrength: StrengthTheme.Discipline,
    },
    statement2: {
      text: "I am energized by inspiring others with my vision.",
      associatedStrength: StrengthTheme.Communication,
    },
  },
  {
    id: 34,
    statement1: {
      text: "I am energized by deep thinking and reflection.",
      associatedStrength: StrengthTheme.Intellection,
    },
    statement2: {
      text: "I am driven to achieve measurable results.",
      associatedStrength: StrengthTheme.Achiever,
    },
  },
];

const fullQuestionPairs: QuestionPair[] = [
  {
    id: 1,
    statement1: {
      text: "I enjoy setting ambitious goals and working hard to achieve them.",
      associatedStrength: StrengthTheme.Achiever,
    },
    statement2: {
      text: "I find satisfaction in exploring new ideas and creative solutions.",
      associatedStrength: StrengthTheme.Ideation,
    },
  },
  {
    id: 2,
    statement1: {
      text: "I thrive in dynamic environments and adapt quickly to change.",
      associatedStrength: StrengthTheme.Adaptability,
    },
    statement2: {
      text: "I prefer structured plans and organized processes.",
      associatedStrength: StrengthTheme.Discipline,
    },
  },
  {
    id: 3,
    statement1: {
      text: "I enjoy persuading others to see my point of view.",
      associatedStrength: StrengthTheme.Communication,
    },
    statement2: {
      text: "I focus on building deep, meaningful relationships.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 4,
    statement1: {
      text: "I am driven by a need to understand how things work.",
      associatedStrength: StrengthTheme.Analytical,
    },
    statement2: {
      text: "I am energized by taking action and making things happen.",
      associatedStrength: StrengthTheme.Activator,
    },
  },
  {
    id: 5,
    statement1: {
      text: "I take pride in treating everyone fairly and consistently.",
      associatedStrength: StrengthTheme.Consistency,
    },
    statement2: {
      text: "I enjoy recognizing and celebrating individual differences.",
      associatedStrength: StrengthTheme.Individualization,
    },
  },
  {
    id: 6,
    statement1: {
      text: "I am motivated by solving complex problems.",
      associatedStrength: StrengthTheme.Restorative,
    },
    statement2: {
      text: "I find joy in inspiring others with a positive outlook.",
      associatedStrength: StrengthTheme.Positivity,
    },
  },
  {
    id: 7,
    statement1: {
      text: "I enjoy learning new skills and gaining knowledge.",
      associatedStrength: StrengthTheme.Learner,
    },
    statement2: {
      text: "I am confident in making decisions based on my instincts.",
      associatedStrength: StrengthTheme.SelfAssurance,
    },
  },
  {
    id: 8,
    statement1: {
      text: "I like to take charge and lead others in a clear direction.",
      associatedStrength: StrengthTheme.Command,
    },
    statement2: {
      text: "I enjoy collaborating to find solutions that benefit everyone.",
      associatedStrength: StrengthTheme.Harmony,
    },
  },
  {
    id: 9,
    statement1: {
      text: "I am excited by envisioning future possibilities.",
      associatedStrength: StrengthTheme.Futuristic,
    },
    statement2: {
      text: "I value understanding the historical context of situations.",
      associatedStrength: StrengthTheme.Context,
    },
  },
  {
    id: 10,
    statement1: {
      text: "I enjoy meeting new people and making them feel welcome.",
      associatedStrength: StrengthTheme.Woo,
    },
    statement2: {
      text: "I focus on ensuring tasks are completed with precision.",
      associatedStrength: StrengthTheme.Focus,
    },
  },
  {
    id: 11,
    statement1: {
      text: "I feel a strong sense of duty to fulfill my commitments.",
      associatedStrength: StrengthTheme.Responsibility,
    },
    statement2: {
      text: "I am energized by competing and striving to win.",
      associatedStrength: StrengthTheme.Competition,
    },
  },
  {
    id: 12,
    statement1: {
      text: "I enjoy helping others grow and develop their potential.",
      associatedStrength: StrengthTheme.Developer,
    },
    statement2: {
      text: "I am driven to make a significant impact in my work.",
      associatedStrength: StrengthTheme.Significance,
    },
  },
  {
    id: 13,
    statement1: {
      text: "I find meaning in connecting events and ideas.",
      associatedStrength: StrengthTheme.Connectedness,
    },
    statement2: {
      text: "I enjoy carefully weighing options before deciding.",
      associatedStrength: StrengthTheme.Deliberative,
    },
  },
  {
    id: 14,
    statement1: {
      text: "I am skilled at finding the best path to achieve goals.",
      associatedStrength: StrengthTheme.Strategic,
    },
    statement2: {
      text: "I enjoy collecting and archiving useful information.",
      associatedStrength: StrengthTheme.Input,
    },
  },
  {
    id: 15,
    statement1: {
      text: "I am energized by deep thinking and reflection.",
      associatedStrength: StrengthTheme.Intellection,
    },
    statement2: {
      text: "I enjoy including everyone and making them feel valued.",
      associatedStrength: StrengthTheme.Includer,
    },
  },
  {
    id: 16,
    statement1: {
      text: "I focus on transforming good ideas into great outcomes.",
      associatedStrength: StrengthTheme.Maximizer,
    },
    statement2: {
      text: "I am driven by my core values and convictions.",
      associatedStrength: StrengthTheme.Belief,
    },
  },
  {
    id: 17,
    statement1: {
      text: "I enjoy organizing complex tasks and projects.",
      associatedStrength: StrengthTheme.Arranger,
    },
    statement2: {
      text: "I am skilled at understanding others’ emotions.",
      associatedStrength: StrengthTheme.Empathy,
    },
  },
  {
    id: 18,
    statement1: {
      text: "I am motivated by turning ideas into action quickly.",
      associatedStrength: StrengthTheme.Activator,
    },
    statement2: {
      text: "I enjoy reflecting on the deeper meaning of ideas.",
      associatedStrength: StrengthTheme.Intellection,
    },
  },
  {
    id: 19,
    statement1: {
      text: "I find satisfaction in creating order and structure.",
      associatedStrength: StrengthTheme.Discipline,
    },
    statement2: {
      text: "I am energized by envisioning what could be in the future.",
      associatedStrength: StrengthTheme.Futuristic,
    },
  },
  {
    id: 20,
    statement1: {
      text: "I enjoy inspiring others with my enthusiasm and energy.",
      associatedStrength: StrengthTheme.Positivity,
    },
    statement2: {
      text: "I focus on analyzing data to make informed decisions.",
      associatedStrength: StrengthTheme.Analytical,
    },
  },
  {
    id: 21,
    statement1: {
      text: "I am driven to achieve excellence in everything I do.",
      associatedStrength: StrengthTheme.Maximizer,
    },
    statement2: {
      text: "I enjoy forming close, trusting relationships.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 22,
    statement1: {
      text: "I thrive when leading others through challenging situations.",
      associatedStrength: StrengthTheme.Command,
    },
    statement2: {
      text: "I enjoy gathering and sharing knowledge with others.",
      associatedStrength: StrengthTheme.Input,
    },
  },
  {
    id: 23,
    statement1: {
      text: "I am motivated by pursuing challenging goals.",
      associatedStrength: StrengthTheme.Achiever,
    },
    statement2: {
      text: "I find joy in fostering collaboration and agreement.",
      associatedStrength: StrengthTheme.Harmony,
    },
  },
  {
    id: 24,
    statement1: {
      text: "I enjoy exploring new concepts and learning continuously.",
      associatedStrength: StrengthTheme.Learner,
    },
    statement2: {
      text: "I am confident in my ability to influence others.",
      associatedStrength: StrengthTheme.SelfAssurance,
    },
  },
  {
    id: 25,
    statement1: {
      text: "I take pride in ensuring everyone is treated equitably.",
      associatedStrength: StrengthTheme.Consistency,
    },
    statement2: {
      text: "I enjoy solving problems by finding innovative solutions.",
      associatedStrength: StrengthTheme.Restorative,
    },
  },
  {
    id: 26,
    statement1: {
      text: "I am energized by connecting with new people.",
      associatedStrength: StrengthTheme.Woo,
    },
    statement2: {
      text: "I focus on creating strategic plans to achieve goals.",
      associatedStrength: StrengthTheme.Strategic,
    },
  },
  {
    id: 27,
    statement1: {
      text: "I find meaning in helping others see the bigger picture.",
      associatedStrength: StrengthTheme.Connectedness,
    },
    statement2: {
      text: "I am driven to make a lasting impact.",
      associatedStrength: StrengthTheme.Significance,
    },
  },
  {
    id: 28,
    statement1: {
      text: "I enjoy tailoring solutions to individual needs.",
      associatedStrength: StrengthTheme.Individualization,
    },
    statement2: {
      text: "I am motivated by following through on my promises.",
      associatedStrength: StrengthTheme.Responsibility,
    },
  },
  {
    id: 29,
    statement1: {
      text: "I thrive on exploring creative and original ideas.",
      associatedStrength: StrengthTheme.Ideation,
    },
    statement2: {
      text: "I enjoy looking back at past events to inform decisions.",
      associatedStrength: StrengthTheme.Context,
    },
  },
  {
    id: 30,
    statement1: {
      text: "I am energized by helping others reach their potential.",
      associatedStrength: StrengthTheme.Developer,
    },
    statement2: {
      text: "I focus on maintaining a clear direction to achieve goals.",
      associatedStrength: StrengthTheme.Focus,
    },
  },
  {
    id: 31,
    statement1: {
      text: "I enjoy taking immediate action to get things moving.",
      associatedStrength: StrengthTheme.Activator,
    },
    statement2: {
      text: "I find satisfaction in ensuring tasks are completed consistently.",
      associatedStrength: StrengthTheme.Consistency,
    },
  },
  {
    id: 32,
    statement1: {
      text: "I am motivated by understanding the emotions of others.",
      associatedStrength: StrengthTheme.Empathy,
    },
    statement2: {
      text: "I enjoy envisioning innovative possibilities for the future.",
      associatedStrength: StrengthTheme.Futuristic,
    },
  },
  {
    id: 33,
    statement1: {
      text: "I thrive on creating systems to keep things organized.",
      associatedStrength: StrengthTheme.Discipline,
    },
    statement2: {
      text: "I am energized by inspiring others with my vision.",
      associatedStrength: StrengthTheme.Communication,
    },
  },
  {
    id: 34,
    statement1: {
      text: "I am energized by deep thinking and reflection.",
      associatedStrength: StrengthTheme.Intellection,
    },
    statement2: {
      text: "I am driven to achieve measurable results.",
      associatedStrength: StrengthTheme.Achiever,
    },
  },
  {
    id: 35,
    statement1: {
      text: "I am motivated by creating innovative strategies to solve problems.",
      associatedStrength: StrengthTheme.Strategic,
    },
    statement2: {
      text: "I enjoy building trust through close relationships.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 36,
    statement1: {
      text: "I thrive on pushing myself to outperform others.",
      associatedStrength: StrengthTheme.Competition,
    },
    statement2: {
      text: "I find joy in fostering cooperation among team members.",
      associatedStrength: StrengthTheme.Harmony,
    },
  },
  {
    id: 37,
    statement1: {
      text: "I enjoy diving deep into data to uncover insights.",
      associatedStrength: StrengthTheme.Analytical,
    },
    statement2: {
      text: "I am energized by helping others grow and succeed.",
      associatedStrength: StrengthTheme.Developer,
    },
  },
  {
    id: 38,
    statement1: {
      text: "I am driven by my strong sense of purpose and values.",
      associatedStrength: StrengthTheme.Belief,
    },
    statement2: {
      text: "I enjoy making others feel included and valued.",
      associatedStrength: StrengthTheme.Includer,
    },
  },
  {
    id: 39,
    statement1: {
      text: "I thrive when taking charge in uncertain situations.",
      associatedStrength: StrengthTheme.Command,
    },
    statement2: {
      text: "I find satisfaction in collecting and sharing knowledge.",
      associatedStrength: StrengthTheme.Input,
    },
  },
  {
    id: 40,
    statement1: {
      text: "I enjoy envisioning what the future could hold.",
      associatedStrength: StrengthTheme.Futuristic,
    },
    statement2: {
      text: "I am motivated by ensuring fairness in all processes.",
      associatedStrength: StrengthTheme.Consistency,
    },
  },
  {
    id: 41,
    statement1: {
      text: "I am energized by solving problems and fixing issues.",
      associatedStrength: StrengthTheme.Restorative,
    },
    statement2: {
      text: "I enjoy engaging others through compelling communication.",
      associatedStrength: StrengthTheme.Communication,
    },
  },
  {
    id: 42,
    statement1: {
      text: "I find joy in learning new things and improving my skills.",
      associatedStrength: StrengthTheme.Learner,
    },
    statement2: {
      text: "I am driven to achieve significant and lasting results.",
      associatedStrength: StrengthTheme.Significance,
    },
  },
  {
    id: 43,
    statement1: {
      text: "I enjoy connecting with others to build new relationships.",
      associatedStrength: StrengthTheme.Woo,
    },
    statement2: {
      text: "I focus on carefully planning before taking action.",
      associatedStrength: StrengthTheme.Deliberative,
    },
  },
  {
    id: 44,
    statement1: {
      text: "I am motivated by staying focused on my priorities.",
      associatedStrength: StrengthTheme.Focus,
    },
    statement2: {
      text: "I enjoy seeing the interconnectedness of ideas and events.",
      associatedStrength: StrengthTheme.Connectedness,
    },
  },
  {
    id: 45,
    statement1: {
      text: "I thrive on turning ideas into excellent outcomes.",
      associatedStrength: StrengthTheme.Maximizer,
    },
    statement2: {
      text: "I am energized by adapting to new challenges.",
      associatedStrength: StrengthTheme.Adaptability,
    },
  },
  {
    id: 46,
    statement1: {
      text: "I enjoy organizing tasks to maximize efficiency.",
      associatedStrength: StrengthTheme.Arranger,
    },
    statement2: {
      text: "I am motivated by my confidence in my own decisions.",
      associatedStrength: StrengthTheme.SelfAssurance,
    },
  },
  {
    id: 47,
    statement1: {
      text: "I find satisfaction in understanding others’ feelings.",
      associatedStrength: StrengthTheme.Empathy,
    },
    statement2: {
      text: "I enjoy exploring new and creative ideas.",
      associatedStrength: StrengthTheme.Ideation,
    },
  },
  {
    id: 48,
    statement1: {
      text: "I am driven by fulfilling my responsibilities reliably.",
      associatedStrength: StrengthTheme.Responsibility,
    },
    statement2: {
      text: "I find joy in reflecting deeply on complex ideas.",
      associatedStrength: StrengthTheme.Intellection,
    },
  },
  {
    id: 49,
    statement1: {
      text: "I enjoy looking to the past to guide my decisions.",
      associatedStrength: StrengthTheme.Context,
    },
    statement2: {
      text: "I am energized by inspiring others with positivity.",
      associatedStrength: StrengthTheme.Positivity,
    },
  },
  {
    id: 50,
    statement1: {
      text: "I thrive on creating order through structured routines.",
      associatedStrength: StrengthTheme.Discipline,
    },
    statement2: {
      text: "I enjoy building meaningful connections with others.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 51,
    statement1: {
      text: "I am motivated by taking action to start projects.",
      associatedStrength: StrengthTheme.Activator,
    },
    statement2: {
      text: "I find satisfaction in understanding historical patterns.",
      associatedStrength: StrengthTheme.Context,
    },
  },
  {
    id: 52,
    statement1: {
      text: "I enjoy finding the best strategies to achieve goals.",
      associatedStrength: StrengthTheme.Strategic,
    },
    statement2: {
      text: "I am energized by uplifting others with enthusiasm.",
      associatedStrength: StrengthTheme.Positivity,
    },
  },
  {
    id: 53,
    statement1: {
      text: "I thrive on competing to achieve top performance.",
      associatedStrength: StrengthTheme.Competition,
    },
    statement2: {
      text: "I enjoy helping others discover their potential.",
      associatedStrength: StrengthTheme.Developer,
    },
  },
  {
    id: 54,
    statement1: {
      text: "I am driven by my core beliefs and values.",
      associatedStrength: StrengthTheme.Belief,
    },
    statement2: {
      text: "I find joy in connecting with new people easily.",
      associatedStrength: StrengthTheme.Woo,
    },
  },
  {
    id: 55,
    statement1: {
      text: "I enjoy leading others with confidence and clarity.",
      associatedStrength: StrengthTheme.Command,
    },
    statement2: {
      text: "I am motivated by learning new skills continuously.",
      associatedStrength: StrengthTheme.Learner,
    },
  },
  {
    id: 56,
    statement1: {
      text: "I find satisfaction in ensuring fairness for all.",
      associatedStrength: StrengthTheme.Consistency,
    },
    statement2: {
      text: "I enjoy envisioning innovative future possibilities.",
      associatedStrength: StrengthTheme.Futuristic,
    },
  },
  {
    id: 57,
    statement1: {
      text: "I am energized by solving complex challenges.",
      associatedStrength: StrengthTheme.Restorative,
    },
    statement2: {
      text: "I thrive on making others feel included and valued.",
      associatedStrength: StrengthTheme.Includer,
    },
  },
  {
    id: 58,
    statement1: {
      text: "I enjoy persuading others with compelling stories.",
      associatedStrength: StrengthTheme.Communication,
    },
    statement2: {
      text: "I am driven to achieve significant results.",
      associatedStrength: StrengthTheme.Significance,
    },
  },
  {
    id: 59,
    statement1: {
      text: "I thrive on adapting to changing circumstances.",
      associatedStrength: StrengthTheme.Adaptability,
    },
    statement2: {
      text: "I enjoy collecting and sharing useful information.",
      associatedStrength: StrengthTheme.Input,
    },
  },
  {
    id: 60,
    statement1: {
      text: "I am motivated by fostering team collaboration.",
      associatedStrength: StrengthTheme.Harmony,
    },
    statement2: {
      text: "I find joy in pursuing ambitious goals.",
      associatedStrength: StrengthTheme.Achiever,
    },
  },
  {
    id: 61,
    statement1: {
      text: "I enjoy tailoring my approach to individual needs.",
      associatedStrength: StrengthTheme.Individualization,
    },
    statement2: {
      text: "I am energized by deep reflection and analysis.",
      associatedStrength: StrengthTheme.Intellection,
    },
  },
  {
    id: 62,
    statement1: {
      text: "I thrive on turning good ideas into excellent outcomes.",
      associatedStrength: StrengthTheme.Maximizer,
    },
    statement2: {
      text: "I enjoy organizing resources for maximum efficiency.",
      associatedStrength: StrengthTheme.Arranger,
    },
  },
  {
    id: 63,
    statement1: {
      text: "I am driven by my confidence in decision-making.",
      associatedStrength: StrengthTheme.SelfAssurance,
    },
    statement2: {
      text: "I find satisfaction in understanding others’ emotions.",
      associatedStrength: StrengthTheme.Empathy,
    },
  },
  {
    id: 64,
    statement1: {
      text: "I enjoy exploring creative solutions to problems.",
      associatedStrength: StrengthTheme.Ideation,
    },
    statement2: {
      text: "I am motivated by fulfilling my commitments.",
      associatedStrength: StrengthTheme.Responsibility,
    },
  },
  {
    id: 65,
    statement1: {
      text: "I find joy in connecting ideas and events.",
      associatedStrength: StrengthTheme.Connectedness,
    },
    statement2: {
      text: "I thrive on creating structured systems.",
      associatedStrength: StrengthTheme.Discipline,
    },
  },
  {
    id: 66,
    statement1: {
      text: "I am energized by analyzing data to make decisions.",
      associatedStrength: StrengthTheme.Analytical,
    },
    statement2: {
      text: "I enjoy leading others through challenges.",
      associatedStrength: StrengthTheme.Command,
    },
  },
  {
    id: 67,
    statement1: {
      text: "I thrive on helping others grow and succeed.",
      associatedStrength: StrengthTheme.Developer,
    },
    statement2: {
      text: "I am motivated by pursuing challenging goals.",
      associatedStrength: StrengthTheme.Achiever,
    },
  },
  {
    id: 68,
    statement1: {
      text: "I enjoy envisioning future possibilities.",
      associatedStrength: StrengthTheme.Futuristic,
    },
    statement2: {
      text: "I find satisfaction in building close relationships.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 69,
    statement1: {
      text: "I am driven to make a lasting impact.",
      associatedStrength: StrengthTheme.Significance,
    },
    statement2: {
      text: "I enjoy collecting and archiving knowledge.",
      associatedStrength: StrengthTheme.Input,
    },
  },
  {
    id: 70,
    statement1: {
      text: "I thrive on competing to achieve top results.",
      associatedStrength: StrengthTheme.Competition,
    },
    statement2: {
      text: "I find joy in carefully planning my actions.",
      associatedStrength: StrengthTheme.Deliberative,
    },
  },
  {
    id: 71,
    statement1: {
      text: "I enjoy connecting with new people easily.",
      associatedStrength: StrengthTheme.Woo,
    },
    statement2: {
      text: "I am motivated by my strong sense of duty.",
      associatedStrength: StrengthTheme.Responsibility,
    },
  },
  {
    id: 72,
    statement1: {
      text: "I find satisfaction in ensuring equitable treatment.",
      associatedStrength: StrengthTheme.Consistency,
    },
    statement2: {
      text: "I enjoy inspiring others with my enthusiasm.",
      associatedStrength: StrengthTheme.Positivity,
    },
  },
  {
    id: 73,
    statement1: {
      text: "I am energized by solving complex problems.",
      associatedStrength: StrengthTheme.Restorative,
    },
    statement2: {
      text: "I thrive on creating strategic plans.",
      associatedStrength: StrengthTheme.Strategic,
    },
  },
  {
    id: 74,
    statement1: {
      text: "I enjoy learning new skills and concepts.",
      associatedStrength: StrengthTheme.Learner,
    },
    statement2: {
      text: "I find joy in fostering team collaboration.",
      associatedStrength: StrengthTheme.Harmony,
    },
  },
  {
    id: 75,
    statement1: {
      text: "I am driven by my core values and beliefs.",
      associatedStrength: StrengthTheme.Belief,
    },
    statement2: {
      text: "I enjoy engaging others through storytelling.",
      associatedStrength: StrengthTheme.Communication,
    },
  },
  {
    id: 76,
    statement1: {
      text: "I thrive on including everyone in the process.",
      associatedStrength: StrengthTheme.Includer,
    },
    statement2: {
      text: "I am motivated by staying focused on my goals.",
      associatedStrength: StrengthTheme.Focus,
    },
  },
  {
    id: 77,
    statement1: {
      text: "I enjoy reflecting deeply on ideas and concepts.",
      associatedStrength: StrengthTheme.Intellection,
    },
    statement2: {
      text: "I find satisfaction in organizing complex tasks.",
      associatedStrength: StrengthTheme.Arranger,
    },
  },
  {
    id: 78,
    statement1: {
      text: "I am energized by adapting to new situations.",
      associatedStrength: StrengthTheme.Adaptability,
    },
    statement2: {
      text: "I thrive on achieving measurable results.",
      associatedStrength: StrengthTheme.Achiever,
    },
  },
  {
    id: 79,
    statement1: {
      text: "I enjoy tailoring solutions to individual needs.",
      associatedStrength: StrengthTheme.Individualization,
    },
    statement2: {
      text: "I am driven to make significant contributions.",
      associatedStrength: StrengthTheme.Significance,
    },
  },
  {
    id: 80,
    statement1: {
      text: "I find joy in envisioning innovative futures.",
      associatedStrength: StrengthTheme.Futuristic,
    },
    statement2: {
      text: "I enjoy solving problems with practical solutions.",
      associatedStrength: StrengthTheme.Restorative,
    },
  },
  {
    id: 81,
    statement1: {
      text: "I thrive on leading with confidence and direction.",
      associatedStrength: StrengthTheme.Command,
    },
    statement2: {
      text: "I am motivated by understanding others’ emotions.",
      associatedStrength: StrengthTheme.Empathy,
    },
  },
  {
    id: 82,
    statement1: {
      text: "I enjoy collecting and sharing useful information.",
      associatedStrength: StrengthTheme.Input,
    },
    statement2: {
      text: "I find satisfaction in fostering collaboration.",
      associatedStrength: StrengthTheme.Harmony,
    },
  },
  {
    id: 83,
    statement1: {
      text: "I am driven by pursuing excellence in my work.",
      associatedStrength: StrengthTheme.Maximizer,
    },
    statement2: {
      text: "I enjoy connecting ideas and events meaningfully.",
      associatedStrength: StrengthTheme.Connectedness,
    },
  },
  {
    id: 84,
    statement1: {
      text: "I thrive on creating order and structure.",
      associatedStrength: StrengthTheme.Discipline,
    },
    statement2: {
      text: "I am energized by competing to win.",
      associatedStrength: StrengthTheme.Competition,
    },
  },
  {
    id: 85,
    statement1: {
      text: "I enjoy taking action to start new initiatives.",
      associatedStrength: StrengthTheme.Activator,
    },
    statement2: {
      text: "I find joy in learning new concepts continuously.",
      associatedStrength: StrengthTheme.Learner,
    },
  },
  {
    id: 86,
    statement1: {
      text: "I am motivated by my strong sense of duty.",
      associatedStrength: StrengthTheme.Responsibility,
    },
    statement2: {
      text: "I enjoy inspiring others with my positive outlook.",
      associatedStrength: StrengthTheme.Positivity,
    },
  },
  {
    id: 87,
    statement1: {
      text: "I thrive on finding the best path to success.",
      associatedStrength: StrengthTheme.Strategic,
    },
    statement2: {
      text: "I am energized by building close relationships.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 88,
    statement1: {
      text: "I enjoy analyzing data to make informed choices.",
      associatedStrength: StrengthTheme.Analytical,
    },
    statement2: {
      text: "I find satisfaction in including everyone.",
      associatedStrength: StrengthTheme.Includer,
    },
  },
  {
    id: 89,
    statement1: {
      text: "I am driven by my confidence in my abilities.",
      associatedStrength: StrengthTheme.SelfAssurance,
    },
    statement2: {
      text: "I enjoy exploring creative ideas and solutions.",
      associatedStrength: StrengthTheme.Ideation,
    },
  },
  {
    id: 90,
    statement1: {
      text: "I find joy in helping others grow and develop.",
      associatedStrength: StrengthTheme.Developer,
    },
    statement2: {
      text: "I thrive on creating structured systems.",
      associatedStrength: StrengthTheme.Discipline,
    },
  },
  {
    id: 91,
    statement1: {
      text: "I enjoy looking to the past for insights.",
      associatedStrength: StrengthTheme.Context,
    },
    statement2: {
      text: "I am motivated by achieving significant results.",
      associatedStrength: StrengthTheme.Significance,
    },
  },
  {
    id: 92,
    statement1: {
      text: "I thrive on connecting with new people.",
      associatedStrength: StrengthTheme.Woo,
    },
    statement2: {
      text: "I enjoy solving complex challenges.",
      associatedStrength: StrengthTheme.Restorative,
    },
  },
  {
    id: 93,
    statement1: {
      text: "I am energized by my core values and beliefs.",
      associatedStrength: StrengthTheme.Belief,
    },
    statement2: {
      text: "I find satisfaction in staying focused on goals.",
      associatedStrength: StrengthTheme.Focus,
    },
  },
  {
    id: 94,
    statement1: {
      text: "I enjoy persuading others with my ideas.",
      associatedStrength: StrengthTheme.Communication,
    },
    statement2: {
      text: "I am driven by pursuing challenging goals.",
      associatedStrength: StrengthTheme.Achiever,
    },
  },
  {
    id: 95,
    statement1: {
      text: "I thrive on ensuring fairness in all processes.",
      associatedStrength: StrengthTheme.Consistency,
    },
    statement2: {
      text: "I enjoy tailoring solutions to individual needs.",
      associatedStrength: StrengthTheme.Individualization,
    },
  },
  {
    id: 96,
    statement1: {
      text: "I am motivated by envisioning future possibilities.",
      associatedStrength: StrengthTheme.Futuristic,
    },
    statement2: {
      text: "I find joy in organizing tasks efficiently.",
      associatedStrength: StrengthTheme.Arranger,
    },
  },
  {
    id: 97,
    statement1: {
      text: "I enjoy leading others through challenges.",
      associatedStrength: StrengthTheme.Command,
    },
    statement2: {
      text: "I am energized by learning new skills.",
      associatedStrength: StrengthTheme.Learner,
    },
  },
  {
    id: 98,
    statement1: {
      text: "I find satisfaction in connecting ideas meaningfully.",
      associatedStrength: StrengthTheme.Connectedness,
    },
    statement2: {
      text: "I thrive on taking immediate action.",
      associatedStrength: StrengthTheme.Activator,
    },
  },
  {
    id: 99,
    statement1: {
      text: "I enjoy reflecting deeply on complex ideas.",
      associatedStrength: StrengthTheme.Intellection,
    },
    statement2: {
      text: "I am driven to make a lasting impact.",
      associatedStrength: StrengthTheme.Significance,
    },
  },
  {
    id: 100,
    statement1: {
      text: "I thrive on solving problems with innovative solutions.",
      associatedStrength: StrengthTheme.Restorative,
    },
    statement2: {
      text: "I enjoy building trust through close relationships.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 101,
    statement1: {
      text: "I am energized by competing to achieve top results.",
      associatedStrength: StrengthTheme.Competition,
    },
    statement2: {
      text: "I find joy in fostering team collaboration.",
      associatedStrength: StrengthTheme.Harmony,
    },
  },
  {
    id: 102,
    statement1: {
      text: "I enjoy collecting and sharing knowledge.",
      associatedStrength: StrengthTheme.Input,
    },
    statement2: {
      text: "I am motivated by ensuring equitable treatment.",
      associatedStrength: StrengthTheme.Consistency,
    },
  },
  {
    id: 103,
    statement1: {
      text: "I thrive on turning ideas into excellent outcomes.",
      associatedStrength: StrengthTheme.Maximizer,
    },
    statement2: {
      text: "I enjoy helping others reach their potential.",
      associatedStrength: StrengthTheme.Developer,
    },
  },
  {
    id: 104,
    statement1: {
      text: "I am driven by my confidence in decision-making.",
      associatedStrength: StrengthTheme.SelfAssurance,
    },
    statement2: {
      text: "I find satisfaction in creating order and structure.",
      associatedStrength: StrengthTheme.Discipline,
    },
  },
  {
    id: 105,
    statement1: {
      text: "I enjoy exploring creative and original ideas.",
      associatedStrength: StrengthTheme.Ideation,
    },
    statement2: {
      text: "I am motivated by fulfilling my responsibilities.",
      associatedStrength: StrengthTheme.Responsibility,
    },
  },
  {
    id: 106,
    statement1: {
      text: "I thrive on analyzing data to make decisions.",
      associatedStrength: StrengthTheme.Analytical,
    },
    statement2: {
      text: "I enjoy connecting with new people easily.",
      associatedStrength: StrengthTheme.Woo,
    },
  },
  {
    id: 107,
    statement1: {
      text: "I am energized by my core values and beliefs.",
      associatedStrength: StrengthTheme.Belief,
    },
    statement2: {
      text: "I find joy in inspiring others with positivity.",
      associatedStrength: StrengthTheme.Positivity,
    },
  },
  {
    id: 108,
    statement1: {
      text: "I enjoy leading with confidence and clarity.",
      associatedStrength: StrengthTheme.Command,
    },
    statement2: {
      text: "I thrive on adapting to new situations.",
      associatedStrength: StrengthTheme.Adaptability,
    },
  },
  {
    id: 109,
    statement1: {
      text: "I find satisfaction in ensuring fairness for all.",
      associatedStrength: StrengthTheme.Consistency,
    },
    statement2: {
      text: "I enjoy exploring new concepts continuously.",
      associatedStrength: StrengthTheme.Learner,
    },
  },
  {
    id: 110,
    statement1: {
      text: "I am motivated by solving complex challenges.",
      associatedStrength: StrengthTheme.Restorative,
    },
    statement2: {
      text: "I thrive on creating strategic plans.",
      associatedStrength: StrengthTheme.Strategic,
    },
  },
  {
    id: 111,
    statement1: {
      text: "I enjoy persuading others with compelling stories.",
      associatedStrength: StrengthTheme.Communication,
    },
    statement2: {
      text: "I find joy in connecting ideas meaningfully.",
      associatedStrength: StrengthTheme.Connectedness,
    },
  },
  {
    id: 112,
    statement1: {
      text: "I thrive on including everyone in the process.",
      associatedStrength: StrengthTheme.Includer,
    },
    statement2: {
      text: "I am driven to achieve measurable results.",
      associatedStrength: StrengthTheme.Achiever,
    },
  },
  {
    id: 113,
    statement1: {
      text: "I enjoy tailoring solutions to individual needs.",
      associatedStrength: StrengthTheme.Individualization,
    },
    statement2: {
      text: "I am energized by envisioning future possibilities.",
      associatedStrength: StrengthTheme.Futuristic,
    },
  },
  {
    id: 114,
    statement1: {
      text: "I find joy in reflecting deeply on ideas.",
      associatedStrength: StrengthTheme.Intellection,
    },
    statement2: {
      text: "I thrive on competing to achieve top results.",
      associatedStrength: StrengthTheme.Competition,
    },
  },
  {
    id: 115,
    statement1: {
      text: "I am motivated by staying focused on my goals.",
      associatedStrength: StrengthTheme.Focus,
    },
    statement2: {
      text: "I enjoy organizing tasks efficiently.",
      associatedStrength: StrengthTheme.Arranger,
    },
  },
  {
    id: 116,
    statement1: {
      text: "I thrive on helping others grow and succeed.",
      associatedStrength: StrengthTheme.Developer,
    },
    statement2: {
      text: "I am driven to make a lasting impact.",
      associatedStrength: StrengthTheme.Significance,
    },
  },
  {
    id: 117,
    statement1: {
      text: "I enjoy looking to the past for insights.",
      associatedStrength: StrengthTheme.Context,
    },
    statement2: {
      text: "I find satisfaction in understanding others’ emotions.",
      associatedStrength: StrengthTheme.Empathy,
    },
  },
  {
    id: 118,
    statement1: {
      text: "I am energized by connecting with new people.",
      associatedStrength: StrengthTheme.Woo,
    },
    statement2: {
      text: "I thrive on creating order and structure.",
      associatedStrength: StrengthTheme.Discipline,
    },
  },
  {
    id: 119,
    statement1: {
      text: "I enjoy taking action to start new initiatives.",
      associatedStrength: StrengthTheme.Activator,
    },
    statement2: {
      text: "I am motivated by my strong sense of duty.",
      associatedStrength: StrengthTheme.Responsibility,
    },
  },
  {
    id: 120,
    statement1: {
      text: "I find joy in fostering team collaboration.",
      associatedStrength: StrengthTheme.Harmony,
    },
    statement2: {
      text: "I am driven by pursuing challenging goals.",
      associatedStrength: StrengthTheme.Achiever,
    },
  },
  {
    id: 121,
    statement1: {
      text: "I enjoy collecting and sharing useful information.",
      associatedStrength: StrengthTheme.Input,
    },
    statement2: {
      text: "I thrive on turning ideas into excellent outcomes.",
      associatedStrength: StrengthTheme.Maximizer,
    },
  },
  {
    id: 122,
    statement1: {
      text: "I am motivated by my confidence in my abilities.",
      associatedStrength: StrengthTheme.SelfAssurance,
    },
    statement2: {
      text: "I enjoy solving problems with innovative solutions.",
      associatedStrength: StrengthTheme.Restorative,
    },
  },
  {
    id: 123,
    statement1: {
      text: "I thrive on analyzing data to make decisions.",
      associatedStrength: StrengthTheme.Analytical,
    },
    statement2: {
      text: "I find satisfaction in building close relationships.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 124,
    statement1: {
      text: "I enjoy exploring creative and original ideas.",
      associatedStrength: StrengthTheme.Ideation,
    },
    statement2: {
      text: "I am energized by inspiring others with positivity.",
      associatedStrength: StrengthTheme.Positivity,
    },
  },
  {
    id: 125,
    statement1: {
      text: "I am driven by my core values and beliefs.",
      associatedStrength: StrengthTheme.Belief,
    },
    statement2: {
      text: "I thrive on creating strategic plans.",
      associatedStrength: StrengthTheme.Strategic,
    },
  },
  {
    id: 126,
    statement1: {
      text: "I enjoy leading with confidence and clarity.",
      associatedStrength: StrengthTheme.Command,
    },
    statement2: {
      text: "I find joy in connecting ideas meaningfully.",
      associatedStrength: StrengthTheme.Connectedness,
    },
  },
  {
    id: 127,
    statement1: {
      text: "I thrive on ensuring fairness in all processes.",
      associatedStrength: StrengthTheme.Consistency,
    },
    statement2: {
      text: "I enjoy helping others reach their potential.",
      associatedStrength: StrengthTheme.Developer,
    },
  },
  {
    id: 128,
    statement1: {
      text: "I am energized by envisioning future possibilities.",
      associatedStrength: StrengthTheme.Futuristic,
    },
    statement2: {
      text: "I find satisfaction in organizing tasks efficiently.",
      associatedStrength: StrengthTheme.Arranger,
    },
  },
  {
    id: 129,
    statement1: {
      text: "I enjoy persuading others with compelling stories.",
      associatedStrength: StrengthTheme.Communication,
    },
    statement2: {
      text: "I am driven to achieve measurable results.",
      associatedStrength: StrengthTheme.Achiever,
    },
  },
  {
    id: 130,
    statement1: {
      text: "I thrive on including everyone in the process.",
      associatedStrength: StrengthTheme.Includer,
    },
    statement2: {
      text: "I enjoy solving complex challenges.",
      associatedStrength: StrengthTheme.Restorative,
    },
  },
  {
    id: 131,
    statement1: {
      text: "I find joy in reflecting deeply on ideas.",
      associatedStrength: StrengthTheme.Intellection,
    },
    statement2: {
      text: "I am motivated by staying focused on my goals.",
      associatedStrength: StrengthTheme.Focus,
    },
  },
  {
    id: 132,
    statement1: {
      text: "I enjoy tailoring solutions to individual needs.",
      associatedStrength: StrengthTheme.Individualization,
    },
    statement2: {
      text: "I thrive on competing to achieve top results.",
      associatedStrength: StrengthTheme.Competition,
    },
  },
  {
    id: 133,
    statement1: {
      text: "I am driven to make a lasting impact.",
      associatedStrength: StrengthTheme.Significance,
    },
    statement2: {
      text: "I enjoy looking to the past for insights.",
      associatedStrength: StrengthTheme.Context,
    },
  },
  {
    id: 134,
    statement1: {
      text: "I thrive on connecting with new people.",
      associatedStrength: StrengthTheme.Woo,
    },
    statement2: {
      text: "I am energized by understanding others’ emotions.",
      associatedStrength: StrengthTheme.Empathy,
    },
  },
  {
    id: 135,
    statement1: {
      text: "I enjoy taking action to start new initiatives.",
      associatedStrength: StrengthTheme.Activator,
    },
    statement2: {
      text: "I find satisfaction in creating order and structure.",
      associatedStrength: StrengthTheme.Discipline,
    },
  },
  {
    id: 136,
    statement1: {
      text: "I am motivated by my strong sense of duty.",
      associatedStrength: StrengthTheme.Responsibility,
    },
    statement2: {
      text: "I thrive on analyzing data to make decisions.",
      associatedStrength: StrengthTheme.Analytical,
    },
  },
  {
    id: 137,
    statement1: {
      text: "I find joy in fostering team collaboration.",
      associatedStrength: StrengthTheme.Harmony,
    },
    statement2: {
      text: "I enjoy exploring creative and original ideas.",
      associatedStrength: StrengthTheme.Ideation,
    },
  },
  {
    id: 138,
    statement1: {
      text: "I am energized by my core values and beliefs.",
      associatedStrength: StrengthTheme.Belief,
    },
    statement2: {
      text: "I thrive on turning ideas into excellent outcomes.",
      associatedStrength: StrengthTheme.Maximizer,
    },
  },
  {
    id: 139,
    statement1: {
      text: "I enjoy collecting and sharing useful information.",
      associatedStrength: StrengthTheme.Input,
    },
    statement2: {
      text: "I am driven by pursuing challenging goals.",
      associatedStrength: StrengthTheme.Achiever,
    },
  },
  {
    id: 140,
    statement1: {
      text: "I thrive on creating strategic plans.",
      associatedStrength: StrengthTheme.Strategic,
    },
    statement2: {
      text: "I enjoy helping others grow and succeed.",
      associatedStrength: StrengthTheme.Developer,
    },
  },
  {
    id: 141,
    statement1: {
      text: "I am motivated by my confidence in my abilities.",
      associatedStrength: StrengthTheme.SelfAssurance,
    },
    statement2: {
      text: "I find satisfaction in connecting ideas meaningfully.",
      associatedStrength: StrengthTheme.Connectedness,
    },
  },
  {
    id: 142,
    statement1: {
      text: "I enjoy leading with confidence and clarity.",
      associatedStrength: StrengthTheme.Command,
    },
    statement2: {
      text: "I thrive on ensuring fairness in all processes.",
      associatedStrength: StrengthTheme.Consistency,
    },
  },
  {
    id: 143,
    statement1: {
      text: "I am energized by envisioning future possibilities.",
      associatedStrength: StrengthTheme.Futuristic,
    },
    statement2: {
      text: "I enjoy persuading others with compelling stories.",
      associatedStrength: StrengthTheme.Communication,
    },
  },
  {
    id: 144,
    statement1: {
      text: "I find joy in reflecting deeply on ideas.",
      associatedStrength: StrengthTheme.Intellection,
    },
    statement2: {
      text: "I thrive on including everyone in the process.",
      associatedStrength: StrengthTheme.Includer,
    },
  },
  {
    id: 145,
    statement1: {
      text: "I enjoy solving complex challenges.",
      associatedStrength: StrengthTheme.Restorative,
    },
    statement2: {
      text: "I am driven to make a lasting impact.",
      associatedStrength: StrengthTheme.Significance,
    },
  },
  {
    id: 146,
    statement1: {
      text: "I thrive on competing to achieve top results.",
      associatedStrength: StrengthTheme.Competition,
    },
    statement2: {
      text: "I enjoy tailoring solutions to individual needs.",
      associatedStrength: StrengthTheme.Individualization,
    },
  },
  {
    id: 147,
    statement1: {
      text: "I am motivated by staying focused on my goals.",
      associatedStrength: StrengthTheme.Focus,
    },
    statement2: {
      text: "I find satisfaction in building close relationships.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 148,
    statement1: {
      text: "I enjoy organizing tasks efficiently.",
      associatedStrength: StrengthTheme.Arranger,
    },
    statement2: {
      text: "I thrive on looking to the past for insights.",
      associatedStrength: StrengthTheme.Context,
    },
  },
  {
    id: 149,
    statement1: {
      text: "I am energized by connecting with new people.",
      associatedStrength: StrengthTheme.Woo,
    },
    statement2: {
      text: "I enjoy exploring new concepts continuously.",
      associatedStrength: StrengthTheme.Learner,
    },
  },
  {
    id: 150,
    statement1: {
      text: "I find joy in fostering team collaboration.",
      associatedStrength: StrengthTheme.Harmony,
    },
    statement2: {
      text: "I am driven by my strong sense of duty.",
      associatedStrength: StrengthTheme.Responsibility,
    },
  },
  {
    id: 151,
    statement1: {
      text: "I enjoy analyzing data to make informed choices.",
      associatedStrength: StrengthTheme.Analytical,
    },
    statement2: {
      text: "I thrive on creating order and structure.",
      associatedStrength: StrengthTheme.Discipline,
    },
  },
  {
    id: 152,
    statement1: {
      text: "I am motivated by pursuing challenging goals.",
      associatedStrength: StrengthTheme.Achiever,
    },
    statement2: {
      text: "I find satisfaction in understanding others’ emotions.",
      associatedStrength: StrengthTheme.Empathy,
    },
  },
  {
    id: 153,
    statement1: {
      text: "I enjoy exploring creative and original ideas.",
      associatedStrength: StrengthTheme.Ideation,
    },
    statement2: {
      text: "I thrive on helping others grow and succeed.",
      associatedStrength: StrengthTheme.Developer,
    },
  },
  {
    id: 154,
    statement1: {
      text: "I am driven by my core values and beliefs.",
      associatedStrength: StrengthTheme.Belief,
    },
    statement2: {
      text: "I enjoy solving complex challenges.",
      associatedStrength: StrengthTheme.Restorative,
    },
  },
  {
    id: 155,
    statement1: {
      text: "I thrive on turning ideas into excellent outcomes.",
      associatedStrength: StrengthTheme.Maximizer,
    },
    statement2: {
      text: "I find joy in connecting ideas meaningfully.",
      associatedStrength: StrengthTheme.Connectedness,
    },
  },
  {
    id: 156,
    statement1: {
      text: "I enjoy persuading others with compelling stories.",
      associatedStrength: StrengthTheme.Communication,
    },
    statement2: {
      text: "I am motivated by staying focused on my goals.",
      associatedStrength: StrengthTheme.Focus,
    },
  },
  {
    id: 157,
    statement1: {
      text: "I thrive on ensuring fairness in all processes.",
      associatedStrength: StrengthTheme.Consistency,
    },
    statement2: {
      text: "I enjoy leading with confidence and clarity.",
      associatedStrength: StrengthTheme.Command,
    },
  },
  {
    id: 158,
    statement1: {
      text: "I am energized by envisioning future possibilities.",
      associatedStrength: StrengthTheme.Futuristic,
    },
    statement2: {
      text: "I find satisfaction in including everyone.",
      associatedStrength: StrengthTheme.Includer,
    },
  },
  {
    id: 159,
    statement1: {
      text: "I enjoy collecting and sharing useful information.",
      associatedStrength: StrengthTheme.Input,
    },
    statement2: {
      text: "I thrive on competing to achieve top results.",
      associatedStrength: StrengthTheme.Competition,
    },
  },
  {
    id: 160,
    statement1: {
      text: "I am motivated by my confidence in my abilities.",
      associatedStrength: StrengthTheme.SelfAssurance,
    },
    statement2: {
      text: "I enjoy tailoring solutions to individual needs.",
      associatedStrength: StrengthTheme.Individualization,
    },
  },
  {
    id: 161,
    statement1: {
      text: "I find joy in reflecting deeply on ideas.",
      associatedStrength: StrengthTheme.Intellection,
    },
    statement2: {
      text: "I am driven to make a lasting impact.",
      associatedStrength: StrengthTheme.Significance,
    },
  },
  {
    id: 162,
    statement1: {
      text: "I thrive on creating strategic plans.",
      associatedStrength: StrengthTheme.Strategic,
    },
    statement2: {
      text: "I enjoy looking to the past for insights.",
      associatedStrength: StrengthTheme.Context,
    },
  },
  {
    id: 163,
    statement1: {
      text: "I am energized by connecting with new people.",
      associatedStrength: StrengthTheme.Woo,
    },
    statement2: {
      text: "I find satisfaction in building close relationships.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 164,
    statement1: {
      text: "I enjoy taking action to start new initiatives.",
      associatedStrength: StrengthTheme.Activator,
    },
    statement2: {
      text: "I thrive on helping others grow and succeed.",
      associatedStrength: StrengthTheme.Developer,
    },
  },
  {
    id: 165,
    statement1: {
      text: "I am motivated by my strong sense of duty.",
      associatedStrength: StrengthTheme.Responsibility,
    },
    statement2: {
      text: "I enjoy exploring new concepts continuously.",
      associatedStrength: StrengthTheme.Learner,
    },
  },
  {
    id: 166,
    statement1: {
      text: "I find joy in fostering team collaboration.",
      associatedStrength: StrengthTheme.Harmony,
    },
    statement2: {
      text: "I thrive on analyzing data to make decisions.",
      associatedStrength: StrengthTheme.Analytical,
    },
  },
  {
    id: 167,
    statement1: {
      text: "I enjoy organizing tasks efficiently.",
      associatedStrength: StrengthTheme.Arranger,
    },
    statement2: {
      text: "I am driven by pursuing challenging goals.",
      associatedStrength: StrengthTheme.Achiever,
    },
  },
  {
    id: 168,
    statement1: {
      text: "I thrive on creating order and structure.",
      associatedStrength: StrengthTheme.Discipline,
    },
    statement2: {
      text: "I enjoy persuading others with compelling stories.",
      associatedStrength: StrengthTheme.Communication,
    },
  },
  {
    id: 169,
    statement1: {
      text: "I am energized by understanding others’ emotions.",
      associatedStrength: StrengthTheme.Empathy,
    },
    statement2: {
      text: "I find satisfaction in connecting ideas meaningfully.",
      associatedStrength: StrengthTheme.Connectedness,
    },
  },
  {
    id: 170,
    statement1: {
      text: "I enjoy solving complex challenges.",
      associatedStrength: StrengthTheme.Restorative,
    },
    statement2: {
      text: "I thrive on including everyone in the process.",
      associatedStrength: StrengthTheme.Includer,
    },
  },
  {
    id: 171,
    statement1: {
      text: "I am driven to make a lasting impact.",
      associatedStrength: StrengthTheme.Significance,
    },
    statement2: {
      text: "I enjoy exploring creative and original ideas.",
      associatedStrength: StrengthTheme.Ideation,
    },
  },
  {
    id: 172,
    statement1: {
      text: "I thrive on competing to achieve top results.",
      associatedStrength: StrengthTheme.Competition,
    },
    statement2: {
      text: "I find satisfaction in staying focused on my goals.",
      associatedStrength: StrengthTheme.Focus,
    },
  },
  {
    id: 173,
    statement1: {
      text: "I enjoy tailoring solutions to individual needs.",
      associatedStrength: StrengthTheme.Individualization,
    },
    statement2: {
      text: "I am motivated by my confidence in my abilities.",
      associatedStrength: StrengthTheme.SelfAssurance,
    },
  },
  {
    id: 174,
    statement1: {
      text: "I find joy in reflecting deeply on ideas.",
      associatedStrength: StrengthTheme.Intellection,
    },
    statement2: {
      text: "I thrive on creating strategic plans.",
      associatedStrength: StrengthTheme.Strategic,
    },
  },
  {
    id: 175,
    statement1: {
      text: "I am energized by envisioning future possibilities.",
      associatedStrength: StrengthTheme.Futuristic,
    },
    statement2: {
      text: "I enjoy leading with confidence and clarity.",
      associatedStrength: StrengthTheme.Command,
    },
  },
  {
    id: 176,
    statement1: {
      text: "I thrive on ensuring fairness in all processes.",
      associatedStrength: StrengthTheme.Consistency,
    },
    statement2: {
      text: "I find satisfaction in building close relationships.",
      associatedStrength: StrengthTheme.Relator,
    },
  },
  {
    id: 177,
    statement1: {
      text: "I enjoy collecting and sharing useful information.",
      associatedStrength: StrengthTheme.Input,
    },
    statement2: {
      text: "I am driven by pursuing challenging goals.",
      associatedStrength: StrengthTheme.Achiever,
    },
  },
];

// Function to retrieve question pairs
function getBasicQuestionPairs(): QuestionPair[] {
  return basicQuestionPairs;
}

// Function to retrieve question pairs
function getFullQuestionPairs(): QuestionPair[] {
  return fullQuestionPairs;
}

// Function to submit a response (for demonstration)
function submitResponse(response: Response): void {
  console.log(
    `Response for Question ${response.questionId}: ${response.selectedOption}`
  );
}

// Example usage
const sampleResponse: Response = {
  questionId: 1,
  selectedOption: ResponseOption.StronglyStatement1,
};

submitResponse(sampleResponse);

export {
  StrengthTheme,
  StrengthDomain,
  type StrengthInfo,
  type Statement,
  type QuestionPair,
  ResponseOption,
  type Response,
  strengthInfoMap,
  getBasicQuestionPairs,
  getFullQuestionPairs,
  submitResponse,
};
