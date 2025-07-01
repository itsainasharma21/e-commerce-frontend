import { useEffect, useState } from "react";
import { getCollection } from "../utils/sessionCollection";
import { removeProduct } from "../utils/removeProduct";
import ProductForm from "./ProductForm";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(null);

  const refresh = () => setProducts(getCollection());

  useEffect(refresh, []);

  const handleRemove = (id) => {
    removeProduct(id);
    refresh();
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Admin Product Management</h2>

      <ProductForm existingProduct={edit} onSave={() => {
        setEdit(null);
        refresh();
      }} />

      <hr />
      <h4>Product List</h4>
      {products.map((p) => (
        <div key={p.id} className="p-3 border mb-3 rounded">
          <h5>{p.title}</h5>
          <p>₹{p.price.current} <s>₹{p.price.original}</s></p>
          <img src={p.images.main} alt={''} style={{ maxWidth: "150px" }} />
          <div className="mt-2">
            <button className="btn btn-warning btn-sm me-2" onClick={() => setEdit(p)}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => handleRemove(p.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
