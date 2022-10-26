import { createContext, useContext, useState, ReactNode } from 'react';
import AuthService from '../utils/auth';

interface UserContextProps {
  children: ReactNode;
}
type UserContextType = {
  loggedIn: boolean;
};
type UpdateUserContextType = {
  toggleLoggedIn: () => void;
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
  function toggleLoggedIn() {
    setLoggedIn((prev) => !prev);
    AuthService.logout();
  }
  return (
    <UserContext.Provider value={{ loggedIn }}>
      <UpdateUserContext.Provider value={{ toggleLoggedIn }}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
}
