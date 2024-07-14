// ProductList.jsx
import React, { useContext } from 'react';
import Header from './Header';

import { Table } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';

export default function ProductList() {
  const { products, setProducts } = useContext(ProductContext);

  const deleteProduct = (productName) => {
    setProducts(products.filter((product) => product.name !== productName));
  };

  return (
    <div>
      <Header />
      <h1 className="mt-5 text-center ">Product Listing</h1>
      <div className="col-sm-8 offset-sm">
        <Table className="text-center offset-sm-2" striped bordered hover>
          <thead>
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
            {products.length > 0 ? (
              products.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.description}</td>
                  <td>
                    {item.file && (
                      <img
                        src={URL.createObjectURL(item.file)}
                        alt={item.name}
                        width="50"
                      />
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => deleteProduct(item.name)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" >No products available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    
    </div>
  );
}
