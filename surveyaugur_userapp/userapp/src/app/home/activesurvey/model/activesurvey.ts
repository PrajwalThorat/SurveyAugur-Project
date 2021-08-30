import { UUID } from "angular2-uuid";
import { ASQuestions } from "./asquestion";
import { SurveyType } from "./surveytype";



export class ActiveSurveys {
  surveyId: UUID=UUID.UUID
  createdBy: UUID=UUID.UUID
  surveyTitle: string=""
  tags: String[]=[]
  description: string=""
  targetAudience: string=""//open for all, 20-40 years age male, 20-40 years age female, rural mass, urban mass
  surveyType: SurveyType=SurveyType.FLAT// Sectioned, Flat
  questions: ASQuestions[]=[] // can be array of questions or array of sections holding the questions
  uiSettings: Object={}// all the custom settings for the ui
  surveyUrl: string=''
  activatedOn: Date=new Date
  activatedBy: string =""
  createdOn: Date=new Date
  updatedOn: Date=new Date
  activeTime: number=0
  constructor(
    surveyId?: UUID,
    createdBy?: UUID,
    surveyTitle?: string,
    tags?: String[],
    description?: string,
    targetAudience?: string, //open for all, 20-40 years age male, 20-40 years age female, rural mass, urban mass
    surveyType?: SurveyType, // Sectioned, Flat
    questions?: ASQuestions[], // can be array of questions or array of sections holding the questions
    uiSettings?: Object,// all the custom settings for the ui
    surveyUrl?: string,
    activatedOn?: Date,
    activatedBy?: string,
    createdOn?: Date,
    updatedOn?: Date,
    activeTime?: number) { }
}
