import { currency } from "@/utils";

export const CartItem = ({ product, quantity }) => {
    return (
      <li className="list-group-item">
        <div className="row align-items-center">
          <div className="col-4">
            {/* Image */}
            <a href="./product">
              <img
                className="img-fluid"
                src={product.thumbnail_url}
                alt="..."
              />
            </a>
          </div>
          <div className="col-8">
            {/* Title */}
            <p className="font-size-sm font-weight-bold mb-6">
              <a className="text-body" href="./product">
                {product.name}
              </a>{" "}
              <br />
              <span className="cart-product-price">
                {product.real_price < product.price ? (
                  <>
                    <span className="text-muted">
                      {currency(product.price)}
                    </span>
                  </>
                ) : (
                  <span className="text-muted">{currency(product.real_price)}</span>
                )}
              </span>
            </p>
            {/*Footer */}
            <div className="d-flex align-items-center">
              {/* Select */}
              <select className="custom-select custom-select-xxs w-auto">
                <option value={1}>1</option>
                <option value={1}>2</option>
                <option value={1}>3</option>
              </select>
              {/* Remove */}
              <a className="font-size-xs text-gray-400 ml-auto" href="#!">
                <i className="fe fe-x" /> Remove
              </a>
            </div>
          </div>
        </div>
      </li>
    );
}