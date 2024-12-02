import { useGetAllProductsQuery } from "../../entities/product/api/product-api";
import { Container } from "../../shared/ui/container";

export const CatalogPage = () => {
  const { data } = useGetAllProductsQuery({});

  return (
    <Container>
      <h1>Catalog Page</h1>
    </Container>
  );
};
