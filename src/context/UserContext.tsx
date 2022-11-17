import { createContext, useContext, useState, ReactNode } from 'react';
import AuthService from '../utils/auth';

interface UserContextProps {
  children: ReactNode;
}
type UserContextType = {
  loggedIn: boolean;
  userId: string | null;
};
type UpdateUserContextType = {
  toggleLoggedIn: () => void;
  setUserId: (id: string) => void;
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

  const [id, setId] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(currentState);

  function toggleLoggedIn() {
    setLoggedIn((prev) => !prev);
  }
  function setUserId(id: string) {
    setId(id);
  }


  return (
    <UserContext.Provider value={{ loggedIn, userId: id }}>
      <UpdateUserContext.Provider value={{ toggleLoggedIn, setUserId }}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
}
