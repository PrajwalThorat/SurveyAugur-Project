package com.stackroute.user_microservice.service;

import com.stackroute.user_microservice.Enum.AcessLevel;
import com.stackroute.user_microservice.Exception.ServiceException;
import com.stackroute.user_microservice.UserMicroserviceApplication;
import com.stackroute.user_microservice.model.EventObject;
import com.stackroute.user_microservice.model.User;
import com.stackroute.user_microservice.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
@Slf4j
public class UserService implements IUserService{

    @Autowired
    UserRepository userRepository;
    @Autowired
    RabbitTemplate template;

    @Override
    public User saveUser(User user)throws ServiceException{
        User user1;
        try {
            if (userRepository.findByEmail(user.getEmail())!=null) {
                return user;
            }
            else
            {
                user.setAccessLevel(AcessLevel.COMMUNITY);
                user.setUpdatedOnTS(new Date(System.currentTimeMillis()));
                user.setPaymentMethod(null);
                user.setTransactionID(null);
                user1=userRepository.save(user);
                EventObject eventObject=new EventObject();
                eventObject.setReceiverEmail(user.getEmail());
                eventObject.setMessage("Welcome to SurveyAugur Family");
                eventObject.setSubject("Login Successful");
                eventObject.setAlertType("Email");
                template.convertAndSend(UserMicroserviceApplication.EXCHANGE,UserMicroserviceApplication.ROUTING_KEY,eventObject);

                return user1;

            }


        }catch(Exception e)
        {
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public User updateUserByUserId(User user, UUID userId) throws ServiceException {
        try {
            User updateUser;
            log.info("Incoming Object: "+user);
            if (userRepository.findByUserId(userId) == null) {
                throw new ServiceException("User Not Found");
            } else {
                updateUser = userRepository.findByUserId(userId);
                log.info("Fetched Object: "+updateUser);
                if (user.getUserId().equals(updateUser.getUserId())
                        && user.getEmail().equals(updateUser.getEmail())
                        && user.getUserRole().equals(updateUser.getUserRole())
                        && user.getAccessLevel().equals(updateUser.getAccessLevel())
                        && user.getUsername().equals(updateUser.getUsername())) {
                    log.info("Credentials Matched");

                    user.setUpdatedOnTS(new Date(System.currentTimeMillis()));
                    userRepository.save(user);

                    return user;

                }
                else
                {
                    throw new ServiceException("Credentials Did Not Match");
                }

            }

        }catch (Exception e)
        {
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public User getUserByUserId(UUID userId) throws ServiceException {
        try {
            User user;
            if (userRepository.findByUserId(userId) == null) {
                throw new ServiceException("User not Found");
            } else {
                user = userRepository.findByUserId(userId);
                return user;
            }


        } catch (Exception e) {
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public User getUserByEmail(String email) throws ServiceException {
            return userRepository.findByEmail(email);
    }


}

