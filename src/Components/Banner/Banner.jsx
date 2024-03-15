const Banner = () => {
  return (
    <div className="relative z-0 background-image" >
  <div className="h-screen flex items-center bg-black bg-opacity-10">
    <div className="px-4 md:px-0">
      <div className="flex justify-between items-center">
        <div className="text-center md:text-left mx-auto px-10">
          <h1 className="font-bebas-neu text-5xl sm:text-6xl font-black flex leading-none text-white ">
            Best online <br /> platform for <br /> education
          </h1>
          <p className="text-sm sm:text-xl text-white">
            Explore Limitless Learning Opportunities with EduCare.
          </p>
          <div className="flex flex-col sm:flex-row  justify-center md:justify-start items-center mt-8">
            <button className="uppercase py-2 px-4 rounded-sm bg-[#3D5EE1] active:bg-[#6b88fc] border-2 border-transparent transition-all ease-in text-white text-md mb-2 sm:mr-4 mr-0  sm:mb-0 hover:bg-[#4369ff]">
              Register
            </button>
            <button className="uppercase py-2 px-4 bg-[#3D5EE1] active:bg-[#6b88fc] rounded-sm text-white transition-all ease-in hover:bg-[#3c5bd4] hover:text-white text-md">
              Dashboard
            </button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

  );
};

export default Banner;
