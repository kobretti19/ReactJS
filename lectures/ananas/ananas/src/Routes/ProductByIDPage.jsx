import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductByIDPage = () => {
  const params = useParams();
  const id = params.id;
  console.log(location);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((json) => setProduct(json));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  console.log(product);

  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-2xl p-6 space-y-6 pb-10 w-2/3 mx-auto my-10 rounded-lg">
      <h2 className="text-2xl">{product?.title}</h2>
      <img className="w-1/5 h-auto" src={product?.image} alt={product?.title} />
      <p className="w-2/3">{product?.description}</p>
      <div className="flex  justify-around w-2/3">
        <p className="text-2xl border-2 p-1 rounded-md text-[#ED8A19]">
          {product?.price}$
        </p>

        <div className="flex flex-row items-center space-x-1">
          <p>ратинг {product?.rating.rate}</p>
          <img
            className="w-4 h-4"
            src="https://www.svgrepo.com/show/13695/star.svg"
            alt=""
          />
          <img
            className="w-4 h-4"
            src="https://www.svgrepo.com/show/13695/star.svg"
            alt=""
          />
          <img
            className="w-4 h-4"
            src="https://www.svgrepo.com/show/13695/star.svg"
            alt=""
          />
          <img
            className="w-4 h-4"
            src="https://www.svgrepo.com/show/13695/star.svg"
            alt=""
          />
          <img
            className="w-4 h-4"
            src="https://www.svgrepo.com/show/13695/star.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductByIDPage;
