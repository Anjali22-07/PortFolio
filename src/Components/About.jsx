import aboutImage from "../assets/pic.png";

const About=()=>{
    return (
        <>
        <div id="about" className="main-container border py-1 bg-[#fac65cf9] h-[90vh] flex ">
         <div className="px-12 mt-6">
            {/* this is image section */}
             <img src={aboutImage}
                         className="w-[800px] h-[480px] object-cover"
                            alt="Anjali"/>
        </div>
        <div className="text-black px-16 w-screen mt-6">
            {/** this is about section */}
            <h1 className="text-6xl relative right-28 font-serif font-bold mt-2 items-start"> Hey,</h1>
            <h2 className="text-6xl relative right-5 font-serif font-bold items-start">I'm Anjali!</h2>
            <p className="text-2xl mt-12 px-8">I’m Anjali Singh, a backend developer passionate about Java and Spring Boot. I enjoy solving coding challenges, learning new technologies, and building projects that strengthen my skills in backend development and problem-solving.</p>
     <div className="icons-container mt-16 right-96 space-x-10">
    <a
      href="https://github.com/Anjali22-07"  // replace with your GitHub URL
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-900 hover:text-[#e49903] transition-colors duration-300 shadow-2xl"
    > <i class="fa-brands text-4xl fa-github"></i></a>
    <a
      href="https://www.linkedin.com/in/anjali-singh-061685287/"  // replace with your GitHub URL
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-900 hover:text-[#e49903] transition-colors duration-300 shadow-2xl"
    ><i class="fa-brands text-4xl fa-linkedin"></i></a>
     <a
      href="https://mail.google.com/mail/?view=cm&to=anjalis2277@gmail.com"  // replace with your GitHub URL
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-900 hover:text-[#e49903] transition-colors duration-300 shadow-2xl"
    ><i class="fa-solid text-4xl fa-envelope"></i></a>
         </div>
        </div>
        </div>
        </>
    );
};
export default About;