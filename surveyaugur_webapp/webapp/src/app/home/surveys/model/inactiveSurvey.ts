import { UUID } from "angular2-uuid";
import { ISQuestions } from "./isquestion";
import { SurveyType } from "./surveyType";


export class InActiveSurvey{
    id: UUID=UUID;
     title: string;
     tags: string[];
     description: string;
     targetAudience: string; //open for all, 20-40 years age male, 20-40 years age female, rural mass, urban mass
     surveyType: SurveyType;// Sectioned, Flat
     questions: ISQuestions[]; // can be array of questions or array of sections holding the questions
     uisettings:Object ;// all the custom settings for the ui
     createdOn: Date;
      createdBy: UUID;
     updatedOn: Date;
     activeTime: number;
   constructor( id?: UUID,
     title?: string,
     tags?: string[],
     description?: string,
     targetAudience?: string, //open for all, 20-40 years age male, 20-40 years age female, rural mass, urban mass
     surveyType?: SurveyType, // Sectioned, Flat
     questions?: ISQuestions[], // can be array of questions or array of sections holding the questions
     uiSettings?:Object ,// all the custom settings for the ui
     createdOn?: Date,
      createdBy?: UUID,
     updatedOn?: Date,
     activeTime?: number){}
}
