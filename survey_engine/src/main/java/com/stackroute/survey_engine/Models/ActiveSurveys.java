package com.stackroute.survey_engine.Models;


import java.util.Date;
import java.util.UUID;

import com.stackroute.survey_engine.Enums.SurveyType;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@NoArgsConstructor
public class ActiveSurveys {

    @Id
    private UUID surveyId;
    private UUID createdBy;
    private String  surveyTitle;
    private String[]  tags;
    private String description;
    private String targetAudience; //open for all, 20-40 years age male, 20-40 years age female, rural mass, urban mass
    private SurveyType surveyType; // Sectioned, Flat
    private ASQuestions []questions; // can be array of questions or array of sections holding the questions
    private Object  uiSettings; // all the custom settings for the ui
    private String surveyUrl;
    private Date activatedOn;
    private String activatedBy;
    private Date createdOn;
    private Date updatedOn;
    private long activeTime; // in seconds, after this much time the survey is automatically deactivated

}
