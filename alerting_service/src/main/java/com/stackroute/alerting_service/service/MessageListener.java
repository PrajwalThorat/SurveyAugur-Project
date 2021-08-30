package com.stackroute.alerting_service.service;



import com.stackroute.alerting_service.models.EventObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MessageListener {


    @Autowired
    private EmailService emailService;


    private static final Logger logger = LoggerFactory.getLogger(MessageListener.class);

    @RabbitListener(queues = "${spring.rabbitmq.queue}")
    public void listener(EventObject eventObject){
        emailService.sendTextEmail(eventObject);
        logger.info("Recieved User Details"+eventObject);
    }
}
