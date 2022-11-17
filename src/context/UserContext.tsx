import { createContext, useContext, useState, ReactNode } from 'react';
import AuthService from '../utils/auth';

interface UserContextProps {
  children: ReactNode;
}
type UserContextType = {
  loggedIn: boolean;
};
type UpdateUserContextType = {
  updateLoggedIn: (val: boolean) => void;
};

const UserContext = createContext({} as UserContextType);
const UpdateUserContext = createContext({} as UpdateUserContextType);

export function useUserContext() {
  return useContext(UserContext);
}

export function useUpdateUserContext() {
  return useContext(UpdateUserContext);
}

export function UserContextProvider({ children }: UserContextProps) {
  let currentState = false;
  const token = localStorage.getItem('id_token');

  if (token) currentState = AuthService.loggedIn(token);

  const [loggedIn, setLoggedIn] = useState(currentState);

  function updateLoggedIn(val: boolean) {
    setLoggedIn(val);
  }

  return (
    <UserContext.Provider value={{ loggedIn }}>
      <UpdateUserContext.Provider value={{ updateLoggedIn }}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
}
