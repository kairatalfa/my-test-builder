import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Start.module.css";
const Start = () => {
  return (
    <>
      <Link to="/Option" className={styles.forlinerNone}>
        <Button variant="outlined" color="primary" className={styles.uiButton}>
          <span className={styles.text}>Начать тест</span>
        </Button>
      </Link>
    </>
  );
};

export default Start;
