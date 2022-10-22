import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_sa4mw8c",
      "template_dosiiho",
      form.current,
      "t4poRUO3v26xpXOZD"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="contact contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kwahab214@gmail.com</h5>
            <a target="_blank" href="mailto:kwahab214@gmail.com">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>zainafridi678</h5>
            <a href="http://m.me/zainafridi678" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+923040030331</h5>
            <a href="https://wa.me/+923040030331" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            className="input__box"
            type="text"
            placeholder="Your Full Name"
          />

          <input className="input__box" type="email" placeholder="Your Email" />

          <textarea
            className="message-box"
            name="message"
            rows="8"
            placeholder="Your message"
            required
          ></textarea>

          <button type="submit" href="#contact" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br />
        <br />
      </div>
    </section>
  );
};

export default Contact;
