import React from "react";

export const ProductCard = () => {
  return (
    <div className="col-6 col-md-4">
      {/* Card */}
      <div className="card mb-7">
        {/* Badge */}
        <div className="card-sale badge badge-dark card-badge card-badge-left text-uppercase">
          - 50%
        </div>
        {/* Image */}
        <div className="card-img">
          {/* Image */}
          <a className="card-img-hover" href="product.html">
            <img
              className="card-img-top card-img-back"
              src="./img/products/product-122.jpg"
              alt="..."
            />
            <img
              className="card-img-top card-img-front"
              src="./img/products/product-7.jpg"
              alt="..."
            />
          </a>
          {/* Actions */}
          <div className="card-actions">
            <span className="card-action"></span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-shopping-cart" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-heart" />
              </button>
            </span>
          </div>
        </div>
        {/* Body */}
        <div className="card-body px-0">
          {/* Category */}
          <div className="font-size-xs">
            <a className="text-muted" href="shop.html">
              Shoes
            </a>
          </div>
          {/* Title */}
          <div className="font-weight-bold">
            <a className="text-body card-product-name" href="product.html">
              Leather Sneakers
            </a>
          </div>
          <div className="card-product-rating">
            5
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              size={14}
              color="#fdd836"
              height={14}
              width={14}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(253, 216, 54)" }}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              size={14}
              color="#fdd836"
              height={14}
              width={14}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(253, 216, 54)" }}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              size={14}
              color="#fdd836"
              height={14}
              width={14}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(253, 216, 54)" }}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              size={14}
              color="#fdd836"
              height={14}
              width={14}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(253, 216, 54)" }}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              size={14}
              color="#fdd836"
              height={14}
              width={14}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(253, 216, 54)" }}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          {/* Price */}
          <div className="card-product-price">
            <span className="text-primary sale">$40.00</span>
            <span className="font-size-xs text-gray-350 text-decoration-line-through">
              $85.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
