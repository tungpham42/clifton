import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainBrandLogo from "./components/MainBrandLogo";
import Quiz from "./pages/Quiz";

const App: React.FC = () => {
  return (
    <Router>
      <Container className="my-3">
        <MainBrandLogo
          logoSrc="/soft-logo.webp"
          mainDomain="soft.io.vn"
          dismissible={false}
          altText="Logo Soft"
        />
        <div
          style={{
            marginBottom: "1rem",
            fontSize: "0.9rem",
            textAlign: "center",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              marginRight: "1rem",
            }}
          >
            Basic Questions
          </Link>
          <Link to="/full" style={{ color: "#ffffff", textDecoration: "none" }}>
            Full Questions
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Quiz useFullQuestionSet={false} />} />
          <Route path="/full" element={<Quiz useFullQuestionSet={true} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
