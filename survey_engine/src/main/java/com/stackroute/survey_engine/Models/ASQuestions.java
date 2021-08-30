package com.stackroute.survey_engine.Models;

import com.stackroute.survey_engine.Enums.QuestionType;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@Document
public class ASQuestions {
    private UUID id;
    private String questionBody;
    private QuestionType questionType;
    private String []options;
}
