import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { useAuth } from "@/hooks/useAuth";
import { useBodyClass } from "@/hooks/useBodyClass";
import { useForm } from "@/hooks/useForm";
import { useQuery } from "@/hooks/useQuery";
import { userService } from "@/services/user";
import { loginAction } from "@/store/auth";
import { confirm, minMax, regexp, required } from "@/utils";
import { handleError } from "@/utils/handleError";
import { message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

export const Auth = () => {
  useBodyClass("bg-light");
  const dispatch = useDispatch();
  const { loginLoading } = useAuth();
  const { loading, refetch: registerService } = useQuery({
    enabled: false,
    queryFn: () =>
      userService.register({
        ...formRegister.values,
        redirect: window.location.origin + window.location.pathname,
      }),
    limitDuration: 1000,
  });

  // const {loading: loginLoading, refetch: loginService} = useQuery({
  //   enabled: false,
  //   queryFn: () => authService.login(formLogin.values),
  //   limitDuration: 1000,
  // })

  const formLogin = useForm({
    username: [required(), regexp("email")],
    password: [required()],
  });

  const formRegister = useForm(
    {
      name: [required()],
      username: [required(), regexp("email")],
      password: [required(), minMax(6, 32)],
      confirmPassword: [required(), confirm("password")],
    },
    {
      dependencies: {
        password: ["confirmPassword"],
      },
    }
  );

  const onRegister = async () => {
    if (formRegister.validate()) {
      try {
        const res = await registerService();
        message.success(res.message);
      } catch (error) {
        handleError(error);
      }
    }
  };

  const onLogin = async () => {
    if (formLogin.validate()) {
      try {
        await dispatch(loginAction(formLogin.values)).unwrap();
        message.success("Login success");
      } catch (err) {
        handleError(err);
      }
    }
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg mb-10 mb-md-0">
              <div className="card-body">
                {/* Heading */}
                <h6 className="mb-7">Returning Customer</h6>
                {/* Form */}
                <div>
                  <div className="row">
                    <div className="col-12">
                      {/* Email */}
                      <Field
                        placeholder="Email Address *"
                        {...formLogin.register("username")}
                      ></Field>
                    </div>
                    <div className="col-12">
                      {/* Password */}
                      <Field
                        placeholder="Password *"
                        type="password"
                        {...formLogin.register("password")}
                      ></Field>
                    </div>
                    <div className="col-12 col-md">
                      {/* Remember */}
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="loginRemember"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="loginRemember"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto">
                      {/* Link */}
                      <div className="form-group">
                        <a
                          className="font-size-sm text-reset"
                          data-toggle="modal"
                          href="#modalPasswordReset"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-md">
                      <div>
                        <p>Tài khoản demo: demo@spacedev.com</p>
                        <p>Mật khẩu demo: Spacedev@123</p>
                      </div>
                    </div>
                    <div className="col-12">
                      {/* Button */}
                      <Button onClick={onLogin} loading={loginLoading}>
                        Sign In
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg">
              <div className="card-body">
                {/* Heading */}
                <h6 className="mb-7">New Customer</h6>
                {/* Form */}
                <div>
                  <div className="row">
                    <div className="col-12">
                      <Field
                        placeholder="Fullname *"
                        {...formRegister.register("name")}
                        value={formRegister.values.name || ""}
                      ></Field>
                    </div>
                    <div className="col-12">
                      {/* Email */}
                      <Field
                        placeholder="Email Address *"
                        {...formRegister.register("username")}
                        value={formRegister.values.username || ""}
                      ></Field>
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Password */}
                      <Field
                        placeholder="Password *"
                        type="password"
                        {...formRegister.register("password")}
                        value={formRegister.values.password || ""}
                      ></Field>
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Password */}
                      <Field
                        placeholder="Confirm Password *"
                        type="password"
                        {...formRegister.register("confirmPassword")}
                        value={formRegister.values.confirmPassword || ""}
                      ></Field>
                    </div>
                    <div className="col-12 col-md-auto">
                      {/* Link */}
                      <div className="form-group font-size-sm text-muted">
                        By registering your details, you agree with our Terms
                        &amp; Conditions, and Privacy and Cookie Policy.
                      </div>
                    </div>
                    <div className="col-12 col-md">
                      {/* Newsletter */}
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="registerNewsletter"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="registerNewsletter"
                          >
                            Sign me up for the Newsletter!
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      {/* Button */}
                      <Button loading={loading} onClick={onRegister}>
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
