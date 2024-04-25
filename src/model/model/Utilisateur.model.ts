import { Role } from "./Role.model";

export interface Utilisateur{
    id:Number;
    prenom:String;
    nom:String;
    dateOfBirth:Date;
    email:String;
    password:String;
    role:Role;

}