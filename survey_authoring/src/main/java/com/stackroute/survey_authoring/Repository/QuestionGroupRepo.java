package com.stackroute.survey_authoring.Repository;

import com.stackroute.survey_authoring.Models.QuestionGroup;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface QuestionGroupRepo extends MongoRepository<QuestionGroup, UUID> {

    QuestionGroup[] findByCreatedBy(UUID userId);
    QuestionGroup findByName(String name);
}
