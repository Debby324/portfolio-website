import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="w-full px-[12%] py-9 scroll-mt-20 relative top-3 block items-center justify-center">
        <h2 className="text-center text-5xl mb-6">Get in Touch</h2>
        <p className="text-center max-w-2xl mx-auto relative bottom-4 ">
          I'd love to hear from you! if you have any questions, comments, or
          feedback, lease use the form below
        </p>
      </div>
      <div className="px-2 sm:px-6">
        <form className="max-w-2xl mx-auto rounded-xl" action="https://formsubmit.co/deborahadigolo4@gmail.com" method="POST">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 mb-5 ">
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className=" flex-1 p-3 border-[0.5px] outline-none border-gray-400 rounded-md bg-white "
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3  border-[0.5px] outline-none border-gray-400 rounded-md"
            required
          />
        </div>
        <div className="">
        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
          className=" border-[0.5px] outline-none border-gray-400 rounded-md w-full p-4 mb-4 "
        ></textarea>
        </div>
        <button className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 relative bottom-3">Submit now <i className="bx bx-right-arrow-alt w-4"></i></button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
