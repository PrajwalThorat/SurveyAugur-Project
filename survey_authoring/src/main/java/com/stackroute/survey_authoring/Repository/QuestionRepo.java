package com.stackroute.survey_authoring.Repository;

import com.stackroute.survey_authoring.Models.Question;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface QuestionRepo extends MongoRepository<Question,UUID> {

    Question[] findByQuestionGroupId(UUID questionsGroupsId);
    Question findByQuestionBody(String questionBody);
}
