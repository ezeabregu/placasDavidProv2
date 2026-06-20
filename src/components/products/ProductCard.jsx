import { ProductsCard, CardBody, CardTitle, CardSize } from "./productsStyles";

const ProductCard = ({ img, title, size }) => {
  return (
    <ProductsCard>
      <img src={img} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSize>{size} cm</CardSize>
      </CardBody>
    </ProductsCard>
  );
};

export default ProductCard;
