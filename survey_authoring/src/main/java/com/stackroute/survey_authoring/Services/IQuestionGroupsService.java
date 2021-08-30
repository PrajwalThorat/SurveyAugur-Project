package com.stackroute.survey_authoring.Services;

import com.stackroute.survey_authoring.Exceptions.ServiceException;
import com.stackroute.survey_authoring.Models.QuestionGroup;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public interface IQuestionGroupsService {
    QuestionGroup saveQuestionGroups(QuestionGroup questionGroup, UUID user_id) throws ServiceException;
    QuestionGroup updateQuestionGroups(QuestionGroup questionGroup, UUID questionGroup_id) throws ServiceException;
    QuestionGroup[] getQuestionGroupsByCreator(UUID userId) throws ServiceException;
    QuestionGroup getQuestionGroupsByID(UUID questionGroupId) throws ServiceException;
}
