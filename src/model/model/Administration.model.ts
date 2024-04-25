import { Role } from "./Role.model";

export interface Administration{
    id:Number;
    prenom:String;
    nom:String;
    dateOfBirth:Date;
    email:String;
    password:String;
    role:Role;
    

}