import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutAside from "../components/AboutAside";
import AboutBanner from "../components/AboutBanner";
import bsc from "../assets/icons/bsc.png";
import ethereum from "../assets/icons/ethereum.png";
import polygone from "../assets/icons/polygone.png";
import detailicon from "../assets/icons/detail-icon.png";
import chevrondown from "../assets/icons/chevron-down.png";
import chevronblackdown from "../assets/icons/chevron-black-down.png";
import BinanceCoin from "../assets/imgs/Binance Coin.png";
import arrows from "../assets/imgs/arrows.png";
import accountwallet from "../assets/imgs/account_balance_wallet.png";
import AAVE from "../assets/imgs/AAVE.png";
import { tableData } from "../data/TableData";
import TableRows from "../components/TableRows";

const About = () => {
  const [activeTab, setactiveTab] = useState("swap");
  return (
    <>
      <Navbar />
      <div className="max-w-[1300px] m-auto">
        <div className="flex items-start gap-6 py-4">
          <AboutAside />
          <div className="grow">
            <AboutBanner />
            <div className="flex gap-3 py-4">
              {/* Table Side  */}
              {/* Tabs  */}
              <div className="basis-[65%] flex-auto">
                <div className="flex  text-primary border-b-2 border-primary">
                  <button className="basis-1/3 block text-center relative" onClick={() => setactiveTab("swap")}>
                    <span className="font-oswald text-xl font-bold block py-3">SWAP</span>
                    {activeTab === "swap" && (
                      <span className="block absolute bottom-0 w-full h-[3px] bg-primary"></span>
                    )}
                  </button>
                  <button className="basis-1/3 block text-center relative" onClick={() => setactiveTab("token")}>
                    <span className="font-oswald text-xl font-bold block py-3">MY TOKEN</span>
                    {activeTab === "token" && (
                      <span className="block absolute bottom-0 w-full h-[3px] bg-primary transition-all ease-in-out"></span>
                    )}
                  </button>
                  <button className="basis-1/3 block text-center relative" onClick={() => setactiveTab("referal")}>
                    <span className="font-oswald text-xl font-bold block py-3">REFFERAL</span>
                    {activeTab === "referal" && (
                      <span className="block absolute bottom-0 w-full h-[3px] bg-primary"></span>
                    )}
                  </button>
                </div>
                <div className="border-2 border-primary p-6 mt-4 rounded-tr-2xl rounded-tl-2xl">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 border-2 border-primarygreen px-8 py-[7px] rounded-3xl">
                      <img src={bsc} alt="bsc" />
                      <span className="font-oswald font-semibold text-[12px] text-primary">BSC</span>
                    </button>
                    <button className="flex items-center space-x-1 border-2 border-primarygreen px-8 py-[7px] rounded-3xl bg-primary">
                      <img src={ethereum} alt="bsc" />
                      <span className="text-white font-oswald font-semibold text-[12px]">ETHEREUM</span>
                    </button>
                    <button className="flex items-center space-x-1 border-2 border-primarygreen px-8 py-[7px] rounded-3xl">
                      <img src={polygone} alt="bsc" />
                      <span className="font-oswald font-semibold text-[12px] text-primary">POLYGON</span>
                    </button>
                  </div>
                  {/* Table  */}
                  <div className="flex items-center justify-between font-poppins border-b-2 border-primary">
                    <div className="basis-[3%]"></div>
                    <div className="py-4 font-normal text-base basis-[25%] flex items-center space-x-1">
                      <span className="font-semibold text-primary">Name</span>
                      <img src={detailicon} alt="detailicon" />
                    </div>
                    <div className="py-4 font-normal text-base basis-[15%] text-right">
                      <span className="font-semibold text-primary">Price</span>
                    </div>
                    <div className="py-4 font-normal text-base basis-[9%] flex items-center justify-end space-x-1">
                      <span className="font-semibold text-primary">24%</span>
                      {/* <img src={detailicon} alt="detailicon" /> */}
                    </div>
                    <div className="py-4 font-normal text-base basis-[17%] flex items-center justify-end space-x-1">
                      <span className="font-semibold text-primary ">Market Cap</span>
                      {/* <img src={detailicon} alt="detailicon" /> */}
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
                  {/* End Table  */}
                  <div className="flex items-center justify-center mt-5">
                    <button className="font-poppins text-primary text-xl font-semibold underline hover:no-underline underline-offset-2">
                      See More
                    </button>
                  </div>
                </div>
              </div>
              {/* End Tabs  */}

              {/* Swap Side  */}
              <div className="basis-[35%] border-2 border-primarygreen rounded-tr-2xl rounded-tl-2xl p-6">
                <div className="bg-primary text-white font-poppins text-4xl font-bold rounded-2xl py-2 text-center">
                  <p>SWAP</p>
                </div>
                <div className="py-4">
                  <h4 className="text-primary font-semibold font-poppins text-[22px] ">Swap</h4>
                  <p className="text-primarygreen font-normal font-poppins text-sm leading-5">
                    Swap tokens in an instant
                  </p>
                </div>
                <div className="flex items-end justify-between font-poppins pt-4 pb-3">
                  <div className="flex items-center  space-x-[5px]">
                    <button className="text-primary font-bold text-[12px]">Market</button>
                    <button className="text-primary font-medium text-[12px]">Limit</button>
                    <span className="inline-block py-[2px] px-[4px] bg-primary text-[6px] font-bold text-white rounded-md">
                      25%
                    </span>
                    <span className="inline-block py-[2px] px-[4px] bg-primary text-[6px] font-bold text-white rounded-md">
                      50%
                    </span>
                    <span className="inline-block py-[2px] px-[4px] bg-primary text-[6px] font-bold text-white rounded-md">
                      75%
                    </span>
                    <span className="inline-block py-[2px] px-[4px] bg-primary text-[6px] font-bold text-white rounded-md">
                      100%
                    </span>
                  </div>
                  <button className="w-32 flex items-center justify-between border-2 border-primarygreen px-4 py-[4px] rounded-md bg-primary">
                    <div className="flex items-center">
                      <img src={ethereum} alt="bsc" />
                      <span className="text-white font-oswald font-semibold text-[12px] inline-block pl-1">
                        ETHEREUM
                      </span>
                    </div>
                    <img src={chevrondown} alt="chevrondown" />
                  </button>
                </div>
                <div className="border-2 border-primarygreen rounded-lg bg-[#F3F8FF] relative flex pt-5 px-4 pb-3">
                  <span className="text-[#757575] text-[10px] font-poppins font-normal inline-block leading-3 absolute top-2">
                    From
                  </span>
                  <input
                    type="text"
                    className="block outline-none border-none basis-9/12 bg-transparent font-poppins"
                  />
                  <button className="font-poppins flex items-center basis-20 justify-between">
                    <div className="flex items-center space-x-1">
                      <img src={BinanceCoin} alt="BinanceCoin" />
                      <span className="font-poppins font-semibold text-black text-sm">BNB</span>
                    </div>
                    <img src={chevronblackdown} alt="chevronblackdown" />
                  </button>
                </div>
                <div className="flex items-center justify-center py-6">
                  <img src={arrows} alt="arrows" />
                </div>
                <div className="border-2 border-primarygreen rounded-lg bg-[#F3F8FF] relative flex pt-5 px-4 pb-3">
                  <span className="text-[#757575] text-[10px] font-poppins font-normal inline-block leading-3 absolute top-2">
                    To
                  </span>
                  <input
                    type="text"
                    className="block outline-none border-none basis-9/12 bg-transparent font-poppins"
                  />
                  <button className="font-poppins flex items-center basis-20 justify-between">
                    <div className="flex items-center space-x-1">
                      <img src={AAVE} alt="AAVE" />
                      <span className="font-poppins font-semibold text-black text-sm">AAVE</span>
                    </div>
                    <img src={chevronblackdown} alt="chevronblackdown" />
                  </button>
                </div>

                <button className="bg-primary flex items-center justify-center font-poppins rounded-xl text-white w-full space-x-3 py-3 mt-8">
                  <img src={accountwallet} alt="accountwallet" />
                  <span>Connect Wallet</span>
                </button>
                <span className="inline-block mt-10 font-poppins text-primary">Refferal</span>
              </div>
              {/* Swap End  */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
