package com.stackroute.survey_authoring.Exceptions;

import com.stackroute.survey_authoring.Models.ResponseEnvelope;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class ExceptionController {
    @ExceptionHandler(value = ServiceException.class)
    public ResponseEntity serviceException(ServiceException exception) {
        ResponseEnvelope responseEnvelope = new ResponseEnvelope();
        responseEnvelope.setAsON(System.currentTimeMillis());
        responseEnvelope.setCount(0);
        responseEnvelope.setStatus(500);
        responseEnvelope.setResult(null);
        responseEnvelope.setTotalCount((long) 0);
        responseEnvelope.setQuery(null);
        responseEnvelope.setError(exception.getMessage());
        log.error("Bad request due to serviceException", responseEnvelope);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseEnvelope);
    }
}
