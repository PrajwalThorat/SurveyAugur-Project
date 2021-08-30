package com.stackroute.alerting_service.service;


import com.stackroute.alerting_service.models.EventObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendTextEmail(EventObject eventObject) {

        SimpleMailMessage msg = new SimpleMailMessage();
        try {
            msg.setFrom("survey.augur@gmail.com");
            msg.setTo(eventObject.getReceiverEmail());
            msg.setSubject(eventObject.getSubject());
            msg.setText(eventObject.getMessage());
            javaMailSender.send(msg);
            System.out.println("Email sent......");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}