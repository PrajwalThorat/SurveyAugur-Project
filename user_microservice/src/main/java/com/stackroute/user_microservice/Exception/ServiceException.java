package com.stackroute.user_microservice.Exception;

public class ServiceException extends RuntimeException{
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
