import request from "./index";
interface UserDataInter {
  account: string;
  password: string;
}

// -------------------用户相关接口-------------------------------------------------------------
// 登录接口
export const loginApi = (userData: UserDataInter): any => {
  return request({
    method: "POST",
    url: "/user/login",
    data: userData,
  });
};
