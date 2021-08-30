package com.stackroute.survey_engine.Models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.UUID;

@Data
@Document
@NoArgsConstructor
public class Responses {

    @Id
    private UUID surveyId;
    private UUID  responseId;
    private QuestionResp []questions; // can be array of questions or array of sections holding the questions along with the answers
    private Date createdOn;
}
