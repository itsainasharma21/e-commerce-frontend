const ProductDescription = ({ product, isActive }) => {
  return (
    <div
      className={`tab-pane ${isActive == 0 ? "fade show active" : ""}`}
      id="description"
      role="tabpanel"
      aria-labelledby="description-tab"
    >
      <div className="product-description">
        <h4>Product Overview</h4>
        <p>{product?.description?.overview}</p>
        {product?.description?.features.length == 0 ? (
          ""
        ) : (
          <>
            <h4>Key Features</h4>
            <ul>
              {product?.description?.features.map((feature, key) => (
                <li key={key}>{feature}</li>
              ))}
            </ul>
          </>
        )}
        {product?.description?.boxContents.length == 0 ? (
          ""
        ) : (
          <>
            <h4>What's in the Box</h4>
            <ul>
              {product?.description?.boxContents.map((boxContent, key) => (
                <li key={key}>{boxContent}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
