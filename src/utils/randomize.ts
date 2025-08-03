import { QuestionPair } from "../data/questions"; // adjust the path as needed

export function randomizeQuestionPairs(pairs: QuestionPair[]): QuestionPair[] {
  const shuffled = [...pairs];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
