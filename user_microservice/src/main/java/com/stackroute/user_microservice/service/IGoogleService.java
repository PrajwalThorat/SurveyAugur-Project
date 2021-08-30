package com.stackroute.user_microservice.service;

import com.stackroute.user_microservice.Exception.ServiceException;
import com.stackroute.user_microservice.model.User;
import org.json.simple.parser.ParseException;

public interface IGoogleService {
    String googlelogin();

    String getGoogleAccessToken(String code);

    User getGoogleUserProfile(String accessToken) throws ServiceException, ParseException;
}
