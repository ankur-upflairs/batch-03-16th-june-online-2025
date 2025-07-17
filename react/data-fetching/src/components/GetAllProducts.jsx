import axios from "axios";
import React, { useEffect, useState } from "react";

function GetAllProducts() {
  const [products, setProducts] = useState([]);
  //if dependency array is blank than useEffect run once (initial loading)
  
  useEffect(() => {
    async function getData() {
      let res = await axios.get("https://dummyjson.com/products");
    //   console.log(res.data.products);
      setProducts(res.data.products); 
    }
    getData();
  }, []); //dependency array
  return (
    <div>
      <div className="container">
        <div className="row row-col-4">
          {products.map((product, index) => {
            return (
              <div key={index} className="col">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={product.thumbnail} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GetAllProducts;
