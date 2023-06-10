import { useState } from "react";
import { useToggle } from "../context/AppContext";
import ethereum from "../assets/icons/ethereum.png";
// import BinanceCoin from "../assets/imgs/Binance Coin.png";
import chevrondown from "../assets/icons/chevron-down.png";
import chevronblackdown from "../assets/icons/chevron-black-down.png";
import arrows from "../assets/imgs/arrows.png";
import accountwallet from "../assets/imgs/account_balance_wallet.png";
import copyimg from "../assets/imgs/copy-img.svg";

const Swap = () => {
  const [Limit, setLimit] = useState(25);

  const { handletokenModal, handletokenModal2, handleconnectWallet, tokenFrom, tokenTo } = useToggle();

  return (
    <div className="border-2 border-primarygreen rounded-tr-2xl rounded-tl-2xl p-4 sm:p-6">
      <div className="bg-primary text-white font-poppins text-4xl font-bold rounded-2xl py-2 text-center">
        <p>SWAP</p>
      </div>
      <div className="py-4">
        <h4 className="text-primary font-semibold font-poppins text-[22px] ">Swap</h4>
        <p className="text-primarygreen font-normal font-poppins text-sm leading-5">Swap tokens in an instant</p>
      </div>
      <div className="flex items-end justify-between font-poppins pt-4 pb-3 flex-wrap xl:flex-nowrap">
        <div className="flex items-center  space-x-[5px]">
          <button className="text-primary font-bold text-[12px]">Market</button>
          <button className="text-primary font-medium text-[12px]">Limit</button>
          <button
            className={
              Limit > 0 || Limit === 25
                ? "inline-block py-[2px] px-[4px] bg-primary text-[6px] font-bold text-white rounded-md border border-transparent"
                : "inline-block py-[2px] px-[4px] bg-white text-[6px] font-bold text-primary rounded-md border border-[#ccccc]"
            }
            onClick={() => setLimit(25)}
          >
            25%
          </button>
          <button
            className={
              Limit > 25 || Limit === 50
                ? "inline-block py-[2px] px-[4px] bg-primary text-[6px] font-bold text-white rounded-md border border-transparent"
                : "inline-block py-[2px] px-[4px] bg-white text-[6px] font-bold text-primary rounded-md border border-[#ccccc]"
            }
            onClick={() => setLimit(50)}
          >
            50%
          </button>
          <button
            className={
              Limit > 50 || Limit === 75
                ? "inline-block py-[2px] px-[4px] bg-primary text-[6px] font-bold text-white rounded-md border border-transparent"
                : "inline-block py-[2px] px-[4px] bg-white text-[6px] font-bold text-primary rounded-md border border-[#ccccc]"
            }
            onClick={() => setLimit(75)}
          >
            75%
          </button>
          <button
            className={
              Limit > 75 || Limit === 100
                ? "inline-block py-[2px] px-[4px] bg-primary text-[6px] font-bold text-white rounded-md border border-transparent"
                : "inline-block py-[2px] px-[4px] bg-white text-[6px] font-bold text-primary rounded-md border border-[#ccccc]"
            }
            onClick={() => setLimit(100)}
          >
            100%
          </button>
        </div>
        <button className="flex items-center justify-between border-2 border-primarygreen py-[4px] rounded-md bg-primary px-2 lg:px-3">
          <div className="flex items-center">
            <img src={ethereum} alt="bsc" />
            <span className="text-white font-oswald font-semibold text-[12px] inline-block pl-1">ETHEREUM</span>
          </div>
          <img src={chevrondown} alt="chevrondown" className="ml-1" />
        </button>
      </div>
      <div className="border-2 border-primarygreen rounded-lg bg-[#F3F8FF] relative flex justify-between pt-5 px-4 pb-3">
        <span className="text-[#757575] text-[10px] font-poppins font-normal inline-block leading-3 absolute top-2 left-3">
          From
        </span>
        <input type="text" className="outline-none border-none bg-transparent font-poppins w-2/3 lg:w-9/12" />
        <button className="font-poppins flex items-center justify-between" onClick={handletokenModal}>
          <div className="flex items-center ">
            <img src={tokenFrom.tokenImg} alt={tokenFrom.tokenImg} className="mr-1 h-4 w-4" />
            <span className="font-poppins font-semibold text-black text-sm">{tokenFrom.token}</span>
            <img src={chevronblackdown} alt="chevronblackdown" className="lg:ml-3 ml-2" />
          </div>
        </button>
      </div>
      <div className="flex items-center justify-center my-6">
        <button>
          <img src={arrows} alt="arrows" />
        </button>
      </div>
      <div className="border-2 border-primarygreen rounded-lg bg-[#F3F8FF] relative flex justify-between pt-5 px-4 pb-3">
        <span className="text-[#757575] text-[10px] font-poppins font-normal inline-block leading-3 absolute top-2 left-3">
          To
        </span>
        <input type="text" className="outline-none border-none bg-transparent font-poppins w-2/3 lg:w-9/12" />
        <button className="font-poppins flex items-center justify-between" onClick={handletokenModal2}>
          <div className="flex items-center ">
            <img src={tokenTo.tokenImg} alt={tokenTo.token} className="mr-1 h-4 w-4" />
            <span className="font-poppins font-semibold text-black text-sm">{tokenTo.token}</span>
            <img src={chevronblackdown} alt="chevronblackdown" className="lg:ml-3 ml-2" />
          </div>
        </button>
      </div>

      <button
        className="bg-primary flex items-center justify-center font-poppins rounded-xl text-white w-full space-x-3 py-4 mt-8"
        onClick={handleconnectWallet}
      >
        <img src={accountwallet} alt="accountwallet" />
        <span>Connect Wallet</span>
      </button>
      <span className="font-poppins  text-primary px-3 py-2 block mt-4">Refferal</span>
      <div className="relative mt-1">
        <input
          type="text"
          className="inline-block font-poppins  text-primary  border border-primarygreen w-full px-3 py-2 rounded-xl border  placeholder:text-primary"
        />
        <img src={copyimg} alt="bannerimg" className="copyrefferal" id="copy"/>
      </div>
    </div>
  );
};

export default Swap;
