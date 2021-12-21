import { LoginFormCom } from "components";
import React from "react";
import styles from "./loginPage.module.scss";
import { NavigationCom } from "components";
import logo from "assets/img/login_banner.png";
export const LoginPage: React.FC = (props) => {
  return (
    <div className={styles.login}>
      <NavigationCom />
      <div className={styles.left}>
        <span>采用最新的React Hooks开发</span>
        <span>每日打卡，每天坚持一点点，每天进步一点点 </span>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.right}>
        <LoginFormCom document={document.body}></LoginFormCom>
      </div>
    </div>
  );
};
