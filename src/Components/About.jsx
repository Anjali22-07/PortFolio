import aboutImage from "../assets/pic.png";
import Header from "./Header.jsx";

const About = () => {
  return (
    <>
      <Header />

      <section
        id="about"
        className="
          w-full
          bg-[#fac65cf9]
          text-black
          px-6
          py-12
          sm:px-10
          md:px-12
          lg:px-16
          overflow-hidden
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            flex
            flex-col
            lg:flex-row
            items-center
            gap-10
            lg:gap-16
          "
        >

          {/* ================= IMAGE ================= */}
          <div
            className="
              w-full
              lg:w-1/2
              flex
              justify-center
            "
          >
            <img
              src={aboutImage}
              className="
                w-full
                max-w-[700px]
                h-auto
                max-h-[480px]
                object-cover
                rounded-sm
              "
              alt="Anjali"
            />
          </div>

          {/* ================= ABOUT TEXT ================= */}
          <div
            className="
              w-full
              lg:w-1/2
              flex
              flex-col
              items-center
              lg:items-start
            "
          >

            <h1
              className="
                font-serif
                font-bold
                text-4xl
                sm:text-5xl
                md:text-6xl
                leading-tight
              "
            >
              Hey,
            </h1>

            <h2
              className="
                font-serif
                font-bold
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:ml-12
                mt-1
                leading-tight
              "
            >
              I'm Anjali!
            </h2>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                sm:text-xl
                md:text-2xl
                leading-relaxed
                text-center
                lg:text-left
              "
            >
              I’m Anjali Singh, a backend developer passionate about Java and
              Spring Boot. I enjoy solving coding challenges, learning new
              technologies, and building projects that strengthen my skills in
              backend development and problem-solving.
            </p>

            {/* ================= SOCIAL ICONS ================= */}
            <div
              className="
                flex
                items-center
                justify-center
                lg:justify-start
                gap-8
                mt-10
              "
            >

              {/* GitHub */}
              <a
                href="https://github.com/Anjali22-07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  text-yellow-900
                  hover:text-[#e49903]
                  transition-colors
                  duration-300
                "
              >
                <i className="fa-brands fa-github text-3xl sm:text-4xl"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/anjali-singh-061685287/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  text-yellow-900
                  hover:text-[#e49903]
                  transition-colors
                  duration-300
                "
              >
                <i className="fa-brands fa-linkedin text-3xl sm:text-4xl"></i>
              </a>

              {/* Email */}
              <a
                href="mailto:anjalis2277@gmail.com"
                aria-label="Email"
                className="
                  text-yellow-900
                  hover:text-[#e49903]
                  transition-colors
                  duration-300
                "
              >
                <i className="fa-solid fa-envelope text-3xl sm:text-4xl"></i>
              </a>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;