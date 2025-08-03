import React, { useState, useEffect } from "react";
import { Alert, Button, Card, Col, Form, Row } from "react-bootstrap";
import {
  ResponseOption,
  Response,
  getBasicQuestionPairs,
  getFullQuestionPairs,
  submitResponse,
  QuestionPair,
} from "../data/questions";
import { randomizeQuestionPairs } from "../utils/randomize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faArrowLeft,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

interface QuestionProps {
  responses: Response[];
  onResponseSubmit: (response: Response) => void;
  onQuizComplete: () => void;
  useFullQuestionSet?: boolean;
}

interface OptionCardProps {
  statement: string;
  questionId: number;
  selectedOption: ResponseOption | null;
  onOptionChange: (value: ResponseOption) => void;
  isStatement1: boolean;
}

const OptionCard: React.FC<OptionCardProps> = ({
  statement,
  questionId,
  selectedOption,
  onOptionChange,
  isStatement1,
}) => {
  const prefix = isStatement1 ? "Statement1" : "Statement2";
  return (
    <Card className="mb-3 h-100">
      <Card.Body>
        <Card.Text>{statement}</Card.Text>
        <div>
          <Form.Check
            type="radio"
            label="Strongly Agree"
            id={`question-strongly-${prefix}-${questionId}`}
            name={`question-${questionId}`}
            value={`Strongly${prefix}`}
            checked={selectedOption === `Strongly${prefix}`}
            onChange={() =>
              onOptionChange(`Strongly${prefix}` as ResponseOption)
            }
            className="mb-2"
          />
          <Form.Check
            type="radio"
            label="Slightly Agree"
            id={`question-slightly-${prefix}-${questionId}`}
            name={`question-${questionId}`}
            value={`Slightly${prefix}`}
            checked={selectedOption === `Slightly${prefix}`}
            onChange={() =>
              onOptionChange(`Slightly${prefix}` as ResponseOption)
            }
          />
        </div>
      </Card.Body>
    </Card>
  );
};

const Question: React.FC<QuestionProps> = ({
  responses,
  onResponseSubmit,
  onQuizComplete,
  useFullQuestionSet = false,
}) => {
  const [questionPairs, setQuestionPairs] = useState<QuestionPair[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<ResponseOption | null>(
    null
  );
  const [alert, setAlert] = useState<{
    message: string;
    variant: "danger" | "success";
  } | null>(null);

  useEffect(() => {
    const pairs = useFullQuestionSet
      ? getFullQuestionPairs()
      : getBasicQuestionPairs();
    setQuestionPairs(randomizeQuestionPairs(pairs));
  }, [useFullQuestionSet]);

  const currentQuestion = questionPairs[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion) {
      const answered = responses.find(
        (r) => r.questionId === currentQuestion.id
      );
      setSelectedOption(answered ? answered.selectedOption : null);
    }
  }, [currentQuestion, responses]);

  const isAnswered = responses.some(
    (response) => response.questionId === currentQuestion?.id
  );

  const handleOptionChange = (value: ResponseOption) => {
    setSelectedOption(value);
    setAlert(null);
  };

  const handleSubmit = () => {
    if (selectedOption && currentQuestion) {
      const response: Response = {
        questionId: currentQuestion.id,
        selectedOption,
      };
      submitResponse(response);

      const existingResponseIndex = responses.findIndex(
        (r) => r.questionId === currentQuestion.id
      );
      if (existingResponseIndex !== -1) {
        onResponseSubmit(response);
      } else {
        onResponseSubmit(response);
      }

      if (currentQuestionIndex < questionPairs.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        setAlert({
          message: "Assessment completed! Check console for responses.",
          variant: "success",
        });
        onQuizComplete();
      }
    } else {
      setAlert({
        message: "Please select an option before proceeding.",
        variant: "danger",
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAlert(null);
    }
  };

  if (!currentQuestion) {
    return (
      <Alert variant="warning">
        <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
        No questions available.
      </Alert>
    );
  }

  return (
    <div>
      {alert && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert(null)}
          dismissible
        >
          <FontAwesomeIcon
            icon={alert.variant === "success" ? faCheck : faQuestionCircle}
            className="me-2"
          />
          {alert.message}
        </Alert>
      )}
      <Card className={isAnswered ? "border-2 border-success bg-light" : ""}>
        <Card.Header as="h2">
          <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
          Question {currentQuestionIndex + 1} of {questionPairs.length}
        </Card.Header>
        <Card.Body>
          <Card.Text>Choose which statement best describes you:</Card.Text>
          <Row className="d-flex align-items-stretch">
            <Col md={6} className="mb-3">
              <OptionCard
                statement={currentQuestion.statement1.text}
                questionId={currentQuestion.id}
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
                isStatement1={true}
              />
            </Col>
            <Col md={6} className="mb-3">
              <OptionCard
                statement={currentQuestion.statement2.text}
                questionId={currentQuestion.id}
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
                isStatement1={false}
              />
            </Col>
          </Row>
          <div className="my-3 d-flex justify-content-center">
            <Form.Check
              type="radio"
              label="Neutral"
              id={`question-neutral-${currentQuestion.id}`}
              name={`question-${currentQuestion.id}`}
              value="Neutral"
              checked={selectedOption === ResponseOption.Neutral}
              onChange={() => handleOptionChange(ResponseOption.Neutral)}
            />
          </div>
          <div className="d-flex justify-content-between">
            <Button
              variant="secondary"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
              Previous
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              <FontAwesomeIcon
                icon={
                  currentQuestionIndex < questionPairs.length - 1
                    ? faArrowRight
                    : faCheck
                }
                className="me-2"
              />
              {currentQuestionIndex < questionPairs.length - 1
                ? "Next"
                : "Finish"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Question;
