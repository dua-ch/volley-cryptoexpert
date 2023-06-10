import { useToggle } from "../context/AppContext";
import metamask from "../assets/imgs/metamask.png";
import connectwallet from "../assets/imgs/connect-wallet.png";

const ConnectWallet = () => {
  const { handleconnectWallet } = useToggle();
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-overlay" onClick={handleconnectWallet}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-sm w-full px-4 sm:px-0">
        <div className="bg-white rounded-3xl">
          <div className="py-4 px-4 sm:py-6 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="font-poppins font-semibold text-primary text-xl">Connect Wallet</p>
              <button className="" onClick={handleconnectWallet}>
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
            <div className="flex items-center font-poppins space-x-4 justify-between border-2 border-primarygreen p-2 py-3 my-4 rounded-lg hover:shadow-lg cursor-pointer">
              <img src={metamask} alt="metamask" className="w-12 h-12 sm:h-14 sm:w-14" />
              <div>
                <h3 className="text-primary font-bold sm:text-2xl text-xl">Metamask</h3>
                <span className="font-medium text-primarygray text-sm block leading-4">
                  Connect with the provider in your Browser or Dapp
                </span>
              </div>
            </div>
            <div className="flex items-center font-poppins space-x-4 justify-between border-2 border-primarygreen p-2 py-3 my-4 rounded-lg hover:shadow-lg cursor-pointer">
              <img src={connectwallet} alt="metamask" className="w-12 h-12 sm:h-14 sm:w-14" />
              <div>
                <h3 className="text-primary font-bold sm:text-2xl text-xl">WalletConnect</h3>
                <span className="font-medium text-primarygray text-sm block leading-4">
                  Scan with WalletConnect to connect
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
