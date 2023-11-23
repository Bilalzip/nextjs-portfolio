import React from "react";

const ContactForm = () => {
  return (
    <form className="rounded-md">
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-transparent border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-transparent border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-transparent border-0 rounded shadow focus:border-blue-500 focus:border"
        />
      </div>
      <button className="rounded-md px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-600">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
