import logo from "../assets/imgs/logo.png";
import searchicon from "../assets/icons/search-icon.png";

const Navbar = () => {
  return (
    <header className="bg-[#DAFFF2]">
      <div className="max-w-[1300px] m-auto">
        <div className="flex items-center space-x-12">
          <nav className="flex items-center space-x-10">
            <a href="/">
              <img src={logo} alt="site-logo" />
            </a>
            <ul className="flex items-center space-x-10">
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
          <div className="flex items-center space-x-6 grow">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search Token or Wallets"
                className="placeholder:text-[#828282] outline-none border border-primarygreen text-primarygray placeholder:font-oswald font-oswald text-base block w-full rounded-xl pl-10 py-2 "
              />
              <img src={searchicon} alt="searchicon" className="absolute top-[14px] left-4 w-4" />
            </div>
            <button className="bg-primary text-white font-oswald font-bold text-base py-[7px] px-8 rounded-3xl basis-48">
              Connect
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
