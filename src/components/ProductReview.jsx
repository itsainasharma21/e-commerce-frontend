import { useState } from "react";

const ProductReview = ({ product, isActive }) => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const reviewCount = product?.reviews.length || 0;

  const ratingCounts = [0, 0, 0, 0, 0, 0];
  let ratingSum = 0;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="bi bi-star-fill" />
        ))}
        {hasHalfStar && <i className="bi bi-star-half" />}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="bi bi-star" />
        ))}
      </>
    );
  };

  product?.reviews.forEach((review) => {
    const r = Math.floor(review.rating);
    ratingCounts[r]++;
    ratingSum += review.rating;
  });

  const averageRating = reviewCount > 0 ? ratingSum / reviewCount : 0;

  return (
    <div
      className={`tab-pane ${isActive == 2 ? "fade show active" : ""}`}
      id="reviews"
      role="tabpanel"
      aria-labelledby="reviews-tab"
    >
      <div className="product-reviews">
        <div className="reviews-summary">
          <div className="overall-rating">
            <div className="rating-number">{averageRating.toFixed(1)}</div>
            <div className="rating-stars">{renderStars(averageRating)}</div>
            <div className="rating-count">
              Based on {product.reviews.length} reviews
            </div>
          </div>
          <div className="rating-breakdown">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = ratingCounts[star];
              const percentage =
                reviewCount > 0 ? (count / reviewCount) * 100 : 0;
              return (
                <div className="rating-bar" key={star}>
                  <div className="rating-label">
                    {star} star{star > 1 && "s"}
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow={percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="rating-count">{count}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="review-form-container">
          <h4>Write a Review</h4>
          <form className="review-form">
            <div className="rating-select mb-4">
              <label className="form-label">Your Rating</label>
              <div className="star-rating">
                <input type="radio" id="star5" name="rating" defaultValue={5} />
                <label htmlFor="star5" title="5 stars">
                  <i className="bi bi-star-fill" />
                </label>
                <input type="radio" id="star4" name="rating" defaultValue={4} />
                <label htmlFor="star4" title="4 stars">
                  <i className="bi bi-star-fill" />
                </label>
                <input type="radio" id="star3" name="rating" defaultValue={3} />
                <label htmlFor="star3" title="3 stars">
                  <i className="bi bi-star-fill" />
                </label>
                <input type="radio" id="star2" name="rating" defaultValue={2} />
                <label htmlFor="star2" title="2 stars">
                  <i className="bi bi-star-fill" />
                </label>
                <input type="radio" id="star1" name="rating" defaultValue={1} />
                <label htmlFor="star1" title="1 star">
                  <i className="bi bi-star-fill" />
                </label>
              </div>
            </div>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="review-name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="review-name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="review-email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="review-email"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="review-title" className="form-label">
                Review Title
              </label>
              <input
                type="text"
                className="form-control"
                id="review-title"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="review-content" className="form-label">
                Your Review
              </label>
              <textarea
                className="form-control"
                id="review-content"
                rows={4}
                required
                defaultValue={""}
              />
              <div className="form-text">
                Tell others what you think about this product. Be honest and
                helpful!
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit Review
              </button>
            </div>
          </form>
        </div>
        <div className="reviews-list mt-5">
          <h4>Customer Reviews</h4>
          {product?.reviews.length > 0 ? (
            product.reviews.slice(0, visibleCount).map((review, key) => (
              <div className="review-item" key={key}>
                <div className="review-header">
                  <div className="reviewer-info">
                    <img
                      src={review.avatar}
                      alt="Reviewer"
                      className="reviewer-avatar"
                    />
                    <div>
                      <h5 className="reviewer-name">{review.name}</h5>
                      <div className="review-date">{review.date}</div>
                    </div>
                  </div>
                  {review.rating > 0 && (
                    <div className="review-rating">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <i className="bi bi-star-fill" key={idx} />
                      ))}
                    </div>
                  )}
                </div>
                <h5 className="review-title">{review.title}</h5>
                <div className="review-content">
                  <p>{review.content}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No Review!</p>
          )}

          {product?.reviews.length > visibleCount && (
            <div className="text-center mt-4">
              <button
                className="btn btn-outline-primary load-more-btn"
                onClick={handleLoadMore}
              >
                Load More Reviews
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
