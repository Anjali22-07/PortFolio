
import educationImage from "../assets/Education.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="main-container bg-[#f1ddb7f9] min-h-screen py-12 px-4 sm:px-6 lg:px-10"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <h1
          className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            xl:text-[100px]
            font-serif
            font-bold
            text-green-950
            text-center
            lg:text-left
            lg:ml-20
          "
        >
          Technical Skills
        </h1>
      </div>

      {/* Main Content */}
      <div
        className="
          max-w-7xl
          mx-auto
          mt-10
          lg:mt-20
          flex
          flex-col
          lg:flex-row
          items-center
          lg:items-start
          gap-10
          lg:gap-16
        "
      >
       
        {/* Skills Card */}
        <div className="w-full">
          <div
            className="
              bg-[#041e04f6]
              w-full
              rounded-2xl
              shadow-2xl
              p-6
              sm:p-8
              md:p-10
              space-y-7
            "
          >
            {/* Languages */}
            <div>
              <h2 className="font-bold text-xl sm:text-2xl font-serif text-[#ecc672f9] mb-3">
                Languages
              </h2>

              <div className="flex flex-wrap gap-3">
                <SkillButton>Java</SkillButton>
              </div>
            </div>

            {/* Backend */}
            <div>
              <h2 className="font-bold text-xl sm:text-2xl font-serif text-[#ecc672f9] mb-3">
                Backend Development
              </h2>

              <div className="flex flex-wrap gap-3">
                <SkillButton>Spring Boot</SkillButton>
                <SkillButton>Spring MVC</SkillButton>
                <SkillButton>Spring Data JPA</SkillButton>
                <SkillButton>Spring Security</SkillButton>
                <SkillButton>Hibernate</SkillButton>
                <SkillButton>REST APIs</SkillButton>
              </div>
            </div>

            {/* Databases */}
            <div>
              <h2 className="font-bold text-xl sm:text-2xl font-serif text-[#ecc672f9] mb-3">
                Databases
              </h2>

              <div className="flex flex-wrap gap-3">
                <SkillButton>MySQL</SkillButton>
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h2 className="font-bold text-xl sm:text-2xl font-serif text-[#ecc672f9] mb-3">
                Frontend (Basics)
              </h2>

              <div className="flex flex-wrap gap-3">
                <SkillButton>HTML</SkillButton>
                <SkillButton>CSS</SkillButton>
                <SkillButton>JavaScript</SkillButton>
                <SkillButton>React</SkillButton>
              </div>
            </div>

            {/* API & Tools */}
            <div>
              <h2 className="font-bold text-xl sm:text-2xl font-serif text-[#ecc672f9] mb-3">
                API & Tools
              </h2>

              <div className="flex flex-wrap gap-3">
                <SkillButton>REST API Integration</SkillButton>
                <SkillButton>Postman</SkillButton>
                <SkillButton>JUnit</SkillButton>
                <SkillButton>Git & GitHub</SkillButton>
                <SkillButton>Maven</SkillButton>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Image */}
        <div className="flex-shrink-0 mt-32 ml-32">
          <img
            src={educationImage}
            className="
              w-80
              h-80
              sm:w-72
              sm:h-96
              md:w-80
              md:h-[420px]
              lg:w-[350px]
              lg:h-[450px]
              xl:w-[400px]
              xl:h-[480px]
              object-cover
              rounded-2xl
              shadow-xl
            "
            alt="Education"
          />
        </div>

    </section>
  );
};

/* Reusable Skill Button */
const SkillButton = ({ children }) => {
  return (
    <button
        className=" px-3 py-2 rounded-xl shadow-lg text-sm sm:text-base font-semibold text-[#ecc672f9] hover:text-[#e49903] hover:-translate-y-1 transition-all duration-200 border border-transparent hover:border-[#ecc672f9] " > {children} </button> ); }; 
        export default Skills;
