import { createContext, useContext } from 'react';
import { IAuth } from '../interfaces/auth/IUserAuth';

export const AuthContext = createContext<IAuth>(null);

export const AuthProvider = AuthContext.Provider;

export const useAuth = () => useContext(AuthContext);
