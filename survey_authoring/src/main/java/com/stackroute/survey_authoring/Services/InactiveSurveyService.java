package com.stackroute.survey_authoring.Services;

import com.stackroute.survey_authoring.Exceptions.ServiceException;
import com.stackroute.survey_authoring.Models.InactiveSurvey;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public interface InactiveSurveyService {

    InactiveSurvey saveSurvey(InactiveSurvey survey, UUID userId) throws ServiceException;
    InactiveSurvey updateSurvey(InactiveSurvey survey, UUID userId) throws ServiceException;
    InactiveSurvey deleteSurvey(UUID surveyId) throws ServiceException;
    InactiveSurvey getSurvey(UUID surveyId) throws ServiceException;
    List<InactiveSurvey> getAllSurveyByUserId(UUID userId) throws ServiceException;
    Boolean checkUser(UUID userId) throws ServiceException;
    Boolean checkSurveyAndUser(UUID surveyId, UUID userId);
}
