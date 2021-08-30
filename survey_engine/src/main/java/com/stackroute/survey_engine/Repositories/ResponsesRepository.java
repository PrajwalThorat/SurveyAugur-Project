package com.stackroute.survey_engine.Repositories;


import com.stackroute.survey_engine.Models.Responses;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ResponsesRepository extends MongoRepository<Responses, UUID>{
    Responses[] findBySurveyId(UUID surveyId);
}
