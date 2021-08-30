package com.stackroute.user_microservice.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class , property = "@id",scope = EventObject.class)
public class EventObject implements Serializable {
    private String receiverEmail;
    private String message;
    private String subject;
    private String alertType;
}
