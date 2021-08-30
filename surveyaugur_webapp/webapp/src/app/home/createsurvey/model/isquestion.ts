import { UUID } from "angular2-uuid";
import { QuestionType } from "./QuestionType";

export class ISQuestion {

  id:UUID=UUID;
   questionBody:string;
 questionType:QuestionType;
    options:string[];
    constructor(id?:UUID,questionBody?:string,questionType?:QuestionType,options?:string[]){}
}
