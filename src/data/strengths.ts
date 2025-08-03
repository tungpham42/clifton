import {
  StrengthTheme,
  StrengthDomain,
  Response,
  ResponseOption,
  strengthInfoMap,
  getBasicQuestionPairs,
  getFullQuestionPairs,
} from "./questions";

// Define the structure for a strength score
interface StrengthScore {
  theme: StrengthTheme;
  score: number;
  domain: StrengthDomain;
}

// Scoring values for each response option
const RESPONSE_SCORES: Record<ResponseOption, number> = {
  [ResponseOption.StronglyStatement1]: 2,
  [ResponseOption.SlightlyStatement1]: 1,
  [ResponseOption.Neutral]: 0,
  [ResponseOption.SlightlyStatement2]: 1,
  [ResponseOption.StronglyStatement2]: 2,
};

// Function to calculate strength scores based on responses
function calculateStrengthScores(
  responses: Response[],
  useFullQuestionSet: boolean = false
): StrengthScore[] {
  // Initialize scores for each strength theme
  const scores: Record<StrengthTheme, number> = Object.values(
    StrengthTheme
  ).reduce(
    (acc, theme) => ({
      ...acc,
      [theme]: 0,
    }),
    {} as Record<StrengthTheme, number>
  );

  // Get question pairs to map responses to strengths
  const questionPairs = useFullQuestionSet
    ? getFullQuestionPairs()
    : getBasicQuestionPairs();

  // Process each response
  responses.forEach((response) => {
    const question = questionPairs.find((q) => q.id === response.questionId);
    if (!question) return;

    const { statement1, statement2 } = question;
    let themeToScore: StrengthTheme | null = null;
    let scoreValue: number = 0;

    switch (response.selectedOption) {
      case ResponseOption.StronglyStatement1:
        themeToScore = statement1.associatedStrength;
        scoreValue = RESPONSE_SCORES[ResponseOption.StronglyStatement1];
        break;
      case ResponseOption.SlightlyStatement1:
        themeToScore = statement1.associatedStrength;
        scoreValue = RESPONSE_SCORES[ResponseOption.SlightlyStatement1];
        break;
      case ResponseOption.SlightlyStatement2:
        themeToScore = statement2.associatedStrength;
        scoreValue = RESPONSE_SCORES[ResponseOption.SlightlyStatement2];
        break;
      case ResponseOption.StronglyStatement2:
        themeToScore = statement2.associatedStrength;
        scoreValue = RESPONSE_SCORES[ResponseOption.StronglyStatement2];
        break;
      case ResponseOption.Neutral:
        // Neutral responses contribute no score
        break;
    }

    if (themeToScore) {
      scores[themeToScore] += scoreValue;
    }
  });

  // Convert scores to StrengthScore array and sort by score (descending)
  const strengthScores: StrengthScore[] = Object.entries(scores)
    .map(([theme, score]) => ({
      theme: theme as StrengthTheme,
      score,
      domain: strengthInfoMap[theme as StrengthTheme].domain,
    }))
    .sort((a, b) => b.score - a.score);

  return strengthScores;
}

// Function to get top N strengths (default 5, as per CliftonStrengths)
function getTopStrengths(
  responses: Response[],
  count: number = 5,
  useFullQuestionSet: boolean = false
): StrengthScore[] {
  const scores = calculateStrengthScores(responses, useFullQuestionSet);
  return scores.slice(0, count);
}

// Function to get strengths grouped by domain
interface DomainScores {
  domain: StrengthDomain;
  strengths: StrengthScore[];
}

function getStrengthsByDomain(
  responses: Response[],
  useFullQuestionSet: boolean = false
): DomainScores[] {
  const scores = calculateStrengthScores(responses, useFullQuestionSet);
  const domains = Object.values(StrengthDomain);

  return domains.map((domain) => ({
    domain,
    strengths: scores.filter((score) => score.domain === domain),
  }));
}

export {
  type StrengthScore,
  type DomainScores,
  calculateStrengthScores,
  getTopStrengths,
  getStrengthsByDomain,
};
