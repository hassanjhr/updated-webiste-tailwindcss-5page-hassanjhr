import Digi from "@/app/assets/digi.png";
import Link from "next/link";

const HomeContent = () => {
  return (
    <div className="relative">
      <section
        className="hero bg-cover bg-center bg-no-repeat h-[120vh] flex justify-center items-center text-white"
        style={{
          backgroundImage: `url(${Digi.src})`,
        }}
      >
        <div className="hero-content relative z-10 max-w-xl px-6 py-4 text-center">
          <h1 className="text-4xl sm:text-3xl md:text-5xl font-semibold mb-6 animate-fadeIn">
            Welcome to Digiverse Solution!
          </h1>
          <p className="text-lg sm:text-base leading-relaxed mb-6">
            At Digiverse, we pride ourselves on being your ultimate partner for
            all things digital. Our mission is to empower businesses by offering
            a wide range of tailored digital services designed to enhance your
            online presence and drive success. From innovative website
            development and seamless e-commerce solutions to result-oriented
            digital marketing strategies, we provide the tools you need to
            thrive in today is competitive market. Welcome to a world where your
            digital dreams become reality!
          </p>
          <button className="contact-btn bg-[#ff7613] text-white py-2 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-[#e66012] hover:scale-105">
            <Link href="/services">Our Services</Link>
          </button>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      </section>
    </div>
  );
};

export default HomeContent;
