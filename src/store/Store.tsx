import React, { useReducer } from "react";
import { GlobalContext } from "./context";
import { reducer } from "./reducer";
import { getItem } from "utils/storage";
export const Store: React.FC = (props) => {
  const [token, dispatch] = useReducer(reducer, { token: getItem("token") }); // useReducer的第一个参数就是处理数据的函数，第二个参数是初始的数据值
  // 使用props.children 将传递过来的两个组件内容作为当前组件的内容，显示在页面中
  return (
    <GlobalContext.Provider value={{ token, dispatch }}>{props.children}</GlobalContext.Provider>
    // 使用props.children获取被Store包裹的组件，然后让这些组件被GlobalContext.Provider包裹
  );
};
