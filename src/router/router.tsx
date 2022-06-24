import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

interface Iroute {
  path: string;
  component: React.FC;
  children?: Iroute[];
}

let routeArr: Iroute[] = [
  { path: "/", component: lazy(() => import("pages/home/HomePage")) }, // 使用import导入组件时，组件必须是使用export default格式暴露的，才能被正常接收
  { path: "/login", component: lazy(() => import("pages/login/LoginPage")) },
  { path: "/task", component: lazy(() => import("pages/task/TaskPage")) },
  { path: "/about", component: lazy(() => import("pages/about/AboutPage")) },
  { path: "*", component: lazy(() => import("pages/page404/Page404")) },
];

export const RouterCom = () => (
  <BrowserRouter>
    {/* Suspense用来优化交互体验，配置在组件加载完成前显示的内容，写在fallback中 */}
    <Suspense fallback={<div></div>}>
      {/*   <Routes> 表示唯一匹配，一个路由只会匹配渲染一个组件 */}
      <Routes>
        {routeArr.map((item, index) => (
          <Route key={index} path={item.path} element={<item.component />}></Route>
        ))}
      </Routes>
    </Suspense>
  </BrowserRouter>
);

// ------------------------------------------------------------------------------------------
// import { HomePage, LoginPage, Page404, TaskPage } from "pages";
// import { AboutPage } from "pages/about/AboutPage";
// export const RouterCom: React.FC = () => {
//  这是旧版没有使用路由懒加载的格式
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/task" element={<TaskPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="*" element={<Page404 />} /> {/* 配置404页面 */}
//       </Routes>
//     </BrowserRouter>
//   );
// };
