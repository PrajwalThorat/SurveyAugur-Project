package com.stackroute.survey_engine.Exceptions;

public class ServiceException extends RuntimeException {
    public ServiceException(String s) {
        super(s);
    }

    public ServiceException() {
        super();
    }

    public ServiceException(String msg, Exception e) {
        super(msg, e);
    }

}
