import { UUID } from "angular2-uuid";
import { QuestionType } from "./questiontype";



export class ASQuestions {

  id: UUID = UUID.UUID;
  questionBody: string = "";
  questionType: QuestionType = QuestionType.MULTIPLE_SELECT;
  options: string[] = [];
  constructor(id?: UUID, questionBody?: string, options?: string[]) { }
}