package com.stackroute.survey_engine.Services;

import com.stackroute.survey_engine.Enums.SurveyType;
import com.stackroute.survey_engine.Exceptions.ServiceException;
import com.stackroute.survey_engine.Models.ActiveSurveys;
import com.stackroute.survey_engine.Models.EventObject;
import com.stackroute.survey_engine.Models.MailDetails;
import com.stackroute.survey_engine.Repositories.ActiveSurveysRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class ActiveSurveysServiceImpl implements IActiveSurveysService{

    @Autowired
    public ActiveSurveysRepository activeSurveysRepository;
    @Autowired
    public MQSender mqSender;
    @Autowired
    HttpServletRequest request;





    @Override
    public ActiveSurveys saveActiveSurveys(ActiveSurveys activeSurveys) throws ServiceException {
        EventObject eventObject=new EventObject();
        try {
            if (activeSurveysRepository.findBySurveyId(activeSurveys.getSurveyId()) != null) {
                log.info("inside if");
                throw new ServiceException("Survey Already Exist");

            }
            else
            {

                activeSurveys.setSurveyId(UUID.randomUUID());
               // activeSurveys.setCreatedBy(UUID.randomUUID());
                activeSurveys.setSurveyType(SurveyType.FLAT);
                activeSurveys.setActivatedOn(new Date(System.currentTimeMillis()));
                activeSurveys.setCreatedOn(new Date(System.currentTimeMillis()));
                activeSurveys.setSurveyUrl("https://surveyaugur.stackroute.io/client/#/home/activesurvey/takesurvey/" + activeSurveys.getSurveyId());

                ActiveSurveys activeSurveys1= activeSurveysRepository.save(activeSurveys);
               mqSender.send(eventObject,request,"Survey Activated Successfully","Activation Successful");
                return activeSurveys1;
            }
        }catch(Exception e)
        {
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public ActiveSurveys deactivateActiveSurveys(UUID surveyId) throws ServiceException {
        EventObject eventObject=new EventObject();
        try {
            if(activeSurveysRepository.findBySurveyId(surveyId) != null)
            {
            ActiveSurveys delActiveSurveys=getOneActiveSurveyByID(surveyId);
            activeSurveysRepository.delete(delActiveSurveys);
           mqSender.send(eventObject,request,"Survey DeActivated Successfully","DeActivation Successful");
                return delActiveSurveys;
            }
            else
            {
                throw new ServiceException("Active Survey doesn't Exist");
            }
        }catch(Exception e)
        {
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public List<ActiveSurveys> getAllActiveSurveys() throws ServiceException {
        try {
            return activeSurveysRepository.findAll();
        }catch(Exception e)
        {
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public ActiveSurveys getOneActiveSurveyByID(UUID surveyId) throws ServiceException {
        try {
            ActiveSurveys activeSurveys=activeSurveysRepository.findBySurveyId(surveyId);

                return activeSurveys;
        }catch (Exception e){
                throw new ServiceException(e.getMessage());
            }
        }



    @Override
    public ActiveSurveys getActiveSurveysByCreator(UUID createdBy) throws ServiceException {
        try {
            ActiveSurveys activeSurveys;
            if (activeSurveysRepository.findByCreatedBy(createdBy) == null) {
                log.info("Active Survey doesn't Exist");
                return null;
            } else {
                activeSurveys = activeSurveysRepository.findByCreatedBy(createdBy);

                return activeSurveys;
            }
        } catch (Exception e) {
            throw new ServiceException(e.getMessage());
        }
    }


    @Override
    public String saveShareUrl(MailDetails mailDetails, UUID surveyId) throws ServiceException {
        EventObject eventObject=new EventObject();
       try{
           if(activeSurveysRepository.findBySurveyId(surveyId) != null)
           {
               ActiveSurveys activeSurveys=getOneActiveSurveyByID(surveyId);
               String[] emailIds=mailDetails.getMailIds();
               String message= mailDetails.getMessage();
               message=message+"/nSurvey Title:"+activeSurveys.getSurveyTitle()+". /nThe link to survey is: "+activeSurveys.getSurveyUrl();
               for(String email:emailIds) {
                   mqSender.send(eventObject, request, message, "Url send Successfully",email);
               }
               return "Url Sent";
           }
           else
           {
               throw new ServiceException("Active Survey doesn't Exist");
           }
       }catch (Exception e) {
           throw new ServiceException(e.getMessage());
       }
    }


}
