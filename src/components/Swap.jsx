import ethereum from "../assets/icons/ethereum.png";
import BinanceCoin from "../assets/imgs/Binance Coin.png";
import chevrondown from "../assets/icons/chevron-down.png";
import chevronblackdown from "../assets/icons/chevron-black-down.png";
import arrows from "../assets/imgs/arrows.png";
import accountwallet from "../assets/imgs/account_balance_wallet.png";
import AAVE from "../assets/imgs/AAVE.png";

const Swap = () => {
  return (
    <div className="border-2 border-primarygreen rounded-tr-2xl rounded-tl-2xl p-4 sm:p-6">
      <div className="bg-primary text-white font-poppins text-4xl font-bold rounded-2xl py-2 text-center">
        <p>SWAP</p>
      </div>
      <div className="py-4">
        <h4 className="text-primary font-semibold font-poppins text-[22px] ">Swap</h4>
        <p className="text-primarygreen font-normal font-poppins text-sm leading-5">Swap tokens in an instant</p>
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
            <span className="text-white font-oswald font-semibold text-[12px] inline-block pl-1">ETHEREUM</span>
          </div>
          <img src={chevrondown} alt="chevrondown" />
        </button>
      </div>
      <div className="border-2 border-primarygreen rounded-lg bg-[#F3F8FF] relative flex justify-between pt-5 px-4 pb-3">
        <span className="text-[#757575] text-[10px] font-poppins font-normal inline-block leading-3 absolute top-2 left-3">
          To
        </span>
        <input type="text" className="outline-none border-none bg-transparent font-poppins w-2/3 lg:w-9/12" />
        <button className="font-poppins flex items-center justify-between">
          <div className="flex items-center ">
            <img src={BinanceCoin} alt="AAVE" className="mr-1" />
            <span className="font-poppins font-semibold text-black text-sm">BNB</span>
            <img src={chevronblackdown} alt="chevronblackdown" className="lg:ml-3 ml-2" />
          </div>
        </button>
      </div>
      <button className="flex items-center justify-center w-full py-6">
        <img src={arrows} alt="arrows" />
      </button>
      <div className="border-2 border-primarygreen rounded-lg bg-[#F3F8FF] relative flex justify-between pt-5 px-4 pb-3">
        <span className="text-[#757575] text-[10px] font-poppins font-normal inline-block leading-3 absolute top-2 left-3">
          To
        </span>
        <input type="text" className="outline-none border-none bg-transparent font-poppins w-2/3 lg:w-9/12" />
        <button className="font-poppins flex items-center justify-between">
          <div className="flex items-center ">
            <img src={AAVE} alt="AAVE" className="mr-1" />
            <span className="font-poppins font-semibold text-black text-sm">AAVE</span>
            <img src={chevronblackdown} alt="chevronblackdown" className="lg:ml-3 ml-2" />
          </div>
        </button>
      </div>

      <button className="bg-primary flex items-center justify-center font-poppins rounded-xl text-white w-full space-x-3 py-4 mt-8">
        <img src={accountwallet} alt="accountwallet" />
        <span>Connect Wallet</span>
      </button>
      <div className="relative">
        <input
          type="text"
          placeholder="Refferal"
          className="inline-block mt-6 font-poppins  text-primary outline-none focus:border focus:border-primarygreen w-full px-3 py-2 rounded-xl border border-transparent placeholder:text-primary"
        />
      </div>
    </div>
  );
};

export default Swap;
