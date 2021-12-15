import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, Page404, TaskPage } from "pages";
import { AboutPage } from "pages/about/AboutPage";
export const RouterCom: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Page404 />} /> {/* 配置404页面 */}
      </Routes>
    </BrowserRouter>
  );
};
