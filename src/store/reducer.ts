// ----创建 reducer-------------------------------------------------------
export const CHANGE_TOKEN = "CHANGE_TOKEN"; // 创建一个变量作为类型判断的值，暴露给其它组件使用，可以避免自己输入写错

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_TOKEN:
      return action.token;
    default:
      return state;
  }
};
