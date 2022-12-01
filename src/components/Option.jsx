import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Option.module.css";

const Option = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.text}>
        <Button className={styles.Button} variant="contained">
          <span className={styles.color}>Назад</span>
        </Button>
      </Link>
      <Link to="/Question">
        <Button variant="outlined" color="primary">
          <span className={styles.text_button}>Тест по java Script</span>
        </Button>
      </Link>
      <Link to="/TwoOption">
        <Button variant="outlined" color="primary">
          <span className={styles.text_button}>Тест по react</span>
        </Button>
      </Link>
    </div>
  );
};

export default Option;
