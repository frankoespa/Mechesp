import { Roles } from "../../global/Roles";

export interface IUserAuth {
    uid: string,
    role: Roles,
    token: string
}