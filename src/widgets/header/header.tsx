import { ShopOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Space } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

const { Header: HeaderAnt } = Layout;
const items = [
  {
    key: "catalog",
    label: "catalog",
    icon: <ShopOutlined />,
  },
  {
    key: "cart",
    label: "cart",
    icon: <ShopOutlined />,
  },
];
export const Header = () => {
  const navigate = useNavigate();

  const onClick = (e: any) => {
    navigate(e.key);
  };

  return (
    <HeaderAnt className={styles.header}>
      <div>Logo</div>
      <Menu
        theme="dark"
        onClick={onClick}
        className={styles.menu}
        mode="horizontal"
        items={items}
      />
      {/* <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80 }}
        icon={<AntDesignOutlined />}
      /> */}
      <Space>
        <Button
          onClick={() => navigate("auth/login")}
          color="primary"
          variant="text"
        >
          Log in
        </Button>
        <Button
          onClick={() => navigate("auth/register")}
          color="primary"
          variant="solid"
        >
          Register
        </Button>
      </Space>
    </HeaderAnt>
  );
};
