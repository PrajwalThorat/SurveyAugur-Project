import { UUID } from "angular2-uuid";
import { ASQuestions } from "./ASquestion";

import { SurveyType } from "./surveyType";


export class ActiveSurveys {
  surveyId: UUID
  createdBy: UUID
  surveyTitle: string
  tags: String[]
  description: string
  targetAudience: string//open for all, 20-40 years age male, 20-40 years age female, rural mass, urban mass
  surveyType: SurveyType// Sectioned, Flat
  questions: ASQuestions[] // can be array of questions or array of sections holding the questions
  uiSettings: Object// all the custom settings for the ui
  surveyUrl: string
  activatedOn: Date
  activatedBy: string
  createdOn: Date
  updatedOn: Date
  activeTime: number
  constructor(
    surveyId: UUID,
    createdBy: UUID,
    surveyTitle: string,
    tags: String[],
    description: string,
    targetAudience: string, //open for all, 20-40 years age male, 20-40 years age female, rural mass, urban mass
    surveyType: SurveyType, // Sectioned, Flat
    questions: ASQuestions[], // can be array of questions or array of sections holding the questions
    uiSettings: Object,// all the custom settings for the ui
    surveyUrl: string,
    activatedOn: Date,
    activatedBy: string,
    createdOn: Date,
    updatedOn: Date,
    activeTime: number) { }
}
