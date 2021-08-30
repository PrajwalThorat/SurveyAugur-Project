import { UUID } from "angular2-uuid";
import { QuestionType } from "./questionType";


export class ISQuestions {

  id:UUID=UUID.UUID;
   questionBody:string;
 questionType:QuestionType;
    options:string[];
    constructor(id?:UUID,questionBody?:string,options?:string[]){}
}