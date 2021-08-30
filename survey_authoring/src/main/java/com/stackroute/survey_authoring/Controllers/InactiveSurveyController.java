package com.stackroute.survey_authoring.Controllers;

import com.stackroute.survey_authoring.Exceptions.ServiceException;
import com.stackroute.survey_authoring.Models.InactiveSurvey;
import com.stackroute.survey_authoring.Models.ResponseEnvelope;
import com.stackroute.survey_authoring.Services.InactiveSurveyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("surveyauthor/api/v1")
@Slf4j
public class InactiveSurveyController {

    @Autowired
    InactiveSurveyService inactiveSurveyService;

    // save a new survey
    @PostMapping("/surveys/users/{user_id}")
    public ResponseEntity saveSurvey(@RequestBody InactiveSurvey inactiveSurvey, @PathVariable("user_id") UUID userId) throws ServiceException {
        InactiveSurvey Survey = inactiveSurveyService.saveSurvey(inactiveSurvey, userId);
        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(Survey);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(null);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }

    // update an existing survey
    @PutMapping("surveys/{survey_id}/users/{user_id}")
    public ResponseEntity updateQuestionGroups(@RequestBody InactiveSurvey inactiveSurvey, @PathVariable("survey_id") UUID surveyId, @PathVariable("user_id") UUID userId) throws  ServiceException {
        InactiveSurvey Survey = inactiveSurveyService.updateSurvey(inactiveSurvey,userId);
        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(Survey);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(null);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }

    //get survey by userId
    @GetMapping("surveys/users/{user_id}")
    public ResponseEntity getSurveyByUserId(@PathVariable("user_id") UUID userId) throws  ServiceException {
        log.info("In Controller - fetching surveys for user : " + userId);
        List<InactiveSurvey> Surveys = inactiveSurveyService.getAllSurveyByUserId(userId);
        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(Surveys);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) Surveys.size());
        response.setQuery(userId);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }

    //get survey by surveyId
    @GetMapping("surveys/{survey_id}")
    public ResponseEntity getSurveyBySurveyId(@PathVariable("survey_id") UUID surveyId) throws  ServiceException {
        InactiveSurvey Survey = inactiveSurveyService.getSurvey(surveyId);
        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(Survey);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(null);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }

    //delete an existing survey
    @DeleteMapping("surveys/{survey_id}")
    public ResponseEntity deleteSurvey(@PathVariable("survey_id") UUID surveyId) throws  ServiceException{
        inactiveSurveyService.deleteSurvey(surveyId);
        InactiveSurvey survey = new InactiveSurvey();
        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(survey);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(null);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }
}
