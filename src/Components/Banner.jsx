import { useState } from "react";

function AnimatedText({
  text,
  startDelay = 0,
  letterDelay = 80,
  className = "",
}) {
  return (
    <span className={className}>
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <span
            key={i}
            className="inline-block opacity-0 translate-y-4"
            style={{
              animation: "letterIn 0.4s forwards",
              animationDelay: `${startDelay + i * letterDelay}ms`,
            }}
          >
            {char}
          </span>
        )
      )}
    </span>
  );
}

const Banner = () => {
  return (
    <section className="banner-container min-h-screen bg-[#0d2915] text-yellow-700 overflow-hidden">
      
      {/* HERO CONTENT */}
      <div
        className="
          min-h-[65vh]
          flex
          items-start
          justify-center
          px-6
          pt-28
          sm:px-10
          sm:pt-32
          md:min-h-[62vh]
          md:justify-start
          md:px-20
          lg:px-32
          lg:pt-32
        "
      >
        <div className="w-full max-w-4xl">
          
          {/* NAME */}
          <h1
            className="
              font-serif
              font-bold
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              leading-tight
            "
          >
            <AnimatedText
              text="Anjali Singh"
              startDelay={200}
              letterDelay={80}
            />
          </h1>

          {/* ROLE */}
          <h3
            className="
              mt-3
              font-serif
              font-bold
              text-2xl
              sm:text-3xl
              md:text-4xl
            "
          >
            <AnimatedText
              text="Backend Developer"
              startDelay={1200}
              letterDelay={60}
            />
          </h3>

          {/* TECH STACK */}
          <h4
            className="
              mt-3
              max-w-3xl
              font-serif
              font-bold
              text-lg
              sm:text-xl
              md:text-2xl
              leading-relaxed
            "
          >
            <AnimatedText
              text="Java • Spring Boot • REST APIs • MySQL"
              startDelay={2000}
              letterDelay={40}
            />
          </h4>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7
              max-w-2xl
              font-serif
              font-bold
              text-lg
              sm:text-xl
              md:text-2xl
              leading-relaxed
              text-yellow-800
            "
          >
            Building scalable backend applications and learning software
            engineering through real-world projects.
          </p>
        </div>
      </div>

      {/* BLACK SOCIAL SECTION */}
  
<div
  className="
    min-h-[35vh]
    w-full
    bg-black
    flex
    flex-col
    items-center
    justify-center
    px-6
    pt-12
    sm:pt-16
  "
>
  <div className="flex items-center justify-center gap-8 sm:gap-10">
    
    {/* GITHUB */}
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
      <i className="fa-brands fa-github text-3xl sm:text-4xl md:text-5xl"></i>
    </a>

    {/* LINKEDIN */}
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
      <i className="fa-brands fa-linkedin text-3xl sm:text-4xl md:text-5xl"></i>
    </a>

    {/* EMAIL */}
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
      <i className="fa-solid fa-envelope text-3xl sm:text-4xl md:text-5xl"></i>
    </a>

  </div>
</div>


    </section>
  );
};

export default Banner;