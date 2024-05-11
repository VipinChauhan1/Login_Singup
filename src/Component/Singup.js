import React from "react";
import { Col, Row, Form, Input } from "antd";
import "../App.css";

export default function Singup() {
  const validatePhoneNumber = (_, value) => {
    // Regular expression to match a country code followed by a phone number
    const regex = /^\+\d{1,3}\s?\d{1,14}$/;
    if (value && !regex.test(value)) {
      return Promise.reject(
        "Please enter a valid phone number with country code."
      );
    }
    return Promise.resolve();
  };



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
  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <h2>Create new Account</h2>
        </div>

        <Form
          autoComplete="off"
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Row>
            <Col lg={12} xl={12} md={12} sm={24} xs={24} className="middle">
              <Form.Item
                name="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name",
                  },
                  {
                    pattern: new RegExp(/^[A-Za-z]+$/),
                    message: "Name should contain only Alphabet",
                  },
                ]}
                hasFeedback
              >
                <Input className="input-box" placeholder="NAME" />
              </Form.Item>
              <Form.Item
                name="Phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Phone Number",
                  },
                  {
                    validator: validatePhoneNumber,
                  },
                ]}
                hasFeedback
              >
                <Input className="input-box" placeholder="PHONE NO." />
              </Form.Item>
              <Form.Item
                name="Username"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Username",
                    //   const re = /^[A-Za-z]+$/
                  },
                  {
                    validator: validateInput,
                  },
                ]}
                hasFeedback
              >
                <Input className="input-box" placeholder="Username" />
              </Form.Item>
            </Col>

            <Col lg={12} xl={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                  { type: "email", message: "Please enter a valid email" },
                ]}
                hasFeedback
              >
                <Input className="input-box" placeholder="EMAIL" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                  },

                  {
                    validator: validateInput,
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  className="input-box"
                  placeholder="CREATE NEW PASSWORD"
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two passwords that you entered does not match."
                      );
                    },
                  }),
                ]}

                hasFeedback
              >
                <Input.Password
                  className="input-box"
                  placeholder="CONFIRM NEW PASSWORD"
                />
              </Form.Item>

              <div className="form-button">
                <button>Singup</button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
