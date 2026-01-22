const Header=()=>{

    return(
        <>

        <div className="w-full main flex justify-between items-center px-12 mt-2">
         
          <div class="text-3xl font-serif font-bold">
            {/* logo */}
             Anjali
          </div>
          <div class="space-x-8 text-xl font-bold">
            {/* menu links */}
            <a href="#about" className="hover:text-orange-200" >
                About me
            </a>
            <a href="#skills" className="hover:text-orange-200">
                Skills
            </a>
            <a href="#projects" className="hover:text-orange-200">
                Projects
            </a>
            <a href="#contactMe" className="hover:text-orange-200">
                Contact me
            </a>
            <a
                        href="/Anjali_Singh_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                    <button className="px-3 py-2 bg-yellow-700 rounded shadow-xl text-center">Resume</button>
                </a>
          </div>
           


        </div>
        
        </>
    );
};

export default Header;