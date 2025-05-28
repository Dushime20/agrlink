import React, { useState } from "react";

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle sending form data to backend or email service
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-green-10 min-h-screen">
      <h1 className="text-3xl font-bold text-green-900 mb-8">Support</h1>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="mb-6 text-gray-700">
          If you have any questions, issues, or feedback, please fill out the form below or contact us directly.
        </p>

        {submitted && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
            Thank you for reaching out! We will get back to you shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block font-semibold mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Subject of your message"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 border-t pt-6 text-gray-700">
          <h2 className="text-xl font-semibold mb-3">Contact Info</h2>
          <p>Email: <a href="mailto:support@agrilinkrwanda.com" className="text-green-700 hover:underline">support@agrilinkrwanda.com</a></p>
          <p>Phone: <a href="tel:+250123456789" className="text-green-700 hover:underline">+250 123 456 789</a></p>
          <p>Address: Kigali, Rwanda</p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
