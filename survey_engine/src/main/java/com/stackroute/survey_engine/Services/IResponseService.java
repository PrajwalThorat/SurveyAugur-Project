package com.stackroute.survey_engine.Services;

import com.stackroute.survey_engine.Exceptions.ServiceException;
import com.stackroute.survey_engine.Models.Responses;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public interface IResponseService {

    Responses saveResponses(Responses responses) throws ServiceException;
    Responses[] getAllResponsesByID(UUID surveyId) throws ServiceException;

}
