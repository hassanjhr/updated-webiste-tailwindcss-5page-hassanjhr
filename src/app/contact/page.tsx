import Digi from "@/app/assets/digi.png"; 


const Contact = () => {
  return (
    <div>
      <section
        className="Contact bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center text-white relative"
        style={{
          backgroundImage: `url(${Digi.src})`,
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        
        <div className="contact-form-container bg-white p-8 rounded-lg max-w-2xl w-full shadow-xl relative z-10 text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>
          <form className="contact-form">
            <div className="form-group mb-4">
              <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="contact-number" className="block font-semibold text-gray-700 mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                id="contact-number"
                name="contact-number"
                placeholder="Your Contact Number"
                required
                className="w-full p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="query" className="block font-semibold text-gray-700 mb-2">
                Your Query
              </label>
              <textarea
                id="query"
                name="query"
                placeholder="Your Query"
                required
                className="w-full p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn w-full py-3 text-lg bg-orange-600 text-white rounded-md hover:bg-orange-500 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
