import { createContext } from "react";
import { IUserAuth } from "../interfaces/auth/IUserAuth";

export const UserContext = createContext<IUserAuth>(null);

export const UserProvider = UserContext.Provider;