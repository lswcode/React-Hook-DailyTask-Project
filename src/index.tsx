import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "antd/dist/antd.min.css"; // 要使用antd.min.css替换antd.css，不然会有警告 // 使用customize-cra插件配置了webpack后，不需要再加载全局样式了

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
