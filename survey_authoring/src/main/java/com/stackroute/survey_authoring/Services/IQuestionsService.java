package com.stackroute.survey_authoring.Services;

import com.stackroute.survey_authoring.Exceptions.ServiceException;
import com.stackroute.survey_authoring.Models.Question;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public interface IQuestionsService {
    Question saveQuestions(Question question) throws ServiceException;
    Question updateQuestions(Question question) throws ServiceException;
    String deleteQuestion(UUID question_id) throws ServiceException;
    Question[] getQuestionsByQuestionGroupId(UUID questionGroupId) throws ServiceException;

}
