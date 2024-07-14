// AddProduct.jsx
import React, { useState, useContext } from "react";
import Header from "./Header";
import { ProductContext } from "../context/ProductContext";

export default function AddProduct() {
  const { products, setProducts } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProduct = () => {
    const newProduct = { name, price: parseFloat(price), description, file };

    // Check for duplicate products
    const isDuplicate = products.some((product) => product.name === newProduct.name);
    if (isDuplicate) {
      alert("Product already exists");
      return;
    }

    setProducts([...products, newProduct]); // Update the product list
    setName("");
    setPrice("");
    setDescription("");
    setFile(null);
  };

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3 mt-5">
        <input
          type="text"
          className="form-control mt-5"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="file"
          className="form-control mt-5"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input
          type="number"
          className="form-control mt-5"
          value={price}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || !isNaN(value)) {
              setPrice(value);
            }
          }}
          placeholder="Price"
        />
        <input
          type="text"
          className="form-control mt-5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button onClick={addProduct} className="btn btn-primary mt-3">
          Add Product
        </button>
      </div>
      
    </div>
  );
}
