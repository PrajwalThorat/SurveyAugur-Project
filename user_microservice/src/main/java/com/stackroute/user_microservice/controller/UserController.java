package com.stackroute.user_microservice.controller;

import com.stackroute.user_microservice.Exception.ServiceException;
import com.stackroute.user_microservice.model.User;
import com.stackroute.user_microservice.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping
@ComponentScan("com.stackroute.user_microservice")
public class UserController {
    @Autowired
    IUserService userService;



    @GetMapping("/userservice/api/v1/users/{userId}")
    public ResponseEntity<User> getUserByUserId(@PathVariable UUID userId) throws ServiceException {

        User user=userService.getUserByUserId(userId);
        if(user!=null){
            return  ResponseEntity.ok(user);
        }
        return (ResponseEntity<User>) ResponseEntity.notFound();
    }

    @PutMapping("/userservice/api/v1/users/{userId}")
    public ResponseEntity<User> updateUserByUserId(@RequestBody User user , @PathVariable UUID userId)throws ServiceException
    {          User updatedUser=userService.updateUserByUserId(user,userId);
        if(updatedUser!=null){
            return  ResponseEntity.ok(updatedUser);
        }
        return (ResponseEntity<User>) ResponseEntity.notFound();

    }

}
