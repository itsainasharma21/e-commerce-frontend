import { useState } from "react";
import { getCollection, saveCollection } from "../utils/sessionCollection";
import { v4 as uuidv4 } from "uuid";

const defaultProduct = {
  title: "",
  category: "",
  price: { current: 0, original: 0, discountPercent: 0 },
  stock: { status: "In Stock", count: 0 },
  colors: [],
  sizes: [],
  defaultColor: "",
  defaultSize: "",
  new: false,
  sale: false,
  images: { main: "", zoom: "" },
  rating: { value: 0, count: 0, breakdown: {} },
  description: {
    overview: "",
    features: [],
    boxContents: [],
  },
  specifications: {
    technical: {},
    features: {},
  },
  additionalInfo: [],
  reviews: [],
};

const ProductForm = ({ existingProduct = null, onSave }) => {
  const [product, setProduct] = useState(existingProduct || { ...defaultProduct, id: uuidv4() });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      price: { ...prev.price, [name]: parseFloat(value) || 0 }
    }));
  };

  const handleStockChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      stock: { ...prev.stock, [name]: name === "count" ? parseInt(value) : value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const collection = getCollection();
    const updated = existingProduct
      ? collection.map(p => (p.id === product.id ? product : p))
      : [...collection, product];

    saveCollection(updated);
    onSave?.();
  };

  return (
    <div className="login-register">
      <div className="login-register-wraper">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input className="form-control" name="title" value={product.title} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <input className="form-control" name="category" value={product.category} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Current Price</label>
            <input className="form-control" name="current" type="number" value={product.price.current} onChange={handlePriceChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Original Price</label>
            <input className="form-control" name="original" type="number" value={product.price.original} onChange={handlePriceChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Discount (%)</label>
            <input className="form-control" name="discountPercent" type="number" value={product.price.discountPercent} onChange={handlePriceChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Stock Count</label>
            <input className="form-control" name="count" type="number" value={product.stock.count} onChange={handleStockChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Main Image URL</label>
            <input className="form-control" name="main" value={product.images.main} onChange={(e) => {
              setProduct(prev => ({
                ...prev,
                images: { ...prev.images, main: e.target.value, zoom: e.target.value },
              }));
            }} />
          </div>

          <button className="btn btn-primary" type="submit">
            {existingProduct ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
