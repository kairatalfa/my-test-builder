import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { questions } from "../store/question";
import styles from "./Question.module.css";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={styles.conteiner}>
      {showScore ? (
        <div className={styles.score_section}>
          <div> Вопросов :{questions.length}</div>
          <br />
          <div className={styles.score}> Верно :{score} </div>
          <Link to="/" className={styles.forLainerNone}>
            <Button variant="outlined" color="primary">
              <span className={styles.textGoToHome}> Go To Home</span>
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <Link to="/Option" className={styles.forlinerNone}>
            <Button
              classes={styles.uiButton}
              variant="outlined"
              color="primary"
              className={styles.uiButton}
            >
              <span className={styles.text}>Назад</span>
            </Button>
          </Link>
          <div className={styles.question_section}>
            <div className={styles.question_count}>
              <span>Question{currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className={styles.question_text}>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className={styles.answer_section}>
            {questions[currentQuestion].answerOptions.map((item) => (
              <button
                className={styles.button}
                onClick={() => handleAnswerOptionClick(item.isCorrect)}
              >
                {item.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Question;
