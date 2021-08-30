package com.stackroute.user_microservice.service;

import com.stackroute.user_microservice.Exception.ServiceException;
import com.stackroute.user_microservice.model.User;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.social.google.connect.GoogleConnectionFactory;
import org.springframework.social.oauth2.OAuth2Parameters;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GoogleServiceImpl implements IGoogleService {

    @Autowired
    Environment env;

    private static final String SystemData = "SYSTEM";
    // Creates Google OAuth Connection
    private GoogleConnectionFactory createGoogleConnection() {
        return new GoogleConnectionFactory(env.getProperty("google.client.clientId"), env.getProperty("google.client.clientSecret"));
    }

    // Opens the Google Consent Form
    @Override
    public String googlelogin() {
        OAuth2Parameters parameters = new OAuth2Parameters();
        parameters.setRedirectUri(env.getProperty("redirect.google-uri"));
        parameters.setScope("profile email");
        return createGoogleConnection().getOAuthOperations().buildAuthenticateUrl(parameters);
    }

    // For getting Google oauth access token
    @Override
    public String getGoogleAccessToken(String code) {
        return createGoogleConnection().getOAuthOperations().exchangeForAccess(code, env.getProperty("redirect.google-uri"), null)
                .getAccessToken();
    }

    // For getting google profile of particular user
    @Override
    public User getGoogleUserProfile(String accessToken) throws ServiceException, ParseException {
        RestTemplate restTemplate = new RestTemplate();
        String profileData = restTemplate.getForObject("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token="+accessToken, String.class);

        JSONParser parser = new JSONParser();
        JSONObject profileObj = (JSONObject) parser.parse(profileData);
        User user = new User();


        user.setUsername(profileObj.get("email").toString());
        user.setUsername(profileObj.get("name").toString());
        user.setEmail(profileObj.get("email").toString());
        user.setAvatar(profileObj.get("picture").toString());
        user.setUpdatedBy(SystemData);
        return user;
    }

}
