package com.stackroute.survey_authoring.Repository;

import com.stackroute.survey_authoring.Models.InactiveSurvey;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface InactiveSurveyRepository extends MongoRepository<InactiveSurvey, UUID> {
        List<InactiveSurvey> findByCreatedBy(UUID createdBy);
        InactiveSurvey findByCreatedByAndId(UUID createdBy, UUID id);
}
