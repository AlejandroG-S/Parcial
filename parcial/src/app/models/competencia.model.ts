import { Comportamiento } from "./comportamiento.model";

export class Competencia{
    constructor(
       public id:number,
       public nombre_competencia:string,
       public descripcion_competencia:string,
       public comportamiento:Comportamiento[]) {}
}