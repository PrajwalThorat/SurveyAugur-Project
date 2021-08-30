package com.stackroute.survey_authoring.Controllers;

import com.stackroute.survey_authoring.Models.QuestionGroup;
import com.stackroute.survey_authoring.Models.ResponseEnvelope;
import com.stackroute.survey_authoring.Services.IQuestionGroupsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/surveyauthor/api/v1")
@Slf4j
public class QuestionGroupsController {

    @Autowired
    private IQuestionGroupsService questionGroupsService;


    // save a new question group
    @PostMapping("/questiongroups/users/{user_id}")
    public ResponseEntity saveQuestionGroups(@RequestBody QuestionGroup questionGroup, @PathVariable("user_id") UUID user_id) throws Exception {
        log.info("In Controller - Saving Question Group");
        QuestionGroup saveQuestionGroup = questionGroupsService.saveQuestionGroups(questionGroup, user_id);
        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(saveQuestionGroup);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(user_id);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }

    // update an existing question group
    @PutMapping("/questiongroups/{questionGroup_id}")
    public ResponseEntity updateQuestionGroups(@RequestBody QuestionGroup questionGroup, @PathVariable("questionGroup_id") UUID questionGroup_id) throws  Exception {
        log.info("In Controller - Updating Question Group");
        QuestionGroup updatedQuestionGroup = questionGroupsService.updateQuestionGroups(questionGroup, questionGroup_id);
        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(updatedQuestionGroup);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(questionGroup_id);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }

    // get question groups by the name of the creator
    @GetMapping("/questiongroups/users/{userId}")
    public ResponseEntity getQuestionGroupsByCreator(@PathVariable UUID userId) throws Exception {
        log.info("In Controller - Fetching Question Groups");
        QuestionGroup[] res = questionGroupsService.getQuestionGroupsByCreator(userId);
        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(res);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(userId);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }

    // get question group by id
    @GetMapping("/questiongroups/{questionGroup_id}")
    public ResponseEntity getQuestionGroupsByID(@PathVariable("questionGroup_id") UUID questionGroup_id) throws Exception {
        log.info("In Controller - Fetching Question Group by ID");
        QuestionGroup res = questionGroupsService.getQuestionGroupsByID(questionGroup_id);
        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(res);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(questionGroup_id);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }
}
