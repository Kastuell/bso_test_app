import { ReactNode } from "react";
import styles from "./add.to-cart.module.css";

interface IAddToCart {
  children: ReactNode;
}

export const AddToCart = ({ children }: IAddToCart) => {
  return <div className={styles.wrapper}>{children}</div>;
};
