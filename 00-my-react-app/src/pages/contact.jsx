import React, { useState } from "react";
import "./contact.css"

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      alert("Submit Form");
      console.log("submit form", formState);
    }
  };

  const validateEamil = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };
  const handleChange = (event) => {
    if (event.target.name === "email") {
      const isValid = validateEamil(event.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Please enter valid email.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required`);
      } else {
        setErrorMessage("");
      }
      if (!errorMessage) {
        setFormState({ ...formState, [event.target.name]: event.target.value });
        console.log("Handle Form", formState);
      }
    }
  };

  return (
    <div>
      <h1>Contact</h1>
      <form id="contact-form" onSubmit={{handleSubmit}}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label  htmlFor="message">Message: </label>
          <textarea className="message"
            name="message"
            rows="3"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
        <button className="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
