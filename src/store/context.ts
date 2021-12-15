import { createContext } from "react";

// ----创建 context-------------------------------------------------------
export const GlobalContext = createContext<any>({});
// 将需要传递的数据作为参数调用createContext
