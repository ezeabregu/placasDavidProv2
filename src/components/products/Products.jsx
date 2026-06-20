import {
  ProductsSection,
  ProductsInner,
  SectionEyebrow,
  SectionTitle,
  SectionDivider,
  SubTitle,
  ProductsContainter,
} from "./productsStyles";
import { products, cielorraso } from "../data/Productos";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <ProductsSection id="services">
      <ProductsInner>
        <SectionEyebrow>Catálogo</SectionEyebrow>
        <SectionTitle>Nuestros Productos</SectionTitle>
        <SectionDivider />

        <SubTitle>Placas decorativas</SubTitle>
        <ProductsContainter>
          {products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </ProductsContainter>

        <SubTitle>Cielorraso</SubTitle>
        <ProductsContainter>
          {cielorraso.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </ProductsContainter>
      </ProductsInner>
    </ProductsSection>
  );
};

export default Products;
