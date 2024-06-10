import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import AppRoutes from "./routes";
import { AppContextProvider } from "./context";
import { ConfigProvider } from "antd";
import { SmileOutlined } from "@ant-design/icons";
const customizeRenderEmpty = () => (
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <SmileOutlined
      style={{
        fontSize: 20,
      }}
    />
    <p>فارغ</p>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <ConfigProvider
   theme={{
    Carousel: {dotHeight:10,dotWidth:50}
   }}
   renderEmpty={customizeRenderEmpty}
   direction="rtl">
  <AppContextProvider>
    <AppRoutes />
  </AppContextProvider>
  </ConfigProvider>
);
