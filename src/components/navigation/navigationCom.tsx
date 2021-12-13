import React from "react";
import styles from "./navagationCom.module.scss";
import icon from "assets/img/navigation_icon.png";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeFilled, CopyFilled, GithubFilled } from "@ant-design/icons";
export const NavigationCom: React.FC = () => {
  const handleClick = ({ key }) => {
    console.log(key);
  };
  return (
    <div className={styles.navigation}>
      <Link to="/">
        <div className={styles.left}>
          {" "}
          <img src={icon} alt="图标" />
          <span>Daily.task</span>
        </div>
      </Link>

      <div className={styles.right}>
        <Menu onClick={handleClick} mode="horizontal">
          <Menu.Item key="home" icon={<HomeFilled style={{ fontSize: 20 }} />}>
            主页
          </Menu.Item>
          <Menu.Item key="login" icon={<GithubFilled style={{ fontSize: 20 }} />}>
            登录
          </Menu.Item>
          <Menu.Item key="about" icon={<CopyFilled style={{ fontSize: 20 }} />}>
            介绍
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};
