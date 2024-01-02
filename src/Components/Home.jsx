import React, { useEffect, useState } from "react";
import ProdCard from "./ProdCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [text, setText] = useState("");

  async function getAllProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    setFilterProducts(data.products);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  function handleSearch() {
    const filterItem = filterProducts.filter((item) =>
      item.title.toLowerCase().includes(text.toLocaleLowerCase())
    );
    setProducts([...filterItem]);
  }

  return (
    <>
      <div className="search-Container">
        <input
          type="text"
          placeholder="Search here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSearch}>&#128269;</button>
      </div>
      <div className="home-container">
        {products?.map((item) => {
          return (
            <ProdCard
              key={item.id}
              thumbnail={item.thumbnail}
              price={item.price}
              title={item.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
