package com.stackroute.survey_authoring.Models;

import com.stackroute.survey_authoring.Enums.SurveyType;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Date;
import java.util.UUID;


@ExtendWith(SpringExtension.class)
class InactiveSurveyTest {

    private InactiveSurvey inactiveSurvey;
    private Date date;
    private ISQuestions[] isQuestions;

    public InactiveSurveyTest(){
        isQuestions = new ISQuestions[0];
        date = new Date(System.currentTimeMillis());
        inactiveSurvey = new InactiveSurvey();
        inactiveSurvey.setId(UUID.fromString("c8569913-1724-4575-8a8e-38234e9bcd1f"));
        inactiveSurvey.setTitle("Test");
        inactiveSurvey.setTags(new String[]{"test1","test2"});
        inactiveSurvey.setDescription("survey for test");
        inactiveSurvey.setTargetAudience("20-40 years age male");
        inactiveSurvey.setSurveyType(SurveyType.SECTIONED);
        inactiveSurvey.setQuestions(isQuestions);
        inactiveSurvey.setCreatedBy(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        inactiveSurvey.setCreatedOn(date);
        inactiveSurvey.setUpdatedOn(date);
        inactiveSurvey.setUiSetting(new Object());
        inactiveSurvey.setActiveTime(Long.valueOf(5));
    }

    @Test
    public void givenSurveyIdAccessor(){
        UUID id = inactiveSurvey.getId();
        Assertions.assertNotNull(id);
        Assertions.assertEquals(UUID.fromString("c8569913-1724-4575-8a8e-38234e9bcd1f"),id);
    }

    @Test
    public void givenSurveyTitleAccessor(){
        String title = inactiveSurvey.getTitle();
        Assertions.assertNotNull(title);
        Assertions.assertEquals("Test",title);
    }

    @Test
    public void givenSurveyTagsAccessor(){
        String[] tags = inactiveSurvey.getTags();
        Assertions.assertNotNull(tags);
        Assertions.assertEquals(2,tags.length);
    }

    @Test
    public void givenSurveyDescriptionAccessor(){
        String description = inactiveSurvey.getDescription();
        Assertions.assertNotNull(description);
        Assertions.assertEquals("survey for test",description);
    }

    @Test
    public void givenSurveyTargetAudienceAccessor(){
        String targetAudience = inactiveSurvey.getTargetAudience();
        Assertions.assertNotNull(targetAudience);
        Assertions.assertEquals("20-40 years age male",targetAudience);
    }

    @Test
    public void givenSurveyTypeAccessor(){
        SurveyType surveyType = inactiveSurvey.getSurveyType();
        Assertions.assertNotNull(surveyType);
        Assertions.assertEquals(SurveyType.SECTIONED,surveyType);
    }

    @Test
    public void givenSurveyQuestionAccessor(){
        ISQuestions[] questions = inactiveSurvey.getQuestions();
        Assertions.assertNotNull(questions);
        Assertions.assertEquals(isQuestions,questions);
    }

    @Test
    public void givenSurveyCreatedByAccessor(){
        UUID id = inactiveSurvey.getCreatedBy();
        Assertions.assertNotNull(id);
        Assertions.assertEquals(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"),id);
    }

    @Test
    public void givenSurveyCreatedOnAccessor(){
        Date date1 = inactiveSurvey.getCreatedOn();
        Assertions.assertNotNull(date1);
        Assertions.assertEquals(date,date1);
    }

    @Test
    public void givenSurveyUpdatedOnAccessor(){
        Date date1 = inactiveSurvey.getUpdatedOn();
        Assertions.assertNotNull(date1);
        Assertions.assertEquals(date,date1);
    }

    @Test
    public void givenSurveyActiveTimeAccessor(){
        Long time = inactiveSurvey.getActiveTime();
        Assertions.assertNotNull(time);
        Assertions.assertEquals(Long.valueOf(5), time);
    }

}
