import logofooter from "../assets/imgs/logo-footer.png";
import twitter from "../assets/imgs/twitter.png";
import telegram from "../assets/imgs/telegram.png";
import telegramfooter from "../assets/imgs/telegram-footer.png";
import twitterfooter from "../assets/imgs/twitter-footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-footer">
        <div className="max-w-[1300px] m-auto">
          <div className="flex justify-between pt-10 pb-6">
            <div className="basis-[494px] flex flex-col space-y-5">
              <a href="/">
                <img src={logofooter} alt="logofooter" />
              </a>
              <p className="text-white font-poppins text-xl font-normal leading-10">
                Volley is a one-stop-shop for decentralized finance, cross-chain swaps, staking, earning, and yield
                farming on the Ethereum Blockchain.
              </p>
              <div className="flex space-x-6">
                <a href="/">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="/">
                  <img src={telegram} alt="telegram" />
                </a>
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="basis-60 placeholder:text-primarygray outline-none border  border-primarygreen text-primarygray placeholder:font-oswald font-oswald text-base block rounded-xl px-6 py-2"
                />
                <button className="basis-32 text-white bg-primary border font-oswald border-primarygreen rounded-xl">
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <div className="pt-10 basis-[260px]">
              <h3 className="font-poppins font-semibold text-white text-3xl">Marketplace</h3>
              <ul className="flex flex-col space-y-5 mt-7">
                <li>
                  <a href="/" className="text-secondarygray font-poppins font-normal text-xl">
                    Explore
                  </a>
                </li>
                <li>
                  <a href="/" className="text-secondarygray font-poppins font-normal text-xl">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="/" className="text-secondarygray font-poppins font-normal text-xl">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="/" className="text-secondarygray font-poppins font-normal text-xl">
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-10 basis-[260px]">
              <h3 className="font-poppins font-semibold text-white text-3xl">Links</h3>
              <ul className="flex flex-col space-y-5 mt-7">
                <li>
                  <a href="/" className="text-secondarygray font-poppins font-normal text-xl">
                    Tokens
                  </a>
                </li>
                <li>
                  <a href="/" className="text-secondarygray font-poppins font-normal text-xl">
                    API
                  </a>
                </li>
                <li>
                  <a href="/" className="text-secondarygray font-poppins font-normal text-xl">
                    BOT
                  </a>
                </li>
                <li>
                  <a href="/" className="text-secondarygray font-poppins font-normal text-xl">
                    Become Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary font-montserrat">
        <div className="max-w-[1300px] m-auto">
          <div className="flex items-center justify-between py-6">
            <ul className="text-[#CCD5DF] flex items-center space-x-8">
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
            <p className="text-[12px] font-semibold text-[#CCD5DF] basis-[325px] text-left">© 2023 VOLLEY SWAP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
