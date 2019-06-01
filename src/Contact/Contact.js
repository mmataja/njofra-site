import React from "react";
import "./Contact.css";

const contact = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-4 container-fluid">
      <div className="mb-4">
        <h1 className="display-1 p-5">Kontakt</h1>
      </div>
      <div className="mb-5">
        <form className="contact-form d-flex flex-column" onSubmit={e => this.formSubmit(e)}>
          <label className="message" htmlFor="message-input">
            Your Message
          </label>
          <textarea
            onChange={e => this.setState({ message: e.target.value })}
            name="message"
            className="message-input"
            type="text"
            placeholder="Please write your message here"
            // value={this.state.message}
            required
          />

          <label className="message-name" htmlFor="message-name">
            Your Name
          </label>
          <input
            onChange={e => this.setState({ name: e.target.value })}
            name="name"
            className="message-name"
            type="text"
            placeholder="Your Name"
            // value={this.state.name}
          />

          <label className="message-email" htmlFor="message-email">
            Your Email
          </label>
          <input
            onChange={e => this.setState({ email: e.target.value })}
            name="email"
            className="message-email"
            type="email"
            placeholder="your@email.com"
            required
            // value={this.state.email}
          />

          <div className="container">
            <button type="submit" className="btn btn-primary">
              {/* {this.state.buttonText} */}Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default contact;
