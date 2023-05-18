import React from "react";
import { Portal } from "@/components/Portal";
import { PROFILE_TITLE_ID } from "@/config";
import { Link } from "react-router-dom";
import { PATH } from "@/config/path";

export const Address = () => {
  return (
    <>
      <Portal selector={PROFILE_TITLE_ID}>My Address</Portal>
      <div className="row">
        <div className="col-12">
          {/* Card */}
          <div className="card card-lg bg-light mb-8">
            <div className="card-body">
              {/* Text */}
              <p className="font-size-sm mb-0 leading-[35px]">
                <a
                  className="text-body text-xl font-bold "
                  href="./product.html"
                >
                  Đặng Thuyền Vương
                </a>{" "}
                <br />
                <b>Số điện thoại:</b> 123456789 <br />
                <b>Email:</b>dangthuyenvuong@gmail.com
                <br />
                <b>Quận / Huyện:</b> Q1 <br />
                <b>Tỉnh / thành phố:</b> Ho Chi Minh <br />
                <b>Địa chỉ:</b> 123
              </p>
              <div className="card-action-right-bottom">
                <div className="color-success cursor-pointer">
                  Địa chỉ mặc định
                </div>
              </div>
              {/* Action */}
              <div className="card-action card-action-right">
                {/* Button */}
                <Link
                  className="btn btn-xs btn-circle btn-white-primary"
                  to={PATH.Profile.AddressEdit}
                >
                  <i className="fe fe-edit-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          {/* Card */}
          <div className="card card-lg bg-light mb-8">
            <div className="card-body">
              {/* Text */}
              <p className="font-size-sm mb-0 leading-[35px]">
                <Link
                  className="text-body text-xl font-bold "
                  to={PATH.Profile}
                >
                  Đặng Thuyền Vương
                </Link>{" "}
                <br />
                <b>Số điện thoại:</b> 123456789 <br />
                <b>Email:</b>dangthuyenvuong@gmail.com
                <br />
                <b>Quận / Huyện:</b> Q1 <br />
                <b>Tỉnh / thành phố:</b> Ho Chi Minh <br />
                <b>Địa chỉ:</b> 123
              </p>
              {/* Action */}
              <div className="card-action card-action-right gap-2 flex">
                {/* Button */}
                <Link
                  className="btn btn-xs btn-circle btn-white-primary"
                  to={PATH.Profile.AddressEdit}
                >
                  <i className="fe fe-edit-2" />
                </Link>
                {/* Button */}
                <button className="btn btn-xs btn-circle btn-white-primary">
                  <i className="fe fe-x" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          {/* Button */}
          <Link
            className="btn btn-block btn-lg btn-outline-border"
            to={PATH.Profile.AddressEdit}
          >
            Add Address <i className="fe fe-plus" />
          </Link>
        </div>
      </div>
    </>
  );
};
