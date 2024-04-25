import { Classe } from "./Classe.model";
import { Departement } from "./Departement.model";
import { Role } from "./Role.model";

export interface Professeur{
    id:Number;
    prenom:String;
    nom:String;
    dateOfBirth:Date;
    email:String;
    password:String;
    role:Role;
    classes:Array<Classe> ;
    departement:Departement ;
}