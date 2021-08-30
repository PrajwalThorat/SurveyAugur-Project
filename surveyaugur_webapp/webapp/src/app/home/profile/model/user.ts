import { AcessLevel } from "./AccessLevel";
import { UserRole } from "./UserRole";
import { UUID } from "angular2-uuid";

export class User{
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }
    userId:UUID;
   username:string;
  email:string;
  userRole:UserRole
   avatar:string;
organization:string;
 updatedOnTS:Date
updatedBy:string
accessLevel:AcessLevel
paymentMethod:string; 
 transactionID:string 
constructor(){}
}