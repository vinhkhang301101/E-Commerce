import { Paginate } from "@/components/Paginate";
import { ProductCard, ProductCardLoading } from "@/components/ProductCard";
import { useQuery } from "@/hooks/useQuery";
import { productService } from "@/services/product";
import { Skeleton } from "antd";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export const Product = () => {
  const [search] = useSearchParams();
  const currentPage = parseInt(search.get("page") || 1);
  const { data, loading } = useQuery({
    queryKey: [currentPage],
    keepPreviousData: true,
    queryFn: () =>
      productService.getProduct(
        `?fields=name,real_price,price,categories,slug,id,images,discount_rate,rating_average,review_count&page=${currentPage}`
      ),
  });

  const { data: categories, loading: categoryLoading } = useQuery({
    queryFn: () => productService.getCategories()
  })

  return (
    <section className="py-11">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            {/* Filters */}
            <form className="mb-10 mb-md-0">
              <ul className="nav nav-vertical" id="filterNav">
                <li className="nav-item">
                  {/* Toggle */}
                  <a
                    className="nav-link font-size-lg text-reset border-bottom mb-6"
                    href="#categoryCollapse"
                  >
                    Category
                  </a>
                  {/* Collapse */}
                  <div>
                    <div className="form-group">
                      <ul className="list-styled mb-0" id="productsNav">
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="#">
                            All Products
                          </a>
                        </li>
                        {categoryLoading
                          ? Array.from(Array(10)).map((_, i) => (
                              <li key={i} className="list-styled-item">
                                {/* Toggle */}
                                <a
                                  className="list-styled-link"
                                  href="#"
                                >
                                  <Skeleton height={24} />
                                </a>
                              </li>
                            ))
                          : categories.data.map(e => {
                              <li key={e.id} className="list-styled-item">
                                {/* Toggle */}
                                <Link
                                  className="list-styled-link font-bold"
                                  to="#"
                                >
                                  {e.title}
                                </Link>
                              </li>;
                            })}
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <a
                    className="nav-link font-size-lg text-reset border-bottom mb-6"
                    href="#seasonCollapse"
                  >
                    Rating
                  </a>
                  {/* Collapse */}
                  <div>
                    <div
                      className="form-group form-group-overflow mb-6"
                      id="seasonGroup"
                    >
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="seasonOne"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="seasonOne"
                        >
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
                          <span className="text-small">from 5 star</span>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="seasonTwo"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="seasonOne"
                        >
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
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width={14}
                            height={14}
                            viewBox="0 0 12 12"
                            className="star-icon"
                          >
                            <g fill="none" fillRule="evenodd">
                              <path
                                fill="#b8b8b8"
                                transform="matrix(-1 0 0 1 11 1)"
                                d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                              />
                              <path
                                fill="#b8b8b8"
                                transform="translate(1 1)"
                                d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                              />
                            </g>
                          </svg>
                          <span className="text-small">from 4 star</span>
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="seasonThree"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="seasonOne"
                        >
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
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width={14}
                            height={14}
                            viewBox="0 0 12 12"
                            className="star-icon"
                          >
                            <g fill="none" fillRule="evenodd">
                              <path
                                fill="#b8b8b8"
                                transform="matrix(-1 0 0 1 11 1)"
                                d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                              />
                              <path
                                fill="#b8b8b8"
                                transform="translate(1 1)"
                                d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                              />
                            </g>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width={14}
                            height={14}
                            viewBox="0 0 12 12"
                            className="star-icon"
                          >
                            <g fill="none" fillRule="evenodd">
                              <path
                                fill="#b8b8b8"
                                transform="matrix(-1 0 0 1 11 1)"
                                d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                              />
                              <path
                                fill="#b8b8b8"
                                transform="translate(1 1)"
                                d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                              />
                            </g>
                          </svg>
                          <span className="text-small">from 3 star</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <a
                    className="nav-link font-size-lg text-reset border-bottom mb-6"
                    data-toggle="collapse"
                    href="#priceCollapse"
                  >
                    Price
                  </a>
                  {/* Collapse */}
                  <div>
                    {/* Range */}
                    <div className="d-flex align-items-center">
                      {/* Input */}
                      <input
                        type="number"
                        className="form-control form-control-xs"
                        placeholder="$10.00"
                        min={10}
                      />
                      {/* Divider */}
                      <div className="text-gray-350 mx-2">‒</div>
                      {/* Input */}
                      <input
                        type="number"
                        className="form-control form-control-xs"
                        placeholder="$350.00"
                        max={350}
                      />
                    </div>
                    <button className="btn btn-outline-dark btn-block mt-5">
                      Apply
                    </button>
                  </div>
                </li>
              </ul>
            </form>
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            {/* Slider */}
            <div className="flickity-page-dots-inner mb-9" data-flickity="{&quot;pageDots&quot;: true}">
                {/* Item */}
                <div className="w-100">
                  <div className="card bg-h-100 bg-left" style={{backgroundImage: 'url(./img/covers/cover-24.jpg)'}}>
                    <div className="row" style={{minHeight: '400px'}}>
                      <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                        <div className="card-body px-md-10 py-11">
                          {/* Heading */}
                          <h4>
                            2019 Best Seller
                          </h4>
                          {/* Button */}
                          <a className="btn btn-link px-0 text-body" href="shop.html">
                            View Collection <i className="fe fe-arrow-right ml-2" />
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover" style={{backgroundImage: 'url(./img/covers/cover-23.jpg)'}} />
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="w-100">
                  <div
                    className="card bg-cover"
                    style={{ backgroundImage: "url(./img/covers/cover-29.jpg)" }}
                  >
                    <div
                      className="row align-items-center"
                      style={{ minHeight: "400px" }}
                    >
                      <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                        <div className="card-body px-md-10 py-11">
                          {/* Heading */}
                          <h4 className="mb-5">
                            Get -50% from Summer Collection
                          </h4>
                          {/* Text */}
                          <p className="mb-7">
                            New functions, features and experiences. <br />
                            <strong className="text-primary">
                              Use code 4GF5SD
                            </strong>
                          </p>
                          {/* Button */}
                          <a className="btn btn-outline-dark" href="shop.html">
                            Shop Now <i className="fe fe-arrow-right ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="w-100">
                  <div
                    className="card bg-cover"
                    style={{ backgroundImage: "url(./img/covers/cover-30.jpg)" }}
                  >
                    <div
                      className="row align-items-center"
                      style={{ minHeight: "400px" }}
                    >
                      <div className="col-12">
                        <div className="card-body px-md-10 py-11 text-center text-white">
                          {/* Preheading */}
                          <p className="text-uppercase">Enjoy an extra</p>
                          {/* Heading */}
                          <h1 className="display-4 text-uppercase">50% off</h1>
                          {/* Link */}
                          <a
                            className="link-underline text-reset"
                            href="shop.html"
                          >
                            Shop Collection
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              {/* Header */}
              <div className="row align-items-center mb-7">
                <div className="col-12 col-md">
                  {/* Heading */}
                  <h3 className="mb-1">Mouse</h3>
                  {/* Breadcrumb */}
                  <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
                    <li className="breadcrumb-item">
                      <a className="text-gray-400" href="/">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Mouse</li>
                  </ol>
                </div>
                <div className="col-12 col-md-auto">
                  {/* Select */}
                  <select className="custom-select custom-select-xs">
                    <option selected>Price Decrease</option>
                    <option selected>Price Increase</option>
                    <option selected>Newest</option>
                    <option selected>Most Discount</option>
                  </select>
                </div>
              </div>
              <h4 className="mb-5">Searching for `Mouse`</h4>
              {/* Products */}
              <div className="row">
                {loading
                  ? Array.from(Array(15)).map((_, i) => (
                      <ProductCardLoading key={i} />
                    ))
                  : data.data.map((e) => <ProductCard key={e.id} {...e} />)}
              </div>
              {/* Pagination */}
              <Paginate totalPage={data?.paginate?.totalPage}></Paginate>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
