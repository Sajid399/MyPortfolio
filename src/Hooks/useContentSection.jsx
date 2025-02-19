import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const useContentSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;
      emailjs
      .send(serviceId, templateId, formData, userId)
          .then(
              (response) => {
                  console.log("Email sent successfully!", response);
                  setStatus("Email sent successfully!");
                  setTimeout(() => {
                    setStatus("");
                  }, 3000);
                  setFormData({ name: "", email: "", message: "" }); // Reset form
              },
              (error) => {
                  console.error("Failed to send email:", error);
                  setStatus("Failed to send email. Please try again.");
              }
          );
  };

  return {
    handleChange,
    handleSubmit,
    formData,
    status
  }
}

export default useContentSection