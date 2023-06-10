import { useToggle } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ConnectWallet from "../components/ConnectWallet";
import TokenModal from "../components/TokenModal";
import SwapSection from "../components/SwapSection";
import InfoSection from "../components/InfoSection";

const About = () => {
  const { tokenModal, tokenModal2, connectWallet, activeTab, handlesettokenFrom, handlesettokenTo } = useToggle();

  return (
    <>
      <Navbar />
      <div className="max-w-[1300px] m-auto px-4 2xl:px-0">
        {activeTab === "swap" && <SwapSection />}
        {activeTab === "bot" && <SwapSection />}
        {activeTab === "info" && <InfoSection />}
      </div>

      {/* Footer */}
      <Footer />
      {/* End Footer */}

      {/* Connect Wallet Modal */}
      {connectWallet && <ConnectWallet />}
      {/* End Connect Wallet Modal  */}

      {/* Token Modal  */}
      {tokenModal && <TokenModal handleFrom={handlesettokenFrom} />}
      {tokenModal2 && <TokenModal handleTo={handlesettokenTo} />}
      {/* End Token Modal  */}
    </>
  );
};

export default About;
