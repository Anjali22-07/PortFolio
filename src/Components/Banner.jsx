import bannerImage from "../assets/pic1.png";
const Banner=()=>{
    return(
        <>
         
         <div className="banner-container relative flex h-screen">
         <div className="text-yellow-700 px-14 w-screen mt-24 mx-28">
            <h1 className="text-4xl relative right-12 font-serif font-bold mt-2 items-start">Anjali Singh</h1>
            <h3 className="text-2xl relative right-12 font-serif font-bold mt-2 items-start">Backend Developer</h3>
            <h4 className="text-2xl relative right-12 font-serif font-bold mt-2 items-start">Java • Spring Boot • REST APIs • MySQL</h4>
           <br/> <p className="text-2xl relative right-12 font-serif font-bold mt-2 items-start" >Building scalable backend applications and 
            <br/>learning
software engineering through real-world projects.</p>
         </div>
         
          {/* BLACK BOX — BELOW DSA */}
      <div className="absolute left-0 right-0 mx-0 top-[400px] h-[44vh] w-full bg-black">
          <div className="icons-container mt-16 right-28 space-x-10">
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

export default Banner;