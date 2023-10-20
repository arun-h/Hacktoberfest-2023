import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const errorMessages = {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    message: "Please enter your message.",
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    // Reset the validation error for the current field when the user makes changes
    setValidationErrors({
      ...validationErrors,
      [name]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    const errors = {};
    if (form.name.trim() === "") {
      errors.name = true;
    }
    if (form.email.trim() === "" || !isValidEmail(form.email)) {
      errors.email = true;
    }
    if (form.message.trim() === "") {
      errors.message = true;
    }

    // If there are validation errors, update the state and prevent submission
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_aef0zdb",
        "template_z9918pp",
        {
          from_name: form.name,
          to_name: "Rishav Gupta",
          from_email: form.email,
          to_email: "rishavgupta933@gmail.com",
          message: form.message,
        },
        "qavNn36pkk3901_9c"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const isValidEmail = (email) => {
    // Add your email validation logic here
    // You can use a regular expression or a library like validator.js
    // For simplicity, we are just checking if it contains "@" symbol
    return email.includes("@");
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className={`text-white font-medium mb-4 ${validationErrors.name ? "text-red-500" : ""}`}>
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                validationErrors.name ? "border-red-500" : ""
              }`}
            />
            {validationErrors.name && (
              <span className="text-red-500">{errorMessages.name}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className={`text-white font-medium mb-4 ${validationErrors.email ? "text-red-500" : ""}`}>
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                validationErrors.email ? "border-red-500" : ""
              }`}
            />
            {validationErrors.email && (
              <span className="text-red-500">{errorMessages.email}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className={`text-white font-medium mb-4 ${validationErrors.message ? "text-red-500" : ""}`}>
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                validationErrors.message ? "border-red-500" : ""
              }`}
            />
            {validationErrors.message && (
              <span className="text-red-500">{errorMessages.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
