import { useState } from "react";
import { useToggle } from "../context/AppContext";
import ethereum from "../assets/icons/ethereum.png";
import copyImg from "../assets/icons/copy-img.svg";
import chevrondown from "../assets/icons/chevron-down.png";
import chevronblackdown from "../assets/icons/chevron-black-down.png";
import arrows from "../assets/imgs/arrows.png";
import accountwallet from "../assets/imgs/account_balance_wallet.png";
import { Dropdown } from "../data/Dropdown";

const Swap = () => {
  const [Limit, setLimit] = useState(25);
  const [showFields, setshowFields] = useState("market");
  const [selectToken, setselectToken] = useState(false);
  const [selectItem, setselectItem] = useState("Ethereum");

  const { handletokenModal, handletokenModal2, handleconnectWallet, tokenFrom, tokenTo } = useToggle();

  const [Refferal, setRefferal] = useState("0x78gv31vhd9asdb1kei1iebkeu12012ob12");

  const handleRefferal = (e) => {
    setRefferal(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(Refferal);
  };

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
          <button
            className={
              showFields === "market" ? "text-primary font-bold text-[12px]" : "text-primary font-medium text-[12px]"
            }
            onClick={() => setshowFields("market")}
          >
            Market
          </button>
          <button
            className={
              showFields === "limit" ? "text-primary font-bold text-[12px]" : "text-primary font-medium text-[12px]"
            }
            onClick={() => setshowFields("limit")}
          >
            Limit
          </button>
          <button
            className={
              Limit === 25
                ? "inline-block py-[2px] px-[4px] bg-primary text-[6px] font-bold text-white rounded-md border border-transparent"
                : "inline-block py-[2px] px-[4px] bg-white text-[6px] font-bold text-primary rounded-md border border-[#ccccc]"
            }
            onClick={() => setLimit(25)}
          >
            25%
          </button>
          <button
            className={
              Limit === 50
                ? "inline-block py-[2px] px-[4px] bg-primary text-[6px] font-bold text-white rounded-md border border-transparent"
                : "inline-block py-[2px] px-[4px] bg-white text-[6px] font-bold text-primary rounded-md border border-[#ccccc]"
            }
            onClick={() => setLimit(50)}
          >
            50%
          </button>
          <button
            className={
              Limit === 75
                ? "inline-block py-[2px] px-[4px] bg-primary text-[6px] font-bold text-white rounded-md border border-transparent"
                : "inline-block py-[2px] px-[4px] bg-white text-[6px] font-bold text-primary rounded-md border border-[#ccccc]"
            }
            onClick={() => setLimit(75)}
          >
            75%
          </button>
          <button
            className={
              Limit === 100
                ? "inline-block py-[2px] px-[4px] bg-primary text-[6px] font-bold text-white rounded-md border border-transparent"
                : "inline-block py-[2px] px-[4px] bg-white text-[6px] font-bold text-primary rounded-md border border-[#ccccc]"
            }
            onClick={() => setLimit(100)}
          >
            100%
          </button>
        </div>
        <div className="relative">
          <button
            className="flex items-center justify-between border-2 w-[103px] border-primarygreen py-[4px] rounded-md bg-primary px-2 lg:px-3"
            onClick={() => setselectToken(!selectToken)}
          >
            <div className="flex items-center">
              <img src={ethereum} alt="bsc" />
              <span className="text-white font-oswald font-semibold text-[12px] inline-block pl-1">{selectItem}</span>
            </div>
            <img src={chevrondown} alt="chevrondown" className={selectToken === true ? "ml-1 rotate-180" : "ml-1"} />
          </button>
          {selectToken && (
            <ul
              className="absolute z-20 overflow-hidden border-l-2 border-r-2 border-b-2 border-primarygreen w-[103px] bg-white rounded-bl-lg rounded-br-lg"
              onClick={() => setselectToken(false)}
            >
              {Dropdown.map((items) => {
                return (
                  <li
                    key={items.id}
                    className={selectItem === items.token ? "hover:bg-slate-200 bg-slate-300" : "hover:bg-slate-200"}
                    onClick={() => setselectItem(items.token)}
                  >
                    <button className="flex items-center justify-between  py-[4px] px-2 lg:px-3 w-full">
                      <div className="flex items-center">
                        <img src={items.token_icon} alt={items.token_icon} />
                        <span className={"font-oswald font-semibold text-[12px] inline-block pl-1  text-primary"}>
                          {items.token}
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="border-2 border-primarygreen rounded-lg bg-[#F3F8FF] relative flex justify-between pt-5 px-4 pb-3">
        <span className="text-[#757575] text-[10px] font-poppins font-normal inline-block leading-3 absolute top-2 left-3">
          From
        </span>
        <input type="text" className="font-roboto outline-none border-none bg-transparent w-2/3 lg:w-9/12" />
        <button className="font-poppins flex items-center justify-between" onClick={handletokenModal}>
          <div className="flex items-center ">
            <img src={tokenFrom.tokenImg} alt={tokenFrom.tokenImg} className="mr-1 h-4 w-4" />
            <span className="font-poppins font-semibold text-black text-sm">{tokenFrom.token}</span>
            <img src={chevronblackdown} alt="chevronblackdown" className="lg:ml-3 ml-2" />
          </div>
        </button>
      </div>
      <div
        className={
          showFields === "limit" ? "flex items-center justify-center my-1" : "flex items-center justify-center my-6"
        }
      >
        <button>
          <img src={arrows} alt="arrows" />
        </button>
      </div>
      <div className="border-2 border-primarygreen rounded-lg bg-[#F3F8FF] relative flex justify-between pt-5 px-4 pb-3">
        <span className="text-[#757575] text-[10px] font-poppins font-normal inline-block leading-3 absolute top-2 left-3">
          To
        </span>
        <input type="text" className="font-roboto outline-none border-none bg-transparent w-2/3 lg:w-9/12" />
        <button className="font-poppins flex items-center justify-between" onClick={handletokenModal2}>
          <div className="flex items-center ">
            <img src={tokenTo.tokenImg} alt={tokenTo.token} className="mr-1 h-4 w-4" />
            <span className="font-poppins font-semibold text-black text-sm">{tokenTo.token}</span>
            <img src={chevronblackdown} alt="chevronblackdown" className="lg:ml-3 ml-2" />
          </div>
        </button>
      </div>
      {showFields === "limit" && (
        <div className="border-2 border-primarygreen rounded-lg bg-[#F3F8FF] relative flex items-center justify-between pt-5 px-4 pb-3 mt-2">
          <span className="text-[#757575] text-[10px] font-poppins font-normal inline-block leading-3 absolute top-2 left-3">
            Price
          </span>
          <span className="text-[#757575] text-[12px] font-roboto font-normal inline-block leading-3 absolute top-2 right-4">
            22.173
          </span>
          <input type="text" className="font-roboto outline-none border-none bg-transparent w-1/2 lg:w-2/3" />
          <span className="font-poppins font-semibold text-black text-sm text-right block w-1/2">
            {tokenFrom.token} Per {tokenTo.token}
          </span>
        </div>
      )}

      <button
        className={
          showFields === "limit"
            ? "bg-primary flex items-center justify-center font-poppins rounded-xl text-white w-full space-x-3 py-4 mt-2 mb-1"
            : "bg-primary flex items-center justify-center font-poppins rounded-xl text-white w-full space-x-3 py-4 mt-8 mb-2"
        }
        onClick={handleconnectWallet}
      >
        <img src={accountwallet} alt="accountwallet" />
        <span>Connect Wallet</span>
      </button>
      <span className="font-poppins font-medium text-sm text-primary inline-block">Refferal:</span>
      <div className="relative flex items-center border border-primarygreen rounded-xl px-3 py-[10px] space-x-3">
        <input
          type="text"
          placeholder="Refferal"
          value={Refferal}
          onChange={handleRefferal}
          readOnly
          className="inline-block font-poppins  text-primary outline-none  w-full rounded-tl-xl rounded-bl-xl text-sm  border-0 placeholder:text-primary"
        />
        <button className="" onClick={() => handleCopy()}>
          <img src={copyImg} alt="copyImg" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Swap;
