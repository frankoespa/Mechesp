import { IViewModel } from "../IViewModel";

export interface IUserSignin extends IViewModel {
    Email: string,
    Password: string
}