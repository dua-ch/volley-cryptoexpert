import { useToggle } from "../context/AppContext";
import { Tokens, commonTokens } from "../data/TokenData";
import searchicon from "../assets/icons/search-icon.png";

const TokenModal = ({ handleFrom, handleTo }) => {
  const { handletokenModal, tokenModal, handletokenModal2 } = useToggle();

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-full bg-overlay"
        onClick={tokenModal === true ? handletokenModal : handletokenModal2}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-sm w-full px-4 sm:px-0">
        <div className="bg-white rounded-3xl">
          <div className="pt-4 px-4 sm:pt-6 sm:px-6">
            <div className="flex items-center justify-between pb-3">
              <p className="font-poppins font-semibold text-primary">Select a Token</p>
              <button className="" onClick={tokenModal === true ? handletokenModal : handletokenModal2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#4F018B"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search Token or Wallets"
                className="placeholder:text-[#828282] outline-none border border-primarygreen text-primarygray font-oswald text-base block w-full rounded-xl pl-10 py-2 placeholder:font-oswald"
              />
              <img src={searchicon} alt="searchicon" className="absolute top-[14px] left-4 w-4" />
            </div>
            <span className="inline-block py-3 font-poppins text-primary font-medium text-sm">Common Tokens</span>
            <div
              className="flex items-center justify-between font-poppins text-primary"
              onClick={tokenModal === true ? handletokenModal : handletokenModal2}
            >
              {commonTokens.length > 0 ? (
                commonTokens.map((token) => {
                  return (
                    <div
                      className="flex space-x-2 items-center cursor-pointer"
                      key={token.id}
                      onClick={
                        tokenModal === true
                          ? () => handleFrom(token.token_name, token.token_logo)
                          : () => handleTo(token.token_name, token.token_logo)
                      }
                    >
                      <img src={token.token_logo} alt={token.token_name} className="w-5 h-5" />
                      <span className="font-medium inline-block">{token.token_name}</span>
                    </div>
                  );
                })
              ) : (
                <p className="text-primary font-poppins text-center text-sm">No Token Found....</p>
              )}
            </div>
          </div>
          <div className="overflow-y-auto myScrollbar ">
            <div
              className="max-h-[350px] pt-4 sm:pt-4"
              onClick={tokenModal === true ? handletokenModal : handletokenModal2}
            >
              {Tokens.length > 0 ? (
                Tokens.map((token) => {
                  return (
                    <div
                      className="flex items-center justify-between font-poppins py-2 px-4 cursor-pointer sm:px-6 hover:bg-slate-300"
                      key={token.id}
                      onClick={
                        tokenModal === true
                          ? () => handleFrom(token.token_name, token.token_logo)
                          : () => handleTo(token.token_name, token.token_logo)
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <img src={token.token_logo} alt={token.token_logo} className="w-6 h-6" />
                        <div>
                          <span className="text-primary block leading-3 text-sm font-semibold">{token.token_name}</span>
                          <span className="font-normal  leading-3 text-sm text-primarygray">{token.token}</span>
                        </div>
                      </div>
                      <span className="font-medium  text-primarygray leading-3 text-sm">{token.token_price}</span>
                    </div>
                  );
                })
              ) : (
                <p className="text-primary font-poppins text-center text-sm">No Token Found....</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center pb-4 sm:pt-4 sm:pb-6 font-poppins">
            <button className="text-primary font-bold">Manage Token</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenModal;
