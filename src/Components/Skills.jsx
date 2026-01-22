import educationImage from "../assets/Education.png";
const Skills=()=>{
    return (
        <>
        <div id="skills" className="main-container bg-[#fac65cf9] h-[110vh]">
           
               <div className="-mt-1">
                 <h1 className="relative text-[100px] left-[150px] mt-1 font-serif font-bold text-green-950">
               Technical Skills</h1>
                <h1 className="relative text-[100px] left-[150px] -mt-28 m-0 font-serif font-bold text-transparent 
                    [-webkit-text-stroke:1px_#053827]">
               Technical Skills</h1>            
            </div>
           
                <div className="flex">
                     <div className="px-10 mt-28 border-green-950">
                            {/* this is image section */}
                             <img src={educationImage}
                                         className="w-[400px] h-[480px] object-cover"
                                            alt="Anjali"/>
                        </div>
             <div className="service-container mt-3 relative left-[100px] gap-6 felx items-center px-6 md-4">
                <div className="shadow-2xl rounded-2xl service 1 space-y-2 bg-[#041e04f6] w-[100vh] h-[75vh]">
                  <h1 className="font-bold text-2xl font-serif text-[#ecc672f9] ">Languages</h1>
                    <button className="px-1 py-1 text-[#ecc672f9] rounded-xl mr-8 shadow-xl hover:text-[#e49903]  text-center  font-semibold">Java</button>
                <h1 className="font-bold text-2xl font-serif text-[#ecc672f9]">Backend Development</h1>
                   <div className="flex gap-3">
                     <button className="px-3 py-1 text-[#ecc672f9] rounded-2xl hover:text-[#e49903] shadow-xl  font-semibold">Spring Boot</button>
                    <button className="px-3 py-1 text-[#ecc672f9] rounded-2xl hover:text-[#e49903] shadow-xl font-semibold">Spring MVC</button>
                    <button className="px-3 py-1 text-[#ecc672f9] rounded-2xl hover:text-[#e49903] shadow-xl  font-semibold">Spring Data JPA</button>
                    <button className="px-3 py-1 text-[#ecc672f9] rounded-2xl hover:text-[#e49903]  shadow-xl font-semibold">Spring Security</button>
                   <button className="px-3 py-1 text-[#ecc672f9] rounded-2xl hover:text-[#e49903] shadow-xl  font-semibold">Hibernate</button>
                    <button className="px-3 py-1 text-[#ecc672f9] rounded-2xl  hover:text-[#e49903] shadow-xl font-semibold">RestAPIs</button>               
                   </div>
                   
                     <h1 className="font-bold text-2xl font-serif text-[#ecc672f9]">DataBases</h1>
                    <button className="px-1 py-1 text-[#ecc672f9] rounded-xl mr-6 shadow-xl hover:text-[#e49903]  text-center font-semibold">MySQL</button>
                     <h1 className="font-bold text-2xl font-serif text-[#ecc672f9]">Frontend(Basics)</h1>
                      <div className="flex gap-3 ml-28">
                     <button className="px-1 py-1 text-[#ecc672f9] rounded-xl shadow-xl hover:text-[#e49903] font-semibold">HTML</button>
                    <button className="px-1 py-1 text-[#ecc672f9] rounded-xl shadow-xl  hover:text-[#e49903] font-semibold">CSS</button>
                    <button className="px-1 py-1 text-[#ecc672f9] rounded-xl shadow-xl  hover:text-[#e49903] font-semibold">JavaScript</button>
                    <button className="px-1 py-1 text-[#ecc672f9] rounded-xl  shadow-xl hover:text-[#e49903] font-semibold">React</button>
                   <button className="px-1 py-1 text-[#ecc672f9] rounded-xl shadow-xl  hover:text-[#e49903] font-semibold">Hibernate</button>
             </div>
               <h1 className="font-bold text-2xl font-serif text-[#ecc672f9]">API & Tools </h1>
                      <div className="flex gap-3 ml-20">
                     <button classNamtext="px-1 py-1 text-[#ecc672f9] rounded-xl shadow-xl hover:text-[#e49903] font-semibold">RestAPI Integration</button>
                    <button className="px-1 py-1 text-[#ecc672f9] rounded-xl shadow-xl  hover:text-[#e49903] font-semibold">PostMan</button>
                    <button className="px-1 py-1 text-[#ecc672f9] rounded-xl shadow-xl  hover:text-[#e49903] font-semibold">JUnit</button>
                    <button className="px-1 py-1 text-[#ecc672f9] rounded-xl  shadow-xl hover:text-[#e49903] font-semibold">Git & GitHub </button>
                   <button className="px-1 py-1 text-[#ecc672f9] rounded-xl shadow-xl hover:text-[#e49903]  font-semibold">Maven</button>
             </div>

                </div>
                </div>
                </div>
            
           
           
           
        
        </div>
        </>
    );
};

export default Skills;