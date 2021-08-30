package com.stackroute.survey_engine.Models;


import lombok.Data;

@Data
public class ResponseEnvelope {

    private Object result;
    private String error;
    private Object query;
    private Integer status;
    private Integer count;
    private Long totalCount;
    private Long asON;

}
