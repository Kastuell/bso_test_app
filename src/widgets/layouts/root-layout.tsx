import { Outlet } from "react-router-dom";

import { Layout } from "antd";
import { Header } from "../header";
import { Toaster } from "sonner";

const { Content } = Layout;

export const RootLayout = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Toaster />
    </Layout>
  );
};
