import { logoutAction } from "@/store/auth"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"

export const Checkout = () => {
    const dispatch = useDispatch()
    return (
        <div>
      {/* CONTENT */}
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading */}
              <h3 className="mb-10"></h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              {/* Nav */}
              <nav className="mb-10 mb-md-0">
                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                  <a
                    className="list-group-item list-group-item-action dropright-toggle "
                    href="account-orders.html"
                  >
                    Orders
                  </a>
                  <a
                    className="list-group-item list-group-item-action dropright-toggle "
                    href="account-wishlist.html"
                  >
                    Wishlist
                  </a>
                  <a
                    className="list-group-item list-group-item-action dropright-toggle active"
                    href="account-personal-info.html"
                  >
                    Personal Info
                  </a>
                  <a
                    className="list-group-item list-group-item-action dropright-toggle "
                    href="account-address.html"
                  >
                    Addresses
                  </a>
                  <a
                    className="list-group-item list-group-item-action dropright-toggle "
                    href="account-payment.html"
                  >
                    Payment Methods
                  </a>
                  <a
                    className="list-group-item list-group-item-action dropright-toggle"
                    href="#!"
                  >
                    Logout
                  </a>
                </div>
              </nav>
            </div>
            <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                <Outlet/>
          </div>
          </div>
        </div>
      </section>
    </div>
    )
}