import bannerimg from "../assets/imgs/banner-img.png";

const AboutBanner = () => {
  return (
    <div className="flex justify-between items-center border-2 border-primary rounded-xl bg-about-banner text-white py-2 px-10">
      <div>
        <h1 className="text-2xl font-poppins font-normal max-w-[380px] ">
          Discover Collect, & Sell <span className="text-primarygreen font-semibold"> Extraordinary </span>{" "}
          Cryptocurrency
        </h1>
        <p className="font-poppins mt-4 text-xl max-w-[575px] font-normal">
          <span className="text-primarygreen">Swap</span> any token with the{" "}
          <span className="text-primarygreen">best prices</span>, at lightning speed. Access your{" "}
          <span className="text-primarygreen">BOT</span> now!!!
        </p>
      </div>
      <img src={bannerimg} alt="" />
    </div>
  );
};

export default AboutBanner;
