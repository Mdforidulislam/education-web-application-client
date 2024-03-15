const Contact = () => {
  return (
    <div className="py-10">
      <h3 className="text-5xl text-center font-semibold text-gray-6 mb-16">
        How can we help you?
      </h3>
      <div className="md:w-1/2 mx-auto">
        <div className="flex justify-between mb-10">
          <div>
            <label className="font-semibold text-gray-600 uppercase">
              Your Name*
            </label>
            <br />
            <input
              className=" peer border-b md:w-80 text-xl border-black py-2 focus:outline-none "
              placeholder="What's your name?"
              type="text"
            />
            <div className=""></div>
          </div>
          <div>
            <label className="font-semibold text-gray-600 uppercase">
              Your Email Address*
            </label>
            <br />
            <input
              className=" peer border-b md:w-80 text-xl border-black py-2 focus:outline-none "
              placeholder="Enter your email address"
              type="text"
            />
          </div>
        </div>
        <div>
          <label className="font-semibold text-gray-600 uppercase">
            Your Message
          </label>
          <br />
          <textarea
            className=" peer border-b text-xl w-full border-black py-6 focus:outline-none "
            placeholder="Describe about your message"
            type="text"
          />
        </div>
      </div>
      <button className="uppercase mx-auto flex justify-center mt-10 py-2 px-4 rounded-sm bg-[#3D5EE1] border-2 border-transparent text-white text-md hover:bg-[#3c5bd4]">
        Send Message
      </button>
    </div>
  );
};

export default Contact;
