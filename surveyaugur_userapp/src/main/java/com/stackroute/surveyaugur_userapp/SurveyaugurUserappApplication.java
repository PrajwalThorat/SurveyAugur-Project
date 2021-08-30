package com.stackroute.surveyaugur_userapp;

import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableEurekaClient
@SpringBootApplication
public class SurveyaugurUserappApplication {


	public static void main(String[] args) {
		SpringApplication.run(SurveyaugurUserappApplication.class, args);
	}
}


