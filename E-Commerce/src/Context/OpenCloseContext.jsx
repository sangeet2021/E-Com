import { createContext, useState } from "react";

const OpenCloseContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function OpenCloseContextProvider({ children }) {
  const [userProgress, setUserPorgress] = useState("");

  const showCart = () => {
    setUserPorgress("open");
  };

  const hideCart = () => {
    setUserPorgress("");
  };

  const showCheckout = () => {
    setUserPorgress("checkout");
    console.log("hehe")
  };

  const hideCheckout = () => {
    setUserPorgress("");
  };

  const OpenCloseCtx = {
    progress: userProgress,
    showCart: showCart,
    hideCart: hideCart,
    showCheckout: showCheckout,
    hideCheckout: hideCheckout,
  };

  return (
    <OpenCloseContext.Provider value={OpenCloseCtx}>
      {children}
    </OpenCloseContext.Provider>
  );
}

export default OpenCloseContext;
