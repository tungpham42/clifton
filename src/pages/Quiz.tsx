import React, { useState } from "react";
import Question from "../components/Question";
import Result from "../components/Result";
import {
  Response,
  getBasicQuestionPairs,
  getFullQuestionPairs,
} from "../data/questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

interface QuizProps {
  useFullQuestionSet?: boolean;
}

const Quiz: React.FC<QuizProps> = ({ useFullQuestionSet = false }) => {
  const [responses, setResponses] = useState<Response[]>([]);
  const questionPairs = useFullQuestionSet
    ? getFullQuestionPairs()
    : getBasicQuestionPairs();
  const totalQuestions = questionPairs.length;
  const isQuizComplete = responses.length === totalQuestions;

  const handleResponseSubmit = (response: Response) => {
    setResponses((prev) => {
      const existingResponseIndex = prev.findIndex(
        (r) => r.questionId === response.questionId
      );
      if (existingResponseIndex !== -1) {
        const updatedResponses = [...prev];
        updatedResponses[existingResponseIndex] = response;
        return updatedResponses;
      } else {
        return [...prev, response];
      }
    });
  };

  const handleQuizComplete = () => {
    console.log("Quiz completed! All responses:", responses);
  };

  const handleResetQuiz = () => {
    setResponses([]);
  };

  return (
    <>
      <h1 className="text-center mb-4">
        <FontAwesomeIcon icon={faChartBar} className="me-2" />
        Clifton Strengths Assessment {useFullQuestionSet ? "(Full)" : "(Basic)"}
      </h1>
      {isQuizComplete ? (
        <div>
          <Result responses={responses} />
          <Button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleResetQuiz}
          >
            Reset Quiz
          </Button>
        </div>
      ) : (
        <Question
          responses={responses}
          onResponseSubmit={handleResponseSubmit}
          onQuizComplete={handleQuizComplete}
          useFullQuestionSet={useFullQuestionSet}
        />
      )}
    </>
  );
};

export default Quiz;
