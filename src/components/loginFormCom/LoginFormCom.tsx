import React, { useRef } from "react";
import { Form, Input, Button, FormInstance } from "antd";
import styles from "./loginFormCom.module.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
export const LoginFormCom: React.FC<any> = () => {
  const domRef = useRef<FormInstance>(null);
  const loginFun = () => {
    domRef.current
      ?.validateFields()
      .then((value) => {
        console.log("zq", value);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.form}>
      {/* layout设置表单水平或者垂直 */}
      <div className={styles.title}>
        <span>登录 Daily tsak</span>
        <span>目前支持支管理员登录</span>
      </div>
      {/* validateTrigger="onBlur" 设置失去焦点后再触发验证 */}
      <Form layout="horizontal" validateTrigger="onBlur" ref={domRef}>
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "请输入账号！" },
            {
              pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]{7,12}$/,
              message: "账号格式：长度为6-12！",
            },
          ]}
        >
          <Input placeholder="账号" prefix={<UserOutlined />} onPressEnter={loginFun} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "请输入密码！" },
            {
              pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]{7,12}$/,
              message: "密码格式：长度为6-12！",
            },
          ]}
        >
          <Input.Password placeholder="密码" prefix={<LockOutlined />} onPressEnter={loginFun} />
        </Form.Item>
        <Button style={{ width: "100%" }} type="primary" onClick={loginFun}>
          登录
        </Button>
      </Form>
    </div>
  );
};
