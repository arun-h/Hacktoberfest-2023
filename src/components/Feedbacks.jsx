import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Feedback = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    username: "",
    feedback: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'YOUR_EMAILJS_SERVICE_ID',
        'YOUR_EMAILJS_TEMPLATE_ID',
        {
          from_name: form.username,
          to_name: "Your Name", // Replace with the recipient's name or email
          message: form.feedback,
        },
        'YOUR_EMAILJS_USER_ID'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your feedback!");

          setForm({
            username: "",
            feedback: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Oops, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-6 flex xl:flex-row flex-col-reverse gap-6 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.5] bg-black-100 p-6 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Leave Feedback</p>
        <h3 className={styles.sectionHeadText}>Feedback.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-4 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Username</span>
            <input
              type='text'
              name='username'
              value={form.username}
              onChange={handleChange}
              placeholder='Enter your username'
              className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Feedback</span>
            <textarea
              rows={4} // Adjust the number of rows here to make it smaller
              name='feedback'
              value={form.feedback}
              onChange={handleChange}
              placeholder='Enter your feedback here'
              className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send Feedback"}
          </button>
        </form>
      </motion.div>

      {/* ... (right-side content, e.g., EarthCanvas) */}
    </div>
  );
};

export default Feedback;
