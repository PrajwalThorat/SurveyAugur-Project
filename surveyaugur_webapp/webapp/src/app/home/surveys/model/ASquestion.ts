import { UUID } from "angular2-uuid";
import { QuestionType } from "./questionType";


export class ASQuestions {

  id:UUID=UUID;
   questionBody:string;
 questionType:QuestionType;
    options:string[];
    constructor(id?:UUID,questionBody?:string,options?:string[]){}
}