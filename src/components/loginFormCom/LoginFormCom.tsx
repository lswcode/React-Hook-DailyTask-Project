import React, { useContext, useRef, useState } from "react";
import { Form, Input, Button, FormInstance } from "antd";
import styles from "./loginFormCom.module.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { loginApi } from "api/api";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "store/context";
import { setItem } from "utils/storage";
import { CHANGE_TOKEN } from "store/reducer";
const LoginFormComOrigin: React.FC<any> = ({ document }) => {
  const navigation = useNavigate();
  const domRef = useRef<FormInstance>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { token, dispatch } = useContext(GlobalContext);
  const submitFun = () => {
    domRef.current
      ?.validateFields()
      .then((value) => {
        loginFun({ account: value.username, password: value.password });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loginFun = async (value) => {
    console.log(token);
    setIsLoading(true); // 开启按钮loading
    try {
      const { data } = await loginApi(value);
      console.log(data);
      if (data.code === 1) {
        message.success({
          content: data.msg,
          getContainer: () => document, // 使用父组件的document.body，让提示渲染到整个页面中间
        });
        setIsLoading(false); // 关闭按钮loading
        setItem("token", data.token); // 保存token到本地
        dispatch({ type: CHANGE_TOKEN, token: data.token }); // 更新token
        navigation("/task"); //跳转页面
      } else if (data.code === 2) {
        message.warning(data.msg);
        setIsLoading(false); // 关闭按钮loading
      } else if (data.code === 0) {
        message.warning(data.msg);
        setIsLoading(false); // 关闭按钮loading
      }
    } catch (error) {
      message.error("报错：登录失败");
      setIsLoading(false); // 关闭按钮loading
    }
  };
  return (
    <div className={styles.form}>
      {/* layout设置表单水平或者垂直 */}
      <div className={styles.title}>
        <span>登录 Daily tsak</span>
        <span>目前仅支持支管理员登录</span>
      </div>
      {/* validateTrigger="onBlur" 设置失去焦点后再触发验证 */}
      <Form
        layout="horizontal"
        validateTrigger="onBlur"
        ref={domRef}
        initialValues={{ username: "string147", password: "string" }} //使用initialValues来代替defaultValue
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "请输入账号！" },
            {
              pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]{6,12}$/,
              message: "账号格式：长度为6-12！",
            },
          ]}
        >
          <Input placeholder="账号" prefix={<UserOutlined />} onPressEnter={submitFun} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "请输入密码！" },
            {
              pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]{6,12}$/,
              message: "密码格式：长度为6-12！",
            },
          ]}
        >
          <Input.Password placeholder="密码" prefix={<LockOutlined />} onPressEnter={submitFun} />
        </Form.Item>
        <Button style={{ width: "100%" }} type="primary" onClick={submitFun} loading={isLoading}>
          登录
        </Button>
      </Form>
    </div>
  );
};
export const LoginFormCom = React.memo(LoginFormComOrigin);
