package com.stackroute.survey_engine.Models;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class QuestionResp {
    private String questionBody;
    private String []options;
    private String answer;
}
