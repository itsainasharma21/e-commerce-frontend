const ProductSpecification = ({ product, isActive }) => {
  return (
    <div
      className={`tab-pane ${isActive == 1 ? "fade show active" : ""}`}
      id="specifications"
      role="tabpanel"
      aria-labelledby="specifications-tab"
    >
      <div className="product-specifications">
        <div className="specs-group">
          <h4>Technical Specifications</h4>
          <div className="specs-table">
            {Object.entries(product?.specifications?.technical).map(
              ([key, value]) => (
                <div className="specs-row" key={key}>
                  <div className="specs-label">{key}</div>
                  <div className="specs-value">{value}</div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="specs-group">
          <h4>Features</h4>
          <div className="specs-table">
            {Object.entries(product?.specifications?.features).map(
              ([key, value]) => (
                <div className="specs-row" key={key}>
                  <div className="specs-label">{key}</div>
                  <div className="specs-value">{value}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecification;
