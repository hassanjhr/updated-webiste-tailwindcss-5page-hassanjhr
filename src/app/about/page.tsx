import Digi from "@/app/assets/digi.png"; 
import Link from "next/link";

const About = () => {
  return (
    <div className="relative">
      <section
        className="About1 bg-cover bg-center bg-no-repeat h-[120vh] flex justify-center items-center text-white"
        style={{
          backgroundImage: `url(${Digi.src})`, 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 max-w-xl px-6 py-4 text-center">
          <h1 className="text-4xl sm:text-3xl md:text-5xl font-semibold mb-6 animate-fadeIn">
            About Us!
          </h1>
          <p className="text-lg sm:text-base leading-relaxed mb-6">
            At our core, we are a team of dedicated professionals passionate
            about helping businesses succeed in the digital landscape. With
            expertise in web development, SEO, and digital marketing, we strive
            to deliver innovative solutions tailored to meet the unique needs of
            our clients. Feel free to contact us.
          </p>
          <button className="contact-btn bg-[#ff7613] text-white py-2 px-6 rounded-full hover:bg-[#e85e0c] transition-all duration-300 ease-in-out">
            <Link href="/contact">Contact</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
