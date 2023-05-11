import { Portal } from "@/components/Portal";
import { PROFILE_TITLE_ID } from "@/config";
import React from "react";

export const Profile = () => {
  return (
    <>
      <Portal selector={PROFILE_TITLE_ID}>My Account</Portal>
      <div className="row">
        <div className="col-12">
          {/* Email */}
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
          <div className="form-group">
            <label htmlFor="accountEmail">Email Address *</label>
            <input
              disabled
              className="form-control form-control-sm"
              id="accountEmail"
              type="email"
              placeholder="Email Address *"
              defaultValue="user@email.com"
              required
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Password */}
          <div className="form-group">
            <label htmlFor="accountPassword">Current Password *</label>
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
          <button className="btn btn-dark" type="submit">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};
