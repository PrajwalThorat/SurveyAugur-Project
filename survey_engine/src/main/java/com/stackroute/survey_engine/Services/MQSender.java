package com.stackroute.survey_engine.Services;


import com.stackroute.survey_engine.Models.EventObject;
import io.jsonwebtoken.Jwts;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.util.WebUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;


@Service
@Component
public class MQSender {


    @Value("${spring.rabbitmq.exchange}")
    private String exchange;

    @Value("${spring.rabbitmq.routingKey}")
    private String routingKey;


    @Autowired
    private RabbitTemplate rabbitTemplate;





    public EventObject send(EventObject eventObject,HttpServletRequest request,String message,String Subject) {
        Cookie cookie = WebUtils.getCookie(request, "JWT-TOKEN");
        String token= cookie.getValue();
        String email= Jwts.parser().setSigningKey("sOmE_sEcReT").parseClaimsJws(token).getBody().getSubject();
        eventObject.setReceiverEmail(email);
        eventObject.setMessage(message);
        eventObject.setSubject(Subject);
        eventObject.setAlertType("Email");
        rabbitTemplate.convertAndSend(exchange,routingKey,eventObject);

        return eventObject;
    }
    public EventObject send(EventObject eventObject,HttpServletRequest request,String message,String Subject,String email) {

        eventObject.setReceiverEmail(email);
        eventObject.setMessage(message);
        eventObject.setSubject(Subject);
        eventObject.setAlertType("Email");
        rabbitTemplate.convertAndSend(exchange,routingKey,eventObject);

        return eventObject;
    }










}
