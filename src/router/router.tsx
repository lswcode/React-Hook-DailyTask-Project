import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, Page404 } from "pages";
export const RouterCom: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Page404 />} /> {/* 配置404页面 */}
      </Routes>
    </BrowserRouter>
  );
};