import { createContext, useContext, ReactNode, useState } from 'react';

type UserContextType = {
  loggedIn: boolean | undefined;
  updateLoggedIn: () => void;
};
type ProviderProps = {
  children: ReactNode;
};

const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: ProviderProps) {
  const [loggedIn, setLoggedIn] = useState(false);
  function updateLoggedIn() {
    setLoggedIn(!loggedIn);
  }

  return (
    <UserContext.Provider value={{ loggedIn, updateLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
