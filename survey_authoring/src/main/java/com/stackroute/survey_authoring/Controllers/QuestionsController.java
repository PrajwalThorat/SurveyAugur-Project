package com.stackroute.survey_authoring.Controllers;


import com.stackroute.survey_authoring.Exceptions.ServiceException;
import com.stackroute.survey_authoring.Models.Question;

import com.stackroute.survey_authoring.Models.ResponseEnvelope;
import com.stackroute.survey_authoring.Services.IQuestionsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.UUID;

@RestController
@RequestMapping("/surveyauthor/api/v1")
public class QuestionsController {

    @Autowired
    private IQuestionsService questionsService;


    // save a new question
    @PostMapping("/questions")
    public ResponseEntity saveQuestions(@RequestBody Question question) throws ServiceException {
        Question svQuestion= questionsService.saveQuestions(question);

        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(svQuestion);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(null);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }

    // update an existing question
    @PutMapping("/questions/{question_id}")
    public ResponseEntity updateQuestions(@RequestBody Question question, @PathVariable("question_id") UUID question_id) throws  ServiceException {
        Question updtQuestion = questionsService.updateQuestions(question);
        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(updtQuestion);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(null);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }

    // delete an existing question
    @DeleteMapping("/questions/{question_id}")
    public ResponseEntity deleteQuestions(@PathVariable("question_id") UUID question_id) throws ServiceException {
        String delQuestion = questionsService.deleteQuestion(question_id);
        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(delQuestion);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(null);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }

    // get questions by query
    @GetMapping("questions/questiongroups/{questiongroupId}")
    public ResponseEntity getQuestionsByQuestionGroupId(@PathVariable UUID questiongroupId) throws ServiceException {
       Question[] questions =questionsService.getQuestionsByQuestionGroupId(questiongroupId);

        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(questions);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(null);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }


}
