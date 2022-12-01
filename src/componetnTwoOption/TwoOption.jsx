import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { questions_2 } from "../store/question_2";
import styles from "./TwoOption.module.css";

const TwoOption = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions_2.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <div className={styles.conteiner}>
        {showScore ? (
          <div className={styles.score_section}>
            <div> Вопросов :{questions_2.length}</div>
            <div className={styles.score}> Верно :{score} </div>
            <Link to="/" className={styles.forLainerNone}>
              <Button variant="outlined" color="primary">
                <span className={styles.textGoToHome}>Go To Home</span>
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/Option" className={styles.text}>
              <Button
                classes={styles.uiButton}
                variant="outlined"
                color="primary"
                className={styles.uiButton}
              >
                <span className={styles.text}>Назад </span>
              </Button>
            </Link>
            <div className={styles.question_section}>
              <div className={styles.question_count}>
                <span>Question{currentQuestion + 1}</span>/{questions_2.length}
              </div>
              <div className={styles.question_text}>
                {questions_2[currentQuestion].questionText}
              </div>
            </div>
            <div className={styles.answer_section}>
              {questions_2[currentQuestion].answerOptions.map((item) => (
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
    </>
  );
};

export default TwoOption;
