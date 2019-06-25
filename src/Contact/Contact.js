import React, { useState } from "react";
import axios from 'axios';
import "./Contact.css";
import Loader from 'react-loader-spinner';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    sending: false,
    buttonText: "Send Message"
  });

  const formSubmit = async e => {
      e.preventDefault();

      setFormData( prevState => {
        return { ...prevState, sending: true, buttonText: "Sending"}
      });

      let data = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      }

      try{
        const sendMail = await axios.post('http://localhost:4000/test/mail', data);
        if(sendMail.data === "success") {
          setFormData( {
            name: "",
            email: "",
            phone: "",
            message: "",
            sending: false,
            buttonText: "Your message has been sent successfully"
          })
        }
      } catch (error) {
        console.log(error);
      }
      
  };

  const handleInputChange = event => {
    event.persist();
    setFormData( prevState => {
      return {...prevState, [event.target.name]: event.target.value}
    });
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4 container-fluid">
      <div className="mb-4">
        <h1 className="display-1 padding-5 fs-85">Kontakt</h1>
      </div>
      <div className="col-lg-5 col-md-8 col-sm-12 mb-5">
        <form className="d-flex flex-column" method="post" onSubmit={(e) => formSubmit(e)}>
          <input type="text" placeholder="Name" name="name" className="contact-input mb-2"
            onChange={handleInputChange}
            value={formData.name}
          />
          <input type="email" placeholder="Email" name="email" className="contact-input mb-2"
            onChange={handleInputChange}
            value={formData.email}
          />
          <input type="text" placeholder="Phone" name="phone" className="contact-input mb-2"
            onChange={handleInputChange}
            value={formData.phone}
          />
          <textarea name="message" id="" cols="30" rows="6" placeholder="Please write your message here" className="contact-input mb-2" 
            onChange={handleInputChange}
            value={formData.message}
          />
          <button type="submit" className="btn btn-dark col-sm-12 align-self-end d-flex justify-content-center align-items-center">
            {formData.sending && <div className="mr-2"><Loader type="ThreeDots" color="white" height="25" width="25" /></div>} 
            {formData.buttonText}
            {formData.sending && <div className="ml-2"><Loader type="ThreeDots" color="white" height="25" width="25" /></div>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
