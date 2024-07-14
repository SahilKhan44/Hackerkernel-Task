// SearchProduct.jsx
import React, { useContext, useState } from "react";
import Header from "./Header";
import { Table } from "react-bootstrap";
import { ProductContext } from '../context/ProductContext';


export default function SearchProduct() {
  const { products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <h1 className="mt-5 text-center">Product Listing</h1>
      <div className="col-sm-6 offset-sm-3 mt-5">
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control text-center"
          placeholder="Search Product"
        />
      </div>
      <div className="col-sm-8 offset-sm-2 mt-5">
        <Table className="text-center w-100" striped bordered hover>
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No Product Found
                </td>
              </tr>
            ) : (
              filteredProducts.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    {item.file && (
                      <img src={URL.createObjectURL(item.file)} alt={item.name} width="50" />
                    )}
                  </td>
                  <td>
                    <button className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    
    </div>
  );
}
