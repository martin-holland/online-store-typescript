import { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { calculateTotalOfProducts } from "../utils/utils";
import Product from "./Product";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const totalOfProducts = calculateTotalOfProducts(products);

  return (
    <div>
      <h1>List will be here</h1>
      <h2>{totalOfProducts}</h2>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </div>
  );
};

export default List;
