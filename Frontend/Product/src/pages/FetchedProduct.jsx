import React, { useState, useEffect } from "react";
import instance from "../api";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import './FetchedPrdocut.css'
function FetchedProduct() {
  const [products, setproducts] = useState([]);
  const [loading,setLoading] = useState(false);
useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await instance.get("api/Product/");
      setproducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);
console.log(products)

  return (
    <>
    <div className="main-container-product">
      {loading ? (
        <TailSpin color="#59000d" radius={"8px"} />
      ) : products.length > 0 ? (
        products.map((product) => (
          <Link key={product._id} className="product-card-outer-container">
            <div className="product-card-container">
              <img
                src={`${instance.defaults.baseURL}/${product.image}`}
                alt="product"
              />
              <p className="product-title">
                <strong>{`${product.name}`}</strong>
              </p>

              <div className="product-card-text">
                <p className="poduct-price">{`${product.price}$`}</p>

                <p className="poduct-description">
                  {product.description.substring(0, 30)}...
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>No products to show</p>
      )}
      
    </div>
    
    </>
  );
}

export default FetchedProduct;
