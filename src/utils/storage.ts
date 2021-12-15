//  封装本地存储模块
export const getItem = (name: string) => {
  const data: any = window.localStorage.getItem(name);
  // 为什么把 JSON.parse 放到 try-catch 中？
  // 因为 data 可能不是 JSON 格式字符串
  try {
    return JSON.parse(data); // 尝试把 data 转为 JS 对象
  } catch (err) {
    return data; // data 不是 JSON 格式字符串，直接原样返回
  }
};

export const setItem = (name: string, value: string) => {
  // 如果 value 是对象，就把 value 转为 JSON 格式字符串再存储
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(name, value);
};

export const removeItem = (name: string) => {
  window.localStorage.removeItem(name);
};
