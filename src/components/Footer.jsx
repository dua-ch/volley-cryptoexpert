import logofooter from "../assets/imgs/logo-footer.png";
import twitter from "../assets/imgs/twitter.png";
import telegram from "../assets/imgs/telegram.png";
import telegramfooter from "../assets/imgs/telegram-footer.png";
import twitterfooter from "../assets/imgs/twitter-footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-footer">
        <div className="max-w-[1300px] m-auto px-4 2xl:px-0">
          <div className="flex justify-between pt-10 pb-6 flex-wrap">
            <div className="basis-[494px] flex flex-col space-y-5">
              <a href="/">
                <img src={logofooter} alt="logofooter" />
              </a>
              <p className="text-white font-poppins text-base font-normal leading-8 md:leading-10 md:text-xl">
                Volley is a one-stop-shop for decentralized finance, cross-chain
                swaps, staking, earning, and yield farming on the Ethereum
                Blockchain.
              </p>
            </div>
            <div className="md:pt-10 pt-8 basis-[494px]">
              <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="sm:basis-60 placeholder:text-primarygray outline-none border  border-primarygreen text-primarygray placeholder:font-oswald font-oswald text-base block rounded-xl px-6 py-2"
                />
                <button className="sm:basis-32 text-white bg-primary border font-oswald border-primarygreen rounded-xl py-2 sm:py-0">
                  SUBSCRIBE
                </button>
              </div>
              <div className="flex space-x-6 pt-6">
                <a href="/">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="/">
                  <img src={telegram} alt="telegram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary font-montserrat">
        <div className="max-w-[1300px] m-auto px-4 2xl:px-0">
          <div className="flex items-center justify-between py-6 flex-col space-y-4 sm:space-y-0 sm:flex-row">
            <ul className="text-[#CCD5DF] flex items-center space-x-4 sm:space-x-8">
              <li>
                <a href="/" className="text-[12px] font-semibold ">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="/" className="text-[12px] font-semibold ">
                  CONTACT
                </a>
              </li>
              <li>
                <a href="/" className="text-[12px] font-semibold ">
                  PIVACY POLICY
                </a>
              </li>
            </ul>
            <ul className="flex items-center space-x-6">
              <li>
                <a href="/">
                  <img src={telegramfooter} alt="telegramfooter" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={twitterfooter} alt="twitterfooter" />
                </a>
              </li>
            </ul>
            <p className="text-[12px] font-semibold text-[#CCD5DF] lg:basis-[325px] text-left">
              © 2023 VOLLEY SWAP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
