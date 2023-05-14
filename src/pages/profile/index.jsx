import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { Portal } from "@/components/Portal";
import { PROFILE_TITLE_ID } from "@/config";
import { useAuthRedux } from "@/hooks/useAuthRedux";
import { useForm } from "@/hooks/useForm";
import { useQuery } from "@/hooks/useQuery";
import { userService } from "@/services/user";
import { setUserAction } from "@/store/auth";
import { confirm, regexp, required, validate } from "@/utils/validate";
import { handleError } from "@/utils/handleError";
import { message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const rules = {
  name: [required()],
  phone: [required(), regexp("phone")],
  currentPassword: [
    (_, forms) => {
      if (forms.newPassword) {
        const errorObj = validate(
          {
            currentPassword: [required()],
          },
          forms
        );
        return errorObj.currentPassword;
      }
    },
  ],
  newPassword: [
    (value, forms) => {
      if (forms.currentPassword) {
        if(forms.currentPassword === value) return "Please enter a different password than the old password !"
        const errorObj = validate(
          {
            newPassword: [required()],
          },
          forms
        );
        return errorObj.newPassword;
      }
    },
  ],
  confirmPassword: [confirm("newPassword")],
};

export const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useAuthRedux();
  const userForm = useForm(rules, { initialValue: user });

  const { loading, refetch: updateProfileService } = useQuery({
    enabled: false,
    queryFn: ({ params }) => userService.updateProfile(...params),
  });

  const {loading: changePasswordLoading, refetch: changePasswordService} = useQuery({
    enabled: false,
    queryFn: ({params}) => {userService.changePassword(...params)}
  })

  const onSubmit = async () => {
    try {
      if (userForm.validate()) {
        const res = await updateProfileService(userForm.values);
        dispatch(setUserAction(res.data));
        message.success("Update profile success");

        if(userForm.values.newPassword){
          await changePasswordService({
            currentPassword: userForm.values.currentPassword,
            newPassword: userForm.values.newPassword
          })

          message.success('Change password success !!!')
        }
      }
    } catch (error) {
      handleError();
    }
  };
  return (
    <div>
      <Portal selector={PROFILE_TITLE_ID}>My Account</Portal>
      <div className="row">
        <div className="col-12">
          <div className="profile-avatar">
            <div className="wrap">
              <img src="../img/avt.png" alt="avatar" />
              <i className="icon">
                <img src="./img/icons/icon-ruler.svg" alt="icon" />
              </i>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Field
            label="Full Name *"
            placeholder="Full Name *"
            {...userForm.register("name")}
          ></Field>
        </div>
        <div className="col-12">
          <Field
            label="Phone Number *"
            placeholder="Phone Number *"
            {...userForm.register("phone")}
          ></Field>
        </div>
        <div className="col-12">
          <Field
            label="Email Address *"
            placeholder="Email Address *"
            {...userForm.register("username")}
            disabled
          ></Field>
        </div>

        <div className="col-12">
          {/* Password */}
            <Field
              type="password"
              label="Current Password *"
              placeholder="Current Password *"
              {...userForm.register("currentPassword")}
            ></Field>
        </div>
        <div className="col-12 col-md-6">
            <Field
              type="password"
              label="New Password *"
              placeholder="New Password *"
              {...userForm.register("newPassword")}
            ></Field>
        </div>
        <div className="col-12 col-md-6">
            <Field
              type="password"
              label="Confirm Password *"
              placeholder="Confirm Password *"
              {...userForm.register("confirmPassword")}
            ></Field>
        </div>
        <div className="col-12 col-lg-6">
            <label>Date of Birth</label>
            <input
              className="form-control form-control-sm"
              type="date"
              placeholder="dd/mm/yyyy"
              required
            />
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
          <Button onClick={onSubmit} loading={loading}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};
