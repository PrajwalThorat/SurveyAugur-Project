package com.stackroute.survey_authoring.Services;

import com.stackroute.survey_authoring.Exceptions.ServiceException;
import com.stackroute.survey_authoring.Models.InactiveSurvey;
import com.stackroute.survey_authoring.Repository.InactiveSurveyRepository;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Slf4j
public class InactiveSurveyServiceImpl implements InactiveSurveyService{

    private Logger logger;
    @Autowired
    InactiveSurveyRepository repository;


    @Autowired
    HttpServletRequest request;

    public InactiveSurveyServiceImpl() {
        logger = LoggerFactory.getLogger(InactiveSurveyServiceImpl.class);
    }

    @Override
    public InactiveSurvey saveSurvey(InactiveSurvey survey, UUID userId) throws ServiceException {

        try {

            if (survey.getTitle().isEmpty() || survey.getTitle().isBlank() || survey.getTargetAudience().isEmpty() || survey.getTargetAudience().isBlank() || survey.getActiveTime() == null || survey.getSurveyType() == null) {
                logger.info("Exception occurred inside if");
                throw new ServiceException("mandatory field missing");

            }
            Long time = survey.getActiveTime() * 60 * 60;
            survey.setId(UUID.randomUUID());
            survey.setCreatedOn(new Date(System.currentTimeMillis()));
            survey.setUpdatedOn(new Date(System.currentTimeMillis()));
            survey.setCreatedBy(userId);
            survey.setActiveTime(time);

            InactiveSurvey inactiveSurveys1= repository.save(survey);
            return inactiveSurveys1;
        }catch (Exception exception){
            logger.error("Exception occurred in save method",exception.getMessage());
            throw new ServiceException("Exception occurred while saving");
        }
    }

    @Override
    public InactiveSurvey updateSurvey(InactiveSurvey survey, UUID userId) throws ServiceException {
        try {
            if (!checkSurveyAndUser(survey.getId(), userId)) {
                throw new ServiceException("survey doesn't exist");
            }
            Long time = survey.getActiveTime() * 60 * 60;
            survey.setCreatedBy(userId);
            survey.setUpdatedOn(new Date(System.currentTimeMillis()));
            survey.setActiveTime(time);
            return repository.save(survey);
        }catch (Exception exception){
            logger.error("Exception occurred in update method",exception.getMessage());
            throw new ServiceException("Exception occurred while updating");
        }
    }

    @Override
    public InactiveSurvey deleteSurvey(UUID surveyId) throws ServiceException {
        try {
            if (repository.findById(surveyId).isEmpty()) {
                throw new ServiceException("survey doesn't exist");
            }
            repository.deleteById(surveyId);
            return null;
        }catch(Exception exception){
            logger.error("Exception occurred in delete method",exception.getMessage());
            throw new ServiceException("Exception occurred while deleting");
        }
    }

    @Override
    public InactiveSurvey getSurvey(UUID surveyId) throws ServiceException {
        try {
            Optional<InactiveSurvey> survey = repository.findById(surveyId);
            if (survey.isEmpty()) {
                logger.info("survey doesn't exist");
            }
            return survey.get();
        }catch(Exception exception) {
            logger.error("Exception occurred in getSurvey method",exception.getMessage());
            throw new ServiceException("Exception occurred while fetching");
        }
    }

    @Override
    public List<InactiveSurvey> getAllSurveyByUserId(UUID userId) throws ServiceException {
        try {
            List<InactiveSurvey> surveys = repository.findByCreatedBy(userId);
            if (surveys.size() == 0) {
                logger.info("No Surveys found");
            }
            return surveys;
        }catch (Exception exception){
            logger.error("Exception occurred in getAllSurveyByUserId method",exception.getMessage());
            throw new ServiceException("Exception occurred while fetching");
        }
    }

    @Override
    public Boolean checkUser(UUID userId) throws ServiceException {
        try {
            if (repository.findByCreatedBy(userId) == null) {
                return false;
            }
            return true;
        }catch (Exception exception){
            logger.error("Exception occurred in checkUser method",exception.getMessage());
            throw new ServiceException("Exception occurred while validating userid");
        }
    }

    @Override
    public Boolean checkSurveyAndUser(UUID surveyId, UUID userId) {
        try {
            if (repository.findByCreatedByAndId(userId, surveyId) == null) {
                return false;
            }
            return true;
        }catch (Exception exception){
            logger.error("Exception occurred in checkSurveyAndUser method",exception.getMessage());
            throw new ServiceException("Exception occurred while validating survey and userid");
        }
    }
}
