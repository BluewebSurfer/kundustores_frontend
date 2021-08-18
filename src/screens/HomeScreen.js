import React, { useEffect } from "react";
import Product from "../components/Product";
import MessageBox from "../components/MessageBox.js";
import LoadingBox from "../components/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Head from "../components/Head";
import Cards from "../components/Cards";
import { Navbar } from "react-bootstrap";
// import Slider from "../components/Slider";


export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log(products)



  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
    {/* <img src="images/p3.png" alt="image" className="homepic"/>   */}
    
    <Head />
    <Navbar />
    <Cards />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// export default HomeScreen;
