import { ProductCard } from "../../../entities/product";
import { useGetAllProductsQuery } from "../../../entities/product/api/product-api";

export const ProductList = () => {
  const { data } = useGetAllProductsQuery({});

  return (
    <div>
      {data.map((item: any) => (
        <ProductCard />
      ))}
    </div>
  );
};
