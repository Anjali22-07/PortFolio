import bannerImage from "../assets/pic1.png";
const Banner=()=>{
    return(
        <>
         
         <div className="banner-container relative flex h-screen">
         
         <div className="relative z-20">
            <h1 className="relative text-[100px] left-52 font-serif font-bold text-[#f5d38e] shadow-2xl">
               DEVELOPER
                <span className="absolute text-[95px] top-32 left-[420px] text-transparent 
                    [-webkit-text-stroke:1px_#E0B84C] opacity-0 fade-up [animation-delay:0.3s]">
                    Java
                </span>
                <span className="absolute text-[95px] top-56 left-28 text-transparent 
                    [-webkit-text-stroke:1px_#E0B84C] opacity-0 fade-up [animation-delay:0.6s]">
                    SpringBoot
                </span>
                <span className="absolute text-[95px] top-80 h-32 left-[420px] text-transparent 
                    [-webkit-text-stroke:1px_#E0B84C] opacity-0 fade-up [animation-delay:0.9s]">
                    DSA
                </span>
            </h1>
         </div>
          {/* BLACK BOX — BELOW DSA */}
      <div className="absolute left-0 right-0 mx-0 top-[400px] h-[32vh] w-full bg-black">
         
        </div>  
        <div className=" absolute top-20 border right-24 rounded-lg">
            <img src={bannerImage}
             className="w-[420px] h-[420px] object-cover"
                alt="Anjali"/>
          </div>
          </div>
             

        </>
    );
};

export default Banner;