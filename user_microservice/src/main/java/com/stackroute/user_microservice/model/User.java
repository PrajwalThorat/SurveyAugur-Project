package com.stackroute.user_microservice.model;

import com.stackroute.user_microservice.Enum.AcessLevel;
import com.stackroute.user_microservice.Enum.UserRole;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Data
public class User implements Serializable {

   private UUID userId;
   private String username;

   @Id
   private String email;
   private UserRole userRole;
   private String avatar;
   private String organization;
   private Date updatedOnTS;
   private String updatedBy;
   private AcessLevel accessLevel=null; //community
   private String paymentMethod=null; //NULL
   private String transactionID=null; //NULL



}
