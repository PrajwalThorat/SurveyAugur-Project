package com.stackroute.survey_engine.Repositories;

import com.stackroute.survey_engine.Models.ActiveSurveys;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ActiveSurveysRepository extends MongoRepository<ActiveSurveys, UUID>{
    ActiveSurveys findBySurveyId(UUID surveyId);
    ActiveSurveys findByCreatedBy(UUID createdBy);
}
