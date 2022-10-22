import { createContext, useContext, ReactNode } from 'react';

type UserContext = {};
type ScheduleProviderProps = {
  children: ReactNode;
};

const UserContext = createContext({} as UserContext);

export function userContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }: ScheduleProviderProps) {}
