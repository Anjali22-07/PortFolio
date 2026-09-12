
const Contact = () => {
  return (
    <section
      id="contactMe"
      className="
        contact-container
        min-h-screen
        py-12
        px-4
        sm:px-6
        lg:px-10
        flex
        flex-col
        items-center
      "
    >
      {/* Heading */}
      <h1
        className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          font-bold
          text-center
          font-serif
          text-black
          mb-10
        "
      >
        Let's Connect
      </h1>

      {/* Contact Card */}
      <div className="w-full max-w-4xl flex justify-center">
        <div
          className="
            shadow-2xl
            rounded-2xl
            bg-[#092609a7]
            w-full
            max-w-xl
            min-h-[400px]
            sm:min-h-[450px]
            px-6
            sm:px-10
            py-8
            sm:py-12
            flex
            flex-col
            justify-between
          "
        >
          {/* Message */}
          <p
            className="
              text-xl
              sm:text-2xl
              font-serif
              text-center
              leading-relaxed
            "
          >
            I’m open to internship and entry-level backend development
            opportunities and collaborations.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col items-center mt-10">
            <h2
              className="
                text-xl
                sm:text-2xl
                font-serif
                font-semibold
                mb-6
              "
            >
              Contact Me:
            </h2>

            <div className="flex justify-center gap-8 sm:gap-10">
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
                <i className="fa-brands text-4xl fa-github"></i>
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
                <i className="fa-brands text-4xl fa-linkedin"></i>
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&to=anjalis2277@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="
                  text-yellow-900
                  hover:text-[#e49903]
                  transition-colors
                  duration-300
                "
              >
                <i className="fa-solid text-4xl fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

