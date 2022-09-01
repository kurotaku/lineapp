import React, { createContext, useState, useContext } from 'react';

const AccountContext = createContext();

export const useAccountContext = () => {
  return useContext(AccountContext);
}

export const AccountProvider = ({children}) => {
  const [account, setAccount] = useState([]);

  const value = {
    account,
    setAccount
  };

  return(<AccountContext.Provider value={value}>{children}</AccountContext.Provider>)

}
