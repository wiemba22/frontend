import { Classe } from "./Classe.model";
import { Niveau } from "./Niveau.model";
import { Role } from "./Role.model";

export interface Etudiant{
    id:Number;
    prenom:String;
    nom:String;
    dateOfBirth:Date;
    email:String;
    password:String;
    role:Role;
    niveau :Niveau;
    classe :Classe;
}