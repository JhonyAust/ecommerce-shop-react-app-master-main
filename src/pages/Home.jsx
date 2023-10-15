import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product'
import Hero from '../components/Hero'
import Carousel from "../components/carousel.component";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  console.log(products);

  // get only men's and women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
    );
    
  });
  const filteredMensProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" 
    );
    
  });
  const filteredWomenProducts = products.filter((item) => {
    return (
      item.category === "women's clothing" 
    );
    
  });

  return (
    <div>
      <Carousel />
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </div>
        <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">Men's Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredMensProducts.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </div>
        </section>
        <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">Women's Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredWomenProducts.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
