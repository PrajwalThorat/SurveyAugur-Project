import {UUID} from "angular2-uuid";
import {QuestionType} from "./questionType";

export class Question{
  id: UUID
  questionBody: string;
  tags: string[];
  questionType: QuestionType; // MULTIPLE SELECT, SINGLE SELECT, SUBJECTIVE
  options: string[];
  questionGroup_id: UUID; //NOT NULL
  createdBy: UUID;
  createdOnTS: Date;
  updatedOnTS: Date;
  updatedBy:String;
}
