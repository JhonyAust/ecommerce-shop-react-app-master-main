import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product';

const Shop = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  // Take a slice of the first 20 products
  const slicedProducts = products.slice(0, 20);

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {slicedProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
