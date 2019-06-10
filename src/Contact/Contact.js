import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    isSent: false,
    buttonText: "Send Message"
  })

  console.log(formData);

  const formSubmit = e => {
      e.preventDefault();
  }
  const handleNameChange = event => {
    setFormData( prevState => {
      return {...prevState, name: event.target.value}
    });
  }

  return (
    <div className="d-flex flex-column align-items-center mt-4 container-fluid">
      <div className="mb-4">
        <h1 className="display-1 p-5">Kontakt</h1>
      </div>
      <div className="col-5 mb-5">
        <form className="d-flex flex-column" onSubmit={(e) => formSubmit(e)}>
          <input type="text" placeholder="Name" name="name" className="contact-input mb-2"
            onChange={handleNameChange}
            value={formData.name}
          />
          <input type="email" placeholder="Email" name="email" className="contact-input mb-2"/>
          <input type="text" placeholder="Phone" name="phone" className="contact-input mb-2"/>
          <textarea name="message" id="" cols="30" rows="6" placeholder="Please write your message here" className="contact-input mb-2"></textarea>
          <button type="submit" className="btn btn-dark w-25 align-self-end">{formData.buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
