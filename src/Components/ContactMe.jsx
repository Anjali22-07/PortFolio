const Contact=()=>{
    
    return (
        <>
        <div id="contactMe" class="contact-container relative left-[30px]  py-10 h-[85vh]">
            <h1 className="text-6xl font-bold text-center   font-serif shadow-2xl">Let's Connect</h1>
            <div className="service-contaner flex justify-between mt-4 px-6">
                <div className="shadow-2xl rounded-2xl service 1 space-y-4 bg-[#092609a7] relative left-[300px] w-[50vh] h-[60vh] px-2">
                     <p className="text-2xl font-serif mt-12 px-8">I’m open to internship and entry-level backend development opportunities and Collaborations.</p>
    
                    <div className="icons-container mt-20 right-96 space-x-10">
                        <h2 className="text-2xl font-serif mt-2 px-8">Contact Me:</h2>
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
          </div>
          </>
            );
            };

            export default Contact;
