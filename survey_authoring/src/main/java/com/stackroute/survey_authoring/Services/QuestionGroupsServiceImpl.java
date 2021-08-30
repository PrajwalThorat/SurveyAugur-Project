package com.stackroute.survey_authoring.Services;

import com.stackroute.survey_authoring.Exceptions.ServiceException;
import com.stackroute.survey_authoring.Models.QuestionGroup;
import com.stackroute.survey_authoring.Repository.QuestionGroupRepo;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

import java.util.Optional;
import java.util.UUID;

@Service
@Slf4j
public class QuestionGroupsServiceImpl implements IQuestionGroupsService {

    @Autowired
    private  QuestionGroupRepo questionGroupRepo;



    @Override
    public QuestionGroup saveQuestionGroups(QuestionGroup questionGroup, UUID user_id) throws ServiceException {
        try {
            if(questionGroupRepo.findByName(questionGroup.getName()) != null) {
                log.error("In Service - Validation of object failed");
                throw new ServiceException("QuestionGroup Already Exist");
            }else {
                log.info("In Service - Validation of object finished");
                questionGroup.setQuestionGroupId(UUID.randomUUID());
                questionGroup.setCreatedBy(user_id);
                questionGroup.setCreatedOn(new Date(System.currentTimeMillis()));
                questionGroup.setUpdatedOn(new Date(System.currentTimeMillis()));

                return questionGroupRepo.save(questionGroup);
            }
        }catch (Exception e){
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public QuestionGroup updateQuestionGroups(QuestionGroup questionGroup, UUID questionGroup_id) throws ServiceException {
       try{
           QuestionGroup updateQuestionGroup = null;
           QuestionGroup optional = questionGroupRepo.findById(questionGroup_id).get();
           if(optional == null){
               throw new ServiceException("QuestionGroup Not Found");
           }
           else
           {
               QuestionGroup getQuestionGroup = questionGroupRepo.findById(questionGroup_id).get();
               getQuestionGroup.setQuestionGroupId(questionGroup_id);
               getQuestionGroup.setName(questionGroup.getName());
               getQuestionGroup.setTags(questionGroup.getTags());
               getQuestionGroup.setUpdatedOn(new Date(System.currentTimeMillis()));
               updateQuestionGroup = questionGroupRepo.save(getQuestionGroup);
               return updateQuestionGroup;
           }

       }catch(Exception e)
       {
           throw new ServiceException(e.getMessage());
       }
    }

    @Override
    public QuestionGroup[] getQuestionGroupsByCreator(UUID userId) throws ServiceException {
     try {
         if (questionGroupRepo.findByCreatedBy(userId) == null){
             log.info("Question Group Not Found");
             return null;
         }else {
             return questionGroupRepo.findByCreatedBy(userId);
         }
     }catch (Exception e){
         throw new ServiceException(e.getMessage());
     }
    }

    @Override
    public QuestionGroup getQuestionGroupsByID(UUID questionGroup_id) throws ServiceException {
     try {
         Optional<QuestionGroup> questionGroup = questionGroupRepo.findById(questionGroup_id);
         if (questionGroup==null){
             log.info("Question Id Not Found");
             return null;
         }
         return questionGroupRepo.findById(questionGroup_id).get();
     }catch (Exception e){
         throw new ServiceException(e.getMessage());
     }
    }

}
