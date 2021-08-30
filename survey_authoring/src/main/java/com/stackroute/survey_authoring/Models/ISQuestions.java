package com.stackroute.survey_authoring.Models;

import com.stackroute.survey_authoring.Enums.QuestionType;
import lombok.Data;

import java.io.Serializable;
import java.util.UUID;

@Data
public class ISQuestions implements Serializable {

    private UUID id;
    private String questionBody;
    private QuestionType questionType;
    private String []options;
}
