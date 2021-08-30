package com.stackroute.survey_authoring.Services;

import com.stackroute.survey_authoring.Exceptions.ServiceException;
import com.stackroute.survey_authoring.Models.Question;

import com.stackroute.survey_authoring.Repository.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;
import java.util.UUID;

@Service
@Slf4j
public class QuestionsServiceImpl implements IQuestionsService {

   @Autowired
    private QuestionRepo questionRepo;




    @Override
    public Question saveQuestions(Question question) throws ServiceException {
        try { log.info("1");
            if (questionRepo.findByQuestionBody(question.getQuestionBody()) != null) {
                log.info("2");
                throw new ServiceException("Question already present");
            }

            if (question.getCreatedBy() == null ||
                    question.getQuestionGroupId() == null ||
                    question.getCreatedBy().equals("") ||
                    question.getQuestionGroupId().equals("")) {
                log.info("3");
                throw new ServiceException("Invalid Object");
            }
            log.info("After Condition Check");

            question.setId(UUID.randomUUID());
            question.setCreatedOn(new Date(System.currentTimeMillis()));
            question.setUpdatedOn(new Date(System.currentTimeMillis()));
            
            return questionRepo.save(question);
        }catch (Exception e)
        {
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public Question updateQuestions(Question question) throws ServiceException {
        if (!questionRepo.findById(question.getId()).isPresent()){
            throw new RuntimeException("Not Found");
        }else {
            Question updateQuestion = questionRepo.findById(question.getId()).get();
            updateQuestion.setQuestionBody(question.getQuestionBody());
            updateQuestion.setTags(question.getTags());
            updateQuestion.setOptions(question.getOptions());
            question = questionRepo.save(updateQuestion);
        }
        return question;
    }

    @Override
    public String deleteQuestion(UUID question_id) throws ServiceException {
        Question delQuestion;
        if (!questionRepo.findById(question_id).isPresent()){
            throw new ServiceException("Not Found");
        }else {
            delQuestion = questionRepo.findById(question_id).get();
            questionRepo.delete(delQuestion);
        }
        return "Question Deleted Successfully";
    }

    @Override
    public Question[] getQuestionsByQuestionGroupId(UUID questionGroupId) throws ServiceException {
      try {
          if (questionRepo.findByQuestionGroupId(questionGroupId)==null){
              log.info("Question Group Not Found");
              return null;
          }else {
              return questionRepo.findByQuestionGroupId(questionGroupId);
          }
      }catch (Exception e){
          throw new ServiceException(e.getMessage());
      }
    }
}
