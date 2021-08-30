package com.stackroute.survey_authoring.Models;



import com.stackroute.survey_authoring.Enums.QuestionType;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Data
@NoArgsConstructor
public class Question implements Serializable {

    private UUID id;
    private String questionBody;
    private String[] tags;
    private QuestionType questionType;
    private String []options;
    private UUID questionGroupId;
    private UUID createdBy;
    private UUID updatedBy;
    private Date createdOn;
    private Date updatedOn;
}
