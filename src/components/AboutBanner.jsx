import bannerimg from "../assets/imgs/banner-img.png";

const AboutBanner = () => {
  return (
    <div className="justify-between items-center border-2 border-primary rounded-xl bg-about-banner text-white  px-10 py-6 mb-4 sm:flex sm:py-2 lg:mb-0">
      <div>
        <h1 className="md:text-2xl font-poppins font-normal w-full text-center sm:text-left sm:max-w-[380px] ">
          Discover Collect, & Sell <span className="text-primarygreen font-semibold"> Extraordinary </span>{" "}
          Cryptocurrency
        </h1>
        <p className="font-poppins font-normal mt-4 w-full text-center sm:text-left sm:max-w-[575px]  md:text-xl">
          <span className="text-primarygreen">Swap</span> any token with the{" "}
          <span className="text-primarygreen">best prices</span>, at lightning speed. Access your{" "}
          <span className="text-primarygreen">BOT</span> now!!!
        </p>
      </div>
      <div className="flex justify-center items-center mt-6 sm:mt-0">
        <img src={bannerimg} alt="bannerimg" className="" />
      </div>
    </div>
  );
};

export default AboutBanner;
