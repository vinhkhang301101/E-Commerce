import { updateCartItemAction } from "@/store/cart";
import { currency } from "@/utils";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

export const CartItem = ({ productId, product, quantity }) => {
  const dispatch = useDispatch()
  const inputRef = useRef()

  useEffect(() => {
    if (parseInt(inputRef.current.value) != quantity) {
      inputRef.current.value = quantity
    }
  }, [quantity])

  const onDecrement = () => {
    inputRef.current.value--
    dispatch(
      updateCartItemAction({
        productId,
        quantity: inputRef.current.value,
      })
    );
  };

  const onIncrement = () => {
    inputRef.current.value++
    dispatch(
      updateCartItemAction({
        productId,
        quantity: inputRef.current.value,
      })
    );
  };

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4">
          {/* Image */}
          <a href="./product">
            <img className="img-fluid" src={product.thumbnail_url} alt="..." />
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
                  <span className="text-muted">{currency(product.price)}</span>
                </>
              ) : (
                <span className="text-muted">{currency(product.real_price)}</span>
              )}
            </span>
          </p>
          {/*Footer */}
          <div className="d-flex align-items-center">
            {/* Select */}
            <div className="btn-group btn-quantity">
              <button onClick={onDecrement} className="btn">
                -
              </button>
              <input ref={inputRef} defaultValue={quantity} />
              <button onClick={onIncrement} className="btn">
                +
              </button>
            </div>
            {/* Remove */}
            <a className="font-size-xs text-gray-400 ml-auto" href="#!">
              <i className="fe fe-x" /> Remove
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
