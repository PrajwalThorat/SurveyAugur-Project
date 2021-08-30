package com.stackroute.survey_authoring.Models;

import com.stackroute.survey_authoring.Enums.QuestionType;
import com.stackroute.survey_authoring.Enums.SurveyType;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.UUID;

class ISQuestionsTest {

    private ISQuestions isQuestions;

    public ISQuestionsTest(){
        isQuestions = new ISQuestions();
        isQuestions.setId(UUID.fromString("c8569913-1724-4575-8a8e-38234e9bcd1f"));
        isQuestions.setQuestionBody("Test Question");
        isQuestions.setOptions(new String[]{"option1","option2"});
        isQuestions.setQuestionType(QuestionType.MULTIPLE_SELECT);
    }

    @Test
    public void givenQuestionIdAccessor(){
        UUID id = isQuestions.getId();
        Assertions.assertNotNull(id);
        Assertions.assertEquals(UUID.fromString("c8569913-1724-4575-8a8e-38234e9bcd1f"),id);
    }

    @Test
    public void givenQuestionBodyAccessor(){
        String questionBody = isQuestions.getQuestionBody();
        Assertions.assertNotNull(questionBody);
        Assertions.assertEquals("Test Question",questionBody);
    }

    @Test
    public void givenQuestionOptionAccessor(){
        String[] options = isQuestions.getOptions();
        Assertions.assertNotNull(options);
        Assertions.assertEquals(2,options.length);
    }

    @Test
    public void givenSurveyTypeAccessor(){
        QuestionType questionType = isQuestions.getQuestionType();
        Assertions.assertNotNull(questionType);
        Assertions.assertEquals(QuestionType.MULTIPLE_SELECT, questionType);
    }
}