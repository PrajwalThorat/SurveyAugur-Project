import { UUID } from "angular2-uuid";
import { ISQuestion } from "./isquestion";
import { SurveyType } from "./SurveyType";
import { UiSetting } from "./uisetting";

export class InActiveSurvey{
   
      title: string;
     tags: string[];
     description: string="";
     targetAudience: string; //open for all, 20-40 years age male, 20-40 years age female, rural mass, urban mass
     surveyType: SurveyType; // Sectioned, Flat
     questions: ISQuestion[]; // can be array of questions or array of sections holding the questions
     ui_settings:UiSetting=null;// all the custom settings for the ui
     activeTime: number
   constructor(
        
      title?: string,
     tags?: string[],
     description?: string,
     targetAudience?: string, //open for all, 20-40 years age male, 20-40 years age female, rural mass, urban mass
     surveyType?: SurveyType, // Sectioned, Flat
     questions?: ISQuestion[], // can be array of questions or array of sections holding the questions
     ui_settings?:UiSetting ,// all the custom settings for the ui
     activeTime?: number){}
}

  