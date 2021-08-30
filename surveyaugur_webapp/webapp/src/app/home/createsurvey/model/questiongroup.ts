import { UUID } from "angular2-uuid";

export class QuestionGroup{
    questionGroupId: UUID;
    name: string;
    createdBy: UUID;
    createdOn: Date;
    updatedOn: Date;
    tags: string[];
}
