import { LoginFormCom } from "components";
import React from "react";
import styles from "./index.module.scss";
export const LoginPage: React.FC = (props) => {
  return (
    <div>
      <h1>Login页面</h1>
      <div className={styles.title}>ccc</div>
      <LoginFormCom></LoginFormCom>
    </div>
  );
};
