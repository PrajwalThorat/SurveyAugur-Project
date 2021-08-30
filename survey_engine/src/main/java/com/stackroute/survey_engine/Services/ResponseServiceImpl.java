package com.stackroute.survey_engine.Services;


import com.stackroute.survey_engine.Exceptions.ServiceException;
import com.stackroute.survey_engine.Models.Responses;
import com.stackroute.survey_engine.Repositories.ResponsesRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.UUID;



@Service
@Slf4j
public class ResponseServiceImpl implements IResponseService{

    private  ResponsesRepository responseRepository;

    @Autowired
    public ResponseServiceImpl(ResponsesRepository responseRepository) {
        this.responseRepository = responseRepository;
    }

    @Override
    public Responses saveResponses(Responses responses) throws ServiceException {
        try {
                responses.setResponseId(UUID.randomUUID());

                return responseRepository.save(responses);
        }catch(Exception e)
        {
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public Responses[] getAllResponsesByID(UUID surveyId) throws ServiceException {
        try {
            Responses[] responses;
            if (responseRepository.findBySurveyId(surveyId) == null)
            {
                log.info("Responses not found");
                return null;
            }
            else
            {
                responses=responseRepository.findBySurveyId(surveyId);
                return responses;
            }
        }catch (Exception e){
            throw new ServiceException(e.getMessage());
        }
    }
}
