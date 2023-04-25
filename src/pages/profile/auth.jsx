import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { useBodyClass } from "@/hooks/useBodyClass";
import { useForm } from "@/hooks/useForm";
import { useQuery } from "@/hooks/useQuery";
import { userService } from "@/services/user";
import { confirm, regexp, required } from "@/utils";
import React from "react";

export const Auth = () => {
  useBodyClass("bg-light");
  const { loading, refetch: registerService } = useQuery({
    enabled: false,
    queryFn: () => userService.register(formRegister.values),
  });
  const formRegister = useForm({
    name: [required()],
    username: [required(), regexp("email")],
    password: [required()],
    confirmPassword: [confirm("password")],
  });

  const onRegister = async () => {
    if (formRegister.validate()) {
      try {
        await registerService();
      } catch (error) {
        handleError(error)
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
                <form>
                  <div className="row">
                    <div className="col-12">
                      {/* Email */}
                      <Field placeholder="Email Address *"></Field>
                    </div>
                    <div className="col-12">
                      {/* Password */}
                      <Field placeholder="Password *" type="password"></Field>
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
                    <div className="col-12">
                      {/* Button */}
                      <Button className="btn btn-sm btn-dark">Sign In</Button>
                    </div>
                  </div>
                </form>
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
                      ></Field>
                    </div>
                    <div className="col-12">
                      {/* Email */}
                      <Field
                        placeholder="Email Address *"
                        {...formRegister.register("username")}
                      ></Field>
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Password */}
                      <Field
                        placeholder="Password *"
                        type="password"
                        {...formRegister.register("password")}
                      ></Field>
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Password */}
                      <Field
                        placeholder="Confirm Password *"
                        type="password"
                        {...formRegister.register("confirmPassword")}
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
