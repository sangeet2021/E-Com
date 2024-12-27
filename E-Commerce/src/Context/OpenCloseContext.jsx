import { createContext, useState } from "react";

const OpenCloseContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
});

export function OpenCloseContextProvider({ children }) {
  const [userProgress, setUserPorgress] = useState("");

  const showCart = () => {
    setUserPorgress("open");
    console.log("ctxprop:", userProgress)
  };

  const hideCart = () => {
    setUserPorgress("");
  };

  const OpenCloseCtx = {
    progress: userProgress,
    showCart: showCart,
    hideCart: hideCart,
  };

  return (
    <OpenCloseContext.Provider value={OpenCloseCtx}>
      {children}
    </OpenCloseContext.Provider>
  );
}

export default OpenCloseContext;
