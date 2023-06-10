import logo from "../assets/imgs/logo.png";
import searchicon from "../assets/icons/search-icon.png";
import { useState } from "react";
import { useToggle } from "../context/AppContext";

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);

  const { handleconnectWallet } = useToggle();

  return (
    <header className="bg-[#DAFFF2] py-4 md:py-0">
      <div className="max-w-[1300px] m-auto px-4 2xl:px-0">
        <div className="flex items-center sm:space-x-6 lg:space-x-12">
          <nav className="flex items-center space-x-6 lg:space-x-10">
            <a href="/">
              <img src={logo} alt="site-logo" />
            </a>
            <ul className="hidden space-x-6 lg:space-x-10 items-center md:flex">
              <li className="relative">
                <a href="/" className="font-bold font-oswald text-base text-primary py-6 block">
                  About
                </a>
                <div className="line absolute bottom-0 left-0 w-full bg-primary transition-height duration-100 h-1"></div>
              </li>
              <li className="relative group">
                <a href="/" className="font-bold font-oswald text-base text-primary py-6 block">
                  Contact
                </a>
                <div className="line absolute bottom-0 left-0 w-full bg-primary transition-height duration-100 h-0 group-hover:h-1"></div>
              </li>
              <li className="relative group">
                <a href="/" className="font-bold font-oswald text-base text-primary py-6 block">
                  Charities
                </a>
                <div className="line absolute bottom-0 left-0 w-full bg-primary transition-height duration-100 h-0 group-hover:h-1"></div>
              </li>
            </ul>
          </nav>
          <div className="flex items-center justify-end grow space-x-2 sm:space-x-4 md:justify-start lg:space-x-6">
            <div className="w-full relative hidden md:block">
              <input
                type="text"
                placeholder="Search Token or Wallets"
                className="placeholder:text-[#828282] outline-none border border-primarygreen text-primarygray font-oswald text-base block w-full rounded-xl pl-6 py-2 placeholder:font-oswald sm:pl-10"
              />
              <img src={searchicon} alt="searchicon" className="absolute top-[14px] md:left-4 left-2 w-4" />
            </div>
            <button
              className="bg-primary text-white font-oswald font-bold text-base py-[7px] px-8 rounded-3xl md:basis-48"
              onClick={handleconnectWallet}
            >
              Connect
            </button>
            <button className="block md:hidden" onClick={() => setshowNav(!showNav)}>
              {showNav === true ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#4F018B"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#4F018B"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigaion  */}
      <div
        className={
          showNav === true ? "px-4 block md:hidden h-auto fade-in-menus overflow-auto pt-4" : "h-0 overflow-hidden"
        }
      >
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search Token or Wallets"
            className="placeholder:text-[#828282] outline-none border border-primarygreen text-primarygray font-oswald text-base block w-full rounded-xl pl-10 py-2 placeholder:font-oswald"
          />
          <img src={searchicon} alt="searchicon" className="absolute top-[14px] left-4 w-4" />
        </div>
        <nav>
          <ul className="pt-2">
            <li>
              <a href="/" className="font-bold font-oswald text-base text-primary py-2 block">
                About
              </a>
            </li>
            <li>
              <a href="/" className="font-bold font-oswald text-base text-primary py-2 block">
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="font-bold font-oswald text-base text-primary py-2 block">
                Charities
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* End  Mobile Navigaion  */}
    </header>
  );
};

export default Navbar;
