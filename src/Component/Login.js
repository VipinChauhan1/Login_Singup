import React from "react";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Login() {
  const navigate = useNavigate();


  const validateInput = (_, value) => {
    // Regular expressions for alphabet, numeric, and special characters
    const alphabetRegex = /[a-zA-Z]/;
    const numericRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\\|=-]/;

    // Check if value contains at least one alphabet, one numeric, and one special character
    if (value) {
      if (
        !alphabetRegex.test(value) ||
        !numericRegex.test(value) ||
        !specialCharRegex.test(value)
      ) {
        return Promise.reject(
          " User contain combination of alphanumeric values with special."
        );
      }
    }
    


    return Promise.resolve();
  };

  function navigateTOLogin() {
    console.log("navitage");
    navigate("/singup");
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <h2>Login</h2>
          <span>Sign in to continue</span>
        </div>
        <div className="form-login">
          <div className="form">
            <Form
              autoComplete="off"
              onFinish={(values) => {
                console.log({ values });
              }}
              onFinishFailed={(error) => {
                console.log({ error });
              }}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your input field!" },
                  {
                    validator: validateInput,
                  },
                ]}
                hasFeedback
              >
                <Input className="input-box" placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Password",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("username") !== value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "Username and password should not same."
                      );
                    },
                  }),
                  {
                    validator: validateInput,
                  },
                ]}
                hasFeedback
              >
                <Input.Password className="input-box" placeholder="Password" />
              </Form.Item>

              <div className="form-button">
                <button>Login</button>
              </div>
              <div className="remerber-account">
                <span>Don't have an Account ?</span>
                <span
                  onClick={() => {
                    navigateTOLogin();
                  }}
                >
                  {" "}
                  &nbsp; Singup
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
