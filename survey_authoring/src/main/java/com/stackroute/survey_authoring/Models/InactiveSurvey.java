package com.stackroute.survey_authoring.Models;

import com.stackroute.survey_authoring.Enums.SurveyType;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Data
public class InactiveSurvey implements Serializable {

    @Id
    @Indexed
    private UUID id;
    private String title;
    private String[] tags;
    private String description;
    private String targetAudience;
    private SurveyType surveyType;
    private ISQuestions[] questions;
    @Indexed
    private UUID createdBy;
    private Date createdOn;
    private Date updatedOn;
    private Object uiSetting;
    private Long activeTime;
}
