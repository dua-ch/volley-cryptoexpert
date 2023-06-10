import { createContext, useState, useContext } from "react";
import BinanceCoin from "../assets/imgs/Binance Coin.png";
import AAVE from "../assets/imgs/AAVE.png";

export const AppProvider = createContext();

export const useToggle = () => {
  return useContext(AppProvider);
};

const AppContext = ({ children }) => {
  const [tokenModal, settokenModal] = useState(false);
  const [tokenModal2, settokenModal2] = useState(false);
  const [connectWallet, setconnectWallet] = useState(false);

  const [tokenFrom, settokenFrom] = useState({ token: "BNB", tokenImg: BinanceCoin });
  const [tokenTo, settokenTo] = useState({ token: "AAVE", tokenImg: AAVE });

  const handletokenModal = () => {
    settokenModal(!tokenModal);
  };
  const handletokenModal2 = () => {
    settokenModal2(!tokenModal2);
  };
  const handleconnectWallet = () => {
    setconnectWallet(!connectWallet);
  };

  const handlesettokenFrom = (token, img) => {
    settokenFrom({ ...token, token: token, tokenImg: img });
  };
  const handlesettokenTo = (token, img) => {
    settokenTo({ ...token, token: token, tokenImg: img });
  };

  return (
    <AppProvider.Provider
      value={{
        handletokenModal,
        handletokenModal2,
        handleconnectWallet,
        handlesettokenFrom,
        handlesettokenTo,
        tokenModal,
        tokenModal2,
        connectWallet,
        tokenFrom,
        tokenTo,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};

export default AppContext;
