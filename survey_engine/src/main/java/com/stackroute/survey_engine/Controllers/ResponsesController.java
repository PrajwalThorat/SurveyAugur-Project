package com.stackroute.survey_engine.Controllers;



import com.stackroute.survey_engine.Models.ResponseEnvelope;
import com.stackroute.survey_engine.Models.Responses;
import com.stackroute.survey_engine.Services.IResponseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("surveyengine/api/v1")
@Slf4j
public class ResponsesController {


    private IResponseService responseService;

    @Autowired
    public ResponsesController(IResponseService responseService) {
        this.responseService = responseService;
    }


    @PostMapping("/responses")
    public ResponseEntity saveResponses(@RequestBody Responses responses) throws Exception {
        log.info("In Controller - Saving Active responses");
        Responses saveResponse = responseService.saveResponses(responses);
        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(saveResponse);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(null);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }

    @GetMapping("/responses/surveys/{surveyId}")
    public ResponseEntity getAllResponsesByID(@PathVariable("surveyId") UUID surveyId) throws Exception {
        log.info("In Controller - retrieving Active Surveys by creator");
        Responses[] getAllResponses = responseService.getAllResponsesByID(surveyId);

        ResponseEnvelope response = new ResponseEnvelope();
        response.setResult(getAllResponses);
        response.setCount(1);
        response.setError(null);
        response.setTotalCount((long) 1);
        response.setQuery(null);
        response.setStatus(200);
        response.setAsON(System.currentTimeMillis());

        return ResponseEntity.ok(response);
    }

}
