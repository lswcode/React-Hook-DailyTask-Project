import React from "react";
import { NavigationCom } from "components";
import styles from "./homePage.module.scss";
import { Button } from "antd";
export const HomePage: React.FC = () => {
  return (
    <div className={styles.home}>
      <NavigationCom />
      <div className={styles.middle}>
        <div>
          <div>Daily.rask</div>
          <div></div>
          <span>每日任务系统</span>
        </div>
        <span>Never give up</span>
        <div>天行健 君子以自强不息</div>
        <div>
          <Button
            type="primary"
            style={{
              backgroundColor: "#165dff",
              height: 50,
              width: 170,
              fontSize: 18,
              color: "#fff",
              borderRadius: 4,
              marginRight: 20,
            }}
          >
            开始使用
          </Button>
          <Button
            style={{
              height: 50,
              width: 100,
              color: "#165dff",
              fontSize: 18,
              borderRadius: 4,
              marginRight: 20,
            }}
          >
            关于
          </Button>
        </div>
      </div>
    </div>
  );
};
