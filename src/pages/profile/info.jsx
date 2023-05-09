import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
// import { useAuth } from "@/hooks/useAuth";
// import { useForm } from "@/hooks/useForm";
import { logoutAction } from "@/store/auth";
import React from "react";
import { useDispatch } from "react-redux";

export const Info = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();
  // const userForm = useForm({}, { initialValue: user });

  return (
    <div>
      {/* BREADCRUMB */}
      <nav className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Breadcrumb */}
              <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="/">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">My Account</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      {/* CONTENT */}
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading */}
              <h3 className="mb-10">My Account</h3>
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
                    href="/info"
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
                    onClick={(ev) => {
                      ev.preventDefault();
                      dispatch(logoutAction());
                    }}
                    className="list-group-item list-group-item-action dropright-toggle"
                    href="#!"
                  >
                    Logout
                  </a>
                </div>
              </nav>
            </div>
            <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
              {/* Form */}
              <div>
                <div className="row">
                  <div className="col-12">
                    {/* Email */}
                    {/* <Field
                      label="Full Name *"
                      placeholder="Full Name *"
                      {...userForm.register("name")}
                    ></Field> */}
                    <div className="form-group">
                      <label htmlFor="accountFirstName">Full Name *</label>
                      <input
                        className="form-control form-control-sm"
                        id="accountFirstName"
                        type="text"
                        placeholder="Full Name *"
                        defaultValue="Daniel"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    {/* Email */}
                    {/* <Field
                      label="Email Address *"
                      placeholder="Email Address *"
                      {...userForm.register("username")}
                      disabled
                    ></Field> */}
                    <div className="form-group">
                      <label htmlFor="accountEmail">Email Address *</label>
                      <input
                        className="form-control form-control-sm"
                        id="accountEmail"
                        type="email"
                        placeholder="Email Address *"
                        defaultValue="user@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  {/* Password */}
                  <div className="form-group">
                      <label htmlFor="accountPassword">
                        Current Password *
                      </label>
                      <input
                        className="form-control form-control-sm"
                        id="accountPassword"
                        type="password"
                        placeholder="Current Password *"
                        required
                      />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label htmlFor="AccountNewPassword">New Password *</label>
                    <input
                      className="form-control form-control-sm"
                      id="AccountNewPassword"
                      type="password"
                      placeholder="New Password *"
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      className="form-control form-control-sm"
                      type="date"
                      placeholder="dd/mm/yyyy"
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  {/* Gender */}
                  <div className="form-group mb-8">
                    <label>Gender</label>
                    <div className="btn-group-toggle" data-toggle="buttons">
                      <label className="btn btn-sm btn-outline-border active">
                        <input type="radio" name="gender" defaultChecked /> Male
                      </label>
                      <label className="btn btn-sm btn-outline-border">
                        <input type="radio" name="gender" /> Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  {/* Button */}
                  <Button>
                    Save Changes
                  </Button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
