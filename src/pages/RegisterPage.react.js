// @flow

import * as React from "react";

import {
  FormCard,
  FormTextInput,
  FormCheckboxInput,
  StandaloneFormPage,
} from "tabler-react";

import Form from "../components/Form";
import Card from "../components/Card";
import Button from "../components/Button";

export default class RegisterPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { formValues: {} };
  }

  /**
   * Handle form elements's values change
   * @param {*} event
   */
  handleValueChange = (event) => {
    const { formValues } = this.state;
    formValues[event.target.name] = event.target.value;
    this.setState({
      formValues
    }, () => {
      console.log(this.state.formValues);
    });
  }

  /**
   * Handle form submit
   * @param {*} event
   */
  handleFormSubmit = (event) => {
    alert( JSON.stringify(this.state.formValues) );
  }

  render() {
    return (
      <StandaloneFormPage>
        <Form className="card">
          <Card.Body className="p-6">
            <Card.Title RootComponent="div">Create New Account</Card.Title>

            <Form.Group label="Name">
              <Form.Input
                name="Name"
                placeholder="Enter name"
                type="text"
                position="append"
                className={"mb-3"}
                onChange={(e) => { this.handleValueChange(e); }}
              />
            </Form.Group>

            <Form.Group label="Email Address">
              <Form.Input
                name="Email"
                placeholder="Enter Email"
                type="email"
                position="append"
                className={"mb-3"}
                onChange={(e) => { this.handleValueChange(e); }}
              />
            </Form.Group>

            <Form.Group label="Password">
              <Form.Input
                name="Password"
                placeholder="Password"
                type="password"
                position="append"
                className={"mb-3"}
                onChange={(e) => { this.handleValueChange(e); }}
              />
            </Form.Group>

            <Form.Group label="Zip Code">
              <Form.Input
                name="zip"
                placeholder="Enter Zip Code"
                type="text"
                position="append"
                className={"mb-3"}
                onChange={(e) => { this.handleValueChange(e); }}
              />
            </Form.Group>

            <Form.Group>
              <label className="custom-control custom-checkbox">
                <Form.Input
                  name="tnc"
                  type="checkbox"
                  onChange={(e) => { this.handleValueChange(e); }}
                  value="yes"
                />
                <span className="custom-control-label">Agree to the terms and policy</span>
              </label>
            </Form.Group>
            <Form.Footer>
              <Button color="primary" block={true} onClick={(e) => { this.handleFormSubmit(e); }}>Create an account</Button>
            </Form.Footer>
          </Card.Body>
        </Form>
      </StandaloneFormPage>
    );
  }
}