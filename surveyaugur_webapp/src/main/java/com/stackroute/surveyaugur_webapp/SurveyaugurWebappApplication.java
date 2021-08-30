package com.stackroute.surveyaugur_webapp;

import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableEurekaClient
@SpringBootApplication
public class SurveyaugurWebappApplication {

	public static void main(String[] args) { SpringApplication.run(SurveyaugurWebappApplication.class,args);

	}

}
