import { IViewModel } from "../../base/IViewModel";

export interface IFindUsers extends IViewModel {
    Email: string,
    Dni: string,
    Nombre: string
}