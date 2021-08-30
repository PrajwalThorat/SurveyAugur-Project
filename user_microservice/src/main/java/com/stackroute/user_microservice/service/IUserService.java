package com.stackroute.user_microservice.service;

import com.stackroute.user_microservice.Exception.ServiceException;
import com.stackroute.user_microservice.model.User;

import java.util.UUID;


public interface IUserService {
    User saveUser(User user) throws ServiceException;
    User updateUserByUserId(User user, UUID userId) throws ServiceException;
    User getUserByUserId(UUID userId) throws ServiceException;
    User getUserByEmail(String email) throws ServiceException;
}
