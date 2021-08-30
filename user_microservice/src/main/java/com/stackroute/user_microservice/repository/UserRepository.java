package com.stackroute.user_microservice.repository;

import com.stackroute.user_microservice.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface UserRepository extends MongoRepository<User,String> {
    User findByEmail(String email);
    User findByUserId(UUID userId);
}
