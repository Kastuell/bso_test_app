import { Card } from "antd";
import { ShoppingCart, Trash2 } from "lucide-react";

const actions = [<ShoppingCart />, <Trash2 />];

export const ProductCard = () => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={actions}
    ></Card>
  );
};
