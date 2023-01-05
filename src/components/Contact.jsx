import { useState, useRef } from "react";
import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import errormark from "../images/ctc-form-img/close.png";
import checkmark from "../images/ctc-form-img/correct.png";

function Contact() {
  const [sendStatus, setSendStatus] = useState(0);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_5xf97k7",
        "template_1ui72zn",
        form.current,
        "Az8ZNY9A6E_0xMcS7"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSendStatus(response.status);
        },
        (error) => {
          console.log("FAILED...", error);
          setSendStatus(error.status);
        }
      );
  };

  return (
    <Container fluid id="contact" className="contact-me-container">
      {sendStatus === 200 ? (
        <div className="statbox">
          <h1 className="contact-me-title">Contact Us</h1>
          <img className="status-img" src={checkmark} alt="checkmark" />
          <h1>SUCCESS!!</h1>
        </div>
      ) : sendStatus === 400 ? (
        <div className="statbox">
          <h1 className="contact-me-title">Contact Us</h1>
          <img className="status-img" src={errormark} alt="cross" />
          <h1>Oops! Please try again!</h1>
        </div>
      ) : (
        <div>
          <h1 className="contact-me-title">Contact Us</h1>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                name="user_name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="user_email"
                required
              />
              <Form.Text className="text-muted">
                Your email will never be shared with anyone else.
              </Form.Text>
            </Form.Group>

            <FloatingLabel controlId="floatingTextarea2" label="Message">
              <Form.Control
                className="custom-text-area"
                as="textarea"
                placeholder="Leave a message here"
                style={{ height: "100px" }}
                name="message"
                required
              />
            </FloatingLabel>
            <div className="button-wrapper">
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Container>
  );
}

export default Contact;