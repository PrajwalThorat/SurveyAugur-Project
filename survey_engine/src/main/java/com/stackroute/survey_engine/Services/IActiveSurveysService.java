package com.stackroute.survey_engine.Services;


import com.stackroute.survey_engine.Exceptions.ServiceException;
import com.stackroute.survey_engine.Models.ActiveSurveys;
import com.stackroute.survey_engine.Models.MailDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public interface IActiveSurveysService {

    ActiveSurveys saveActiveSurveys(ActiveSurveys activeSurveys) throws ServiceException;

    ActiveSurveys deactivateActiveSurveys(UUID surveyId) throws ServiceException;

    List<ActiveSurveys> getAllActiveSurveys() throws ServiceException;

    ActiveSurveys getOneActiveSurveyByID(UUID surveyId) throws ServiceException;

    ActiveSurveys getActiveSurveysByCreator(UUID createdBy) throws ServiceException;

    String  saveShareUrl(MailDetails mailDetails, UUID surveyId) throws ServiceException;
}


