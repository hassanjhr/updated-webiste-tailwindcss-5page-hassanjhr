import Digi from "@/app/assets/digi.png"; 

const Service = () => {
  return (
    <div>
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat p-4"
        style={{
          backgroundImage: `url(${Digi.src})`,
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 max-w-7xl w-full mx-auto p-8 bg-white rounded-lg shadow-xl text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Service Card */}
            <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-2 flex flex-col justify-between h-full transition-all">
              <div>
                <h3 className="text-orange-600 text-2xl font-bold mb-4">Social Media Marketing</h3>
                <p className="text-gray-600 text-base mb-4">
                  Boost your brand visibility with targeted social media campaigns across various platforms.
                </p>
              </div>
              <button className="explore-btn bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-all mt-auto">
                Explore More
              </button>
            </div>

            {/* Service Card */}
            <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-2 flex flex-col justify-between h-full transition-all">
              <div>
                <h3 className="text-orange-600 text-2xl font-bold mb-4">SEO (Search Engine Optimization)</h3>
                <p className="text-gray-600 text-base mb-4">
                  Enhance your website's ranking on search engines with advanced SEO techniques.
                </p>
              </div>
              <button className="explore-btn bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-all mt-auto">
                Explore More
              </button>
            </div>

            {/* Service Card */}
            <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-2 flex flex-col justify-between h-full transition-all">
              <div>
                <h3 className="text-orange-600 text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-600 text-base mb-4">
                  Get a responsive, user-friendly website tailored to your business needs.
                </p>
              </div>
              <button className="explore-btn bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-all mt-auto">
                Explore More
              </button>
            </div>

            {/* Service Card */}
            <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-2 flex flex-col justify-between h-full transition-all">
              <div>
                <h3 className="text-orange-600 text-2xl font-bold mb-4">Content Marketing</h3>
                <p className="text-gray-600 text-base mb-4">
                  Build brand loyalty with custom content marketing strategies to attract your target audience.
                </p>
              </div>
              <button className="explore-btn bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-all mt-auto">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
