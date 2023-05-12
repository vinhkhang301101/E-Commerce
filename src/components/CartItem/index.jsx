import { useCart } from "@/hooks/useCart";
import { removeCartItemAction, toggleCheckoutItemAction, updateCartItemAction } from "@/store/cart";
import { currency } from "@/utils";
import { Popconfirm, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Checkbox } from "../Checkbox";
import { Link } from "react-router-dom";
import { PATH } from "@/config/path";

export const CartItem = ({ allowSelect, productId, product, quantity }) => {
  const dispatch = useDispatch();
  const [_quantity, setQuantity] = useState(quantity);
  const { loading } = useCart();
  const _loading = loading[productId] || false;
  const [openPopconfirm, setOpenPopconfirm] = useState(false);
  const [openPopconfirmQuantity, setOpenPopconfirmQuantity] = useState(false);

  useEffect(() => {
    if (_quantity != quantity) {
      setQuantity(quantity);
    }
  }, [quantity]);

  const onDecrement = () => {
    setQuantity(_quantity - 1);
    dispatch(
      updateCartItemAction({
        productId,
        quantity: _quantity - 1,
      })
    );
  };

  const onIncrement = () => {
    setQuantity(_quantity + 1);
    dispatch(
      updateCartItemAction({
        productId,
        quantity: _quantity + 1,
      })
    );
  };

  const onUpdateQuantity = (val) => {
    dispatch(
      updateCartItemAction({
        productId,
        quantity: val,
      })
    );
  };

  const onRemoveCartItem = () => {
    dispatch(removeCartItemAction(productId));
  };

  const onSelectCartItem = (checked) => {
    dispatch(
      toggleCheckoutItemAction({
        productId,
        checked
      })
    );
  }

  return (
    <Spin spinning={_loading}>
      <li className="list-group-item">
        <div className="row align-items-center">
          <div className="col-4 d-flex flex align-items-center gap-2">
            {allowSelect && <Checkbox onChange={onSelectCartItem}/>}
            {/* Image */}
            <Link to={PATH.Product}>
              <img
                className="img-fluid"
                src={product.thumbnail_url}
                alt="..."
              />
            </Link>
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
                  <span className="text-muted">
                    {currency(product.real_price)}
                  </span>
                )}
              </span>
            </p>
            {/*Footer */}
            <div className="d-flex align-items-center">
              {/* Select */}
              <div className="btn-group btn-quantity">
                <Popconfirm
                  open={openPopconfirmQuantity}
                  onOpenChange={(visible) => setOpenPopconfirmQuantity(visible)}
                  disabled={_quantity > 1}
                  okText="Yah Sure!"
                  showCancel={false}
                  placement="bottomRight"
                  title="Alert!"
                  description="Do you want to remove this product?"
                  onConfirm={() => {
                    setOpenPopconfirmQuantity(false);
                    onRemoveCartItem();
                  }}
                >
                  <button
                    onClick={_quantity > 1 ? onDecrement : undefined}
                    className="btn"
                  >
                    -
                  </button>
                </Popconfirm>

                <input
                  value={_quantity}
                  onChange={(ev) => setQuantity(ev.target.value)}
                  onBlur={(ev) => {
                    let val = parseInt(ev.target.value);
                    if (!val) {
                      val = 1;
                      setQuantity(val);
                    }

                    if (val !== quantity) {
                      onUpdateQuantity(val);
                    }
                  }}
                />
                <button onClick={onIncrement} className="btn">
                  +
                </button>
              </div>
              {/* Remove */}
              <Popconfirm
                open={openPopconfirm}
                onOpenChange={(visible) => setOpenPopconfirm(visible)}
                okText="Yah Sure!"
                showCancel={false}
                placement="bottomRight"
                title="Alert!"
                description="Do you want to remove this product?"
                onConfirm={() => {
                  setOpenPopconfirm(false);
                  onRemoveCartItem();
                }}
              >
                <a
                  onClick={(ev) => ev.preventDefault()}
                  className="font-size-xs text-gray-400 ml-auto"
                  href="#!"
                >
                  <i className="fe fe-x" /> Remove
                </a>
              </Popconfirm>
            </div>
          </div>
        </div>
      </li>
    </Spin>
  );
};
