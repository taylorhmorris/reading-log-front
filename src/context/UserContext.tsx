import { createContext, useContext, ReactNode, useState } from 'react';

type UserContextType = {
  loggedIn: boolean | null;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
type ProviderProps = {
  children: ReactNode;
};

const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: ProviderProps) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
