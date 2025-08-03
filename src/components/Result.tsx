import React from "react";
import { Container, Card, Table, Alert } from "react-bootstrap";
import { Response, StrengthTheme, strengthInfoMap } from "../data/questions";
import {
  StrengthScore,
  DomainScores,
  getTopStrengths,
  getStrengthsByDomain,
} from "../data/strengths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faLightbulb,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

interface ResultProps {
  responses: Response[];
  useFullQuestionSet?: boolean;
}

const Result: React.FC<ResultProps> = ({
  responses,
  useFullQuestionSet = false,
}) => {
  const topStrengths = getTopStrengths(responses, 5, useFullQuestionSet);
  const strengthsByDomain = getStrengthsByDomain(responses, useFullQuestionSet);

  const generateInsights = () => {
    if (topStrengths.length === 0) {
      return "Complete the assessment to receive personalized insights about your strengths.";
    }

    const insights: string[] = [];
    topStrengths.forEach((strength: StrengthScore, index: number) => {
      const strengthInfo = strengthInfoMap[strength.theme as StrengthTheme];
      const insight = `${strength.theme} (Rank ${index + 1}): ${
        strengthInfo.description
      } Consider leveraging this strength in ${getContextForDomain(
        strength.domain
      )} to maximize your impact.`;
      insights.push(insight);
    });

    return insights.join("\n\n");
  };

  const getContextForDomain = (domain: string) => {
    switch (domain) {
      case "Strategic Thinking":
        return "problem-solving, planning, or decision-making scenarios where innovative and analytical thinking drives success.";
      case "Executing":
        return "tasks or projects that require follow-through, organization, or achieving tangible results.";
      case "Influencing":
        return "leadership roles, presentations, or situations where inspiring and persuading others is key.";
      case "Relationship Building":
        return "team collaborations, mentoring, or fostering connections to build trust and cooperation.";
      default:
        return "various aspects of your personal and professional life.";
    }
  };

  return (
    <Container className="my-4">
      {responses.length === 0 ? (
        <Alert variant="warning">
          <FontAwesomeIcon icon={faStar} className="me-2" />
          No responses provided. Please complete the assessment to view results.
        </Alert>
      ) : (
        <>
          {/* Top Strengths Section */}
          <Card className="mb-4">
            <Card.Header as="h2">
              <FontAwesomeIcon icon={faStar} className="me-2" />
              Your Top 5 Strengths
            </Card.Header>
            <Card.Body>
              {topStrengths.length > 0 ? (
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Strength</th>
                      <th>Domain</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topStrengths.map(
                      (strength: StrengthScore, index: number) => (
                        <tr key={strength.theme}>
                          <td>{index + 1}</td>
                          <td>{strength.theme}</td>
                          <td>{strength.domain}</td>
                          <td>{strength.score}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
              ) : (
                <Alert variant="info">
                  <FontAwesomeIcon icon={faTable} className="me-2" />
                  No strengths calculated. Please ensure responses are valid.
                </Alert>
              )}
            </Card.Body>
          </Card>

          {/* Insights Section */}
          <Card className="mb-4">
            <Card.Header as="h2">
              <FontAwesomeIcon icon={faLightbulb} className="me-2" />
              Your Strengths Insights
            </Card.Header>
            <Card.Body>
              {topStrengths.length > 0 ? (
                <div style={{ whiteSpace: "pre-wrap" }}>
                  {generateInsights()}
                </div>
              ) : (
                <Alert variant="info">
                  <FontAwesomeIcon icon={faLightbulb} className="me-2" />
                  No insights available. Please ensure responses are valid.
                </Alert>
              )}
            </Card.Body>
          </Card>

          {/* Strengths by Domain Section */}
          <Card>
            <Card.Header as="h2">
              <FontAwesomeIcon icon={faTable} className="me-2" />
              Strengths by Domain
            </Card.Header>
            <Card.Body>
              {strengthsByDomain.map((domainScore: DomainScores) => (
                <div key={domainScore.domain} className="mb-4">
                  <h3>{domainScore.domain}</h3>
                  {domainScore.strengths.length > 0 ? (
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Strength</th>
                          <th>Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        {domainScore.strengths.map(
                          (strength: StrengthScore) => (
                            <tr key={strength.theme}>
                              <td>{strength.theme}</td>
                              <td>{strength.score}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </Table>
                  ) : (
                    <Alert variant="info">
                      <FontAwesomeIcon icon={faTable} className="me-2" />
                      No strengths in this domain.
                    </Alert>
                  )}
                </div>
              ))}
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
};

export default Result;
