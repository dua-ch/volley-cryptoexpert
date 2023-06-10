import { useState } from "react";
import AboutBanner from "./AboutBanner";
import AboutAside from "./AboutAside";
import TableRows from "./TableRows";
import Faqs from "./Faqs";
import NFTSwiper from "./NFTSwiper";
import Swap from "./Swap";
import detailicon from "../assets/icons/detail-icon.png";

import { tableData } from "../data/TableData";
import { faqsData } from "../data/FaqsData";

const SwapSection = () => {
  const [activeTab, setactiveTab] = useState("swap");
  const [tokenTab, settokenTab] = useState("ethereum");
  return (
    <div className="lg:grid grid-cols-7 gap-6 py-4 items-start">
      <AboutAside />
      <div className="col-span-6">
        <AboutBanner />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 items-start py-4">
          {/* Table Section  */}

          {/* Tabs  */}
          <div className="col-span-3 md:col-span-3 lg:col-span-2">
            <div className="flex text-primary border-b-2 border-primary">
              <button className="basis-1/3 block text-center relative" onClick={() => setactiveTab("swap")}>
                <span className="font-oswald text-lg font-bold block py-3 sm:text-xl">SWAP</span>
                {activeTab === "swap" && <span className="block absolute bottom-0 w-full h-[3px] bg-primary"></span>}
              </button>
              <button className="basis-1/3 block text-center relative" onClick={() => setactiveTab("token")}>
                <span className="font-oswald text-lg font-bold block py-3 sm:text-xl">MY TOKEN</span>
                {activeTab === "token" && (
                  <span className="block absolute bottom-0 w-full h-[3px] bg-primary transition-all ease-in-out"></span>
                )}
              </button>
              <button className="basis-1/3 block text-center relative" onClick={() => setactiveTab("referal")}>
                <span className="font-oswald text-lg font-bold block py-3 sm:text-xl">REFFERAL</span>
                {activeTab === "referal" && <span className="block absolute bottom-0 w-full h-[3px] bg-primary"></span>}
              </button>
            </div>
            {/* End Tabs  */}

            {/* Buttons  */}
            <div className="border-2 border-primary mt-4 rounded-tr-2xl rounded-tl-2xl p-4 sm:p-6">
              <div className="flex items-center flex-wrap sm:space-x-4 ">
                <button
                  className={
                    tokenTab === "bsc"
                      ? "flex items-center space-x-1 border-2 border-primarygreen px-3 py-[7px] rounded-3xl bg-primary mb-2 ml-2 sm:mb-0 sm:px-8"
                      : "flex items-center space-x-1 border-2 border-primarygreen px-3 py-[7px] rounded-3xl mb-2 ml-2 sm:mb-0 sm:px-8"
                  }
                  onClick={() => settokenTab("bsc")}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_642)">
                      <path
                        d="M6 12C2.68613 12 0 9.31388 0 6C0 2.68613 2.68613 0 6 0C9.31388 0 12 2.68613 12 6C12 9.31388 9.31388 12 6 12ZM4.5435 5.4015L6 3.945L7.45725 5.40225L8.30475 4.55475L6 2.25L3.696 4.554L4.5435 5.4015ZM2.25 6L3.0975 6.8475L3.945 6L3.0975 5.1525L2.25 6ZM4.5435 6.5985L3.69487 7.44488L3.696 7.446L6 9.75L8.30475 7.44525L7.45725 6.59737L6 8.055L4.5435 6.5985ZM8.055 6L8.9025 6.8475L9.75 6L8.9025 5.1525L8.055 6ZM6.8595 5.99925L6 5.13975L5.36438 5.775L5.29125 5.84812L5.14087 5.99887L5.13937 6L5.14087 6.00113L5.99962 6.86025L6.85987 6.00037L6.86025 6L6.8595 5.99925Z"
                        fill={tokenTab === "bsc" ? "#ffffff" : "#4F018B"}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_642">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span
                    className={
                      tokenTab === "bsc"
                        ? "text-white font-oswald font-semibold text-[12px]"
                        : "text-primary font-oswald font-semibold text-[12px]"
                    }
                  >
                    BSC
                  </span>
                </button>
                <button
                  className={
                    tokenTab === "ethereum"
                      ? "flex items-center space-x-1 border-2 border-primarygreen px-3 py-[7px] rounded-3xl bg-primary mb-2 ml-2 sm:mb-0 sm:px-8"
                      : "flex items-center space-x-1 border-2 border-primarygreen px-3 py-[7px] rounded-3xl mb-2 ml-2 sm:mb-0 sm:px-8"
                  }
                  onClick={() => settokenTab("ethereum")}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_645)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 12C2.68613 12 0 9.31388 0 6C0 2.68613 2.68613 0 6 0C9.31388 0 12 2.68613 12 6C12 9.31388 9.31388 12 6 12ZM8.5245 6L6 4.57125L3.4755 6L6 7.41788L8.5245 5.99925V6ZM6 7.89263C5.1255 7.39773 4.2505 6.90373 3.375 6.41062C4.15462 7.62862 5.1225 9.13313 6 10.4996C6.8775 9.1335 7.84538 7.62862 8.625 6.41062C7.7495 6.90373 6.8745 7.39773 6 7.89263ZM6 4.10925L8.625 5.57438L6 1.5L3.375 5.57475L6 4.10925Z"
                        fill={tokenTab === "ethereum" ? "#ffffff" : "#4F018B"}
                      />
                      <path
                        d="M8.51625 5.991L5.99588 6.20737V4.56525L8.51625 5.991ZM5.99588 7.88025C6.73838 7.46025 7.69725 6.91875 8.61638 6.40125C7.83788 7.617 6.87188 9.1185 5.99588 10.482V7.88025ZM5.99588 4.10437V1.5L8.61638 5.56687L5.99588 4.10437Z"
                        fill="black"
                        fillOpacity="0.296"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.99588 6.20734L8.51588 5.99097L5.99588 7.40659V6.20734Z"
                        fill="black"
                        fillOpacity="0.803"
                      />
                      <path
                        opacity="0.311"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.9955 6.20734L3.47513 5.99097L5.9955 7.40659V6.20734Z"
                        fill={tokenTab === "ethereum" ? "#ffffff" : "#4F018B"}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_645">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span
                    className={
                      tokenTab === "ethereum"
                        ? "text-white font-oswald font-semibold text-[12px]"
                        : "text-primary font-oswald font-semibold text-[12px]"
                    }
                  >
                    Ethereum
                  </span>
                </button>
                <button
                  className={
                    tokenTab === "polygone"
                      ? "flex items-center space-x-1 border-2 border-primarygreen px-3 py-[7px] rounded-3xl bg-primary mb-2 ml-2 sm:mb-0 sm:px-8"
                      : "flex items-center space-x-1 border-2 border-primarygreen px-3 py-[7px] rounded-3xl mb-2 ml-2 sm:mb-0 sm:px-8"
                  }
                  onClick={() => settokenTab("polygone")}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_639)">
                      <path
                        d="M6 0C9.31388 0 12 2.68613 12 6C12 9.31388 9.31388 12 6 12C2.68613 12 0 9.31388 0 6C0 2.68613 2.68613 0 6 0ZM4.07625 2.87325L2.48513 3.76275C2.41361 3.79974 2.35377 3.85585 2.31225 3.92484C2.27074 3.99383 2.24919 4.07299 2.25 4.1535V5.946C2.25 6.108 2.33288 6.25612 2.48513 6.33712L4.07662 7.22662C4.215 7.30725 4.395 7.30725 4.54688 7.22662L5.6265 6.61987L6.35962 6.20212L7.43925 5.59575C7.57762 5.51475 7.75725 5.51475 7.9095 5.59575L8.75362 6.0675C8.89237 6.14813 8.98875 6.29625 8.98875 6.45825V7.41525C8.98875 7.57688 8.90625 7.725 8.75362 7.806L7.90987 8.29125C7.77113 8.37225 7.59112 8.37225 7.43925 8.29125L6.59513 7.8195C6.45638 7.7385 6.35962 7.59037 6.35962 7.42875V6.8085L5.6265 7.22662V7.8465C5.6265 8.00813 5.70937 8.15662 5.86162 8.23725L7.45312 9.12675C7.5915 9.20775 7.77112 9.20775 7.92338 9.12675L9.51487 8.23725C9.65325 8.15662 9.75 8.0085 9.75 7.8465V6.054C9.75081 5.97349 9.72926 5.89433 9.68775 5.82534C9.64623 5.75636 9.58639 5.70024 9.51487 5.66325L7.90987 4.75987C7.77113 4.67925 7.59112 4.67925 7.43925 4.75987L6.35962 5.38013L5.6265 5.78438L4.54688 6.40425C4.4085 6.48525 4.22888 6.48525 4.07662 6.40425L3.21863 5.919C3.08025 5.83838 2.9835 5.69025 2.9835 5.52825V4.57125C2.9835 4.40963 3.06638 4.2615 3.21863 4.1805L4.06238 3.70875C4.20113 3.62775 4.38112 3.62775 4.53337 3.70875L5.37712 4.1805C5.51587 4.2615 5.61263 4.40963 5.61263 4.57125V5.1915L6.34575 4.77338V4.1535C6.34656 4.07299 6.32501 3.99383 6.2835 3.92484C6.24198 3.85585 6.18214 3.79974 6.11063 3.76275L4.54688 2.87325C4.4085 2.79225 4.22888 2.79225 4.07662 2.87325H4.07625Z"
                        fill={tokenTab === "polygone" ? "#ffffff" : "#4F018B"}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_639">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span
                    className={
                      tokenTab === "polygone"
                        ? "text-white font-oswald font-semibold text-[12px]"
                        : "text-primary font-oswald font-semibold text-[12px]"
                    }
                  >
                    Polygone
                  </span>
                </button>
              </div>
              {/* End Buttons  */}

              {/* Table  */}
              <div className="overflow-auto">
                <div className="w-[640px] sm:w-auto">
                  <div className="flex items-center justify-between font-poppins border-b-2 border-primary">
                    <div className="basis-[3%]"></div>
                    <div className="py-4 font-normal text-base basis-[25%] flex items-center space-x-1">
                      <span className="font-semibold text-primary">Name</span>
                      <img src={detailicon} alt="detailicon" />
                    </div>
                    <div className="py-4 font-normal text-base basis-[15%] text-right">
                      <span className="font-semibold text-primary">Price</span>
                    </div>
                    <div className="py-4 font-normal text-base basis-[9%] flex items-center justify-end text-right space-x-1">
                      <span className="font-semibold text-primary">24%</span>
                    </div>
                    <div className="py-4 font-normal text-base basis-[17%] flex items-center justify-end text-right space-x-1">
                      <span className="font-semibold text-primary ">Market Cap</span>
                    </div>
                    <div className="py-4 font-normal text-base basis-[17%] text-right">
                      <span className="font-semibold text-primary">Volume (1M)</span>
                    </div>
                    <div className="basis-[3%]"></div>
                  </div>
                  {/* Data Grid  */}
                  {tableData.length > 0 ? (
                    tableData.map((data) => {
                      return <TableRows key={data.id} {...data} />;
                    })
                  ) : (
                    <p className="text-white text-para font-medium">NO Data Found...</p>
                  )}
                  {/* End Data Grid  */}
                </div>
              </div>
              <div className="flex items-center justify-center mt-7">
                <button className="font-poppins text-primary text-xl font-semibold underline hover:no-underline underline-offset-2">
                  See More
                </button>
              </div>
            </div>

            {/* End Table  */}
          </div>
          {/* End Table Section  */}

          {/* Swap Section  */}
          <div className="col-span-3 md:col-span-1">
            <Swap />
          </div>
          {/* End Swap Section  */}

          {/* Faq Section  */}
          <div className="col-span-3 lg:col-span-2 md:col-auto">
            <div className="border-2 border-primary rounded-tr-2xl rounded-tl-2xl p-4 sm:p-6">
              <h3 className="font-poppins font-semibold text-primary  mb-2 ml-4 text-2xl sm:text-4xl">FAQs</h3>
              {faqsData.map((data) => {
                return <Faqs key={data.title} {...data} />;
              })}
            </div>
          </div>
          {/* Faq Section  */}

          {/* Slider Section */}
          <div className="col-span-3 md:col-span-3 lg:col-auto ">
            <div className="text-white rounded-tr-2xl rounded-tl-2xl relative">
              <NFTSwiper />
            </div>
          </div>
          {/* End Slider Section  */}
        </div>
      </div>
    </div>
  );
};

export default SwapSection;
