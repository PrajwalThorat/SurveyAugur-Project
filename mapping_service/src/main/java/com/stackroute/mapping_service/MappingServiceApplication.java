package com.stackroute.mapping_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class MappingServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MappingServiceApplication.class, args);
	}

}
