import React, { createContext, useState } from "react";

interface IAppContext {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("change me");

  return (
    <AppContext.Provider
      value={{
        num,
        setNum,
        name,
        setName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
