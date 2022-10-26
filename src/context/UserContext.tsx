import { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextProps {
  children: ReactNode;
}
type UserContextType = {
  loggedIn: boolean;
}
type UpdateUserContextType = {
  toggleLoggedIn: () => void;
}

const UserContext = createContext({} as UserContextType);
const UpdateUserContext = createContext({} as UpdateUserContextType);

export function useUserContext() {
  return useContext(UserContext);
}

export function useUpdateUserContext() {
  return useContext(UpdateUserContext);
}

export function UserContextProvider({ children }: UserContextProps) {
  const [loggedIn, setLoggedIn] = useState(false);
  function toggleLoggedIn() {
    setLoggedIn((prev) => !prev);
  }
  return (
    <UserContext.Provider value={{ loggedIn }}>
      <UpdateUserContext.Provider value={{ toggleLoggedIn }}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
}
