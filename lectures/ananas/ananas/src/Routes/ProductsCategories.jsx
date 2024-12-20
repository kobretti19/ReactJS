/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductsCategories = () => {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const category = params.categories;
  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
          .then((res) => res.json())
          .then((json) => setProducts(json));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const handleProductId = (value) => {
    navigate(`/product/${value}`);
  };

  return (
    <div className="flex flex-wrap  gap-5 py-10 mx-20   relative  overflow-hidden bg-cover bg-no-repeat ">
      {products?.map((product) => (
        <div
          key={product?.id}
          onClick={() => handleProductId(product?.id)}
          className="flex flex-col justify-around  w-[200px] h-[350px] bg-white bg-blend-overlay rounded-lg shadow-lg px-2 relative cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
        >
          <img className="w-full h-[180px]" src={product?.image} />
          <h3>{product?.title}</h3>
          <span className="text-red-500 text-xl font-bold absolute right-2 top-0">
            {product?.price}$
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProductsCategories;
