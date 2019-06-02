import React from "react";
import "./Contact.css";

const contact = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-4 container-fluid">
      <div className="mb-4">
        <h1 className="display-1 p-5">Kontakt</h1>
      </div>
      <div className="col-5 mb-5">
        <form className="d-flex flex-column">
          <input type="text" placeholder="Name" className="contact-input mb-2"/>
          <input type="text" placeholder="Email" className="contact-input mb-2"/>
          <input type="text" placeholder="Phone" className="contact-input mb-2"/>
          <textarea name="" id="" cols="30" rows="6" placeholder="Please write your message here" className="contact-input mb-2"></textarea>
          <button type="submit" className="btn btn-dark w-25 align-self-end">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default contact;
