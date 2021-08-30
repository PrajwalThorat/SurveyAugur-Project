import { UUID } from "angular2-uuid";
import { QuestionType } from "../../createsurvey/model/QuestionType";


export class Question{
    id: UUID
    questionBody: string;
    tags: string[];
    questionType: QuestionType; // MULTIPLE SELECT, SINGLE SELECT, SUBJECTIVE
    options: string[];
    questionGroupId: UUID; //NOT NULL
    createdBy: UUID;
    createdOnTS: Date;
    updatedOnTS: Date;
    updatedBy:String;
    constructor( id?: UUID,
        questionBody?: string,
        tags?: string[],
        questionType?: QuestionType,
        options?: string[],
        questionGroup_id?: UUID,
        createdBy?: UUID,
        createdOnTS?: Date,
        updatedOnTS?: Date,
        updatedBy?:String,){}
}
