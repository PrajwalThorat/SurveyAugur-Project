package com.stackroute.survey_authoring;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@EnableEurekaClient
@SpringBootApplication
public class SurveyAuthoringApplication {


	public static void main(String[] args) {
		SpringApplication.run(SurveyAuthoringApplication.class, args);
	}



}
