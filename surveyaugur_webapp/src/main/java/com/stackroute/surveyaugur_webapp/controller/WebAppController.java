package com.stackroute.surveyaugur_webapp.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebAppController {
    @RequestMapping(value = "/")
    public String redirect() {
        // Forward to home page so that angular routing is preserved.
        return "index.html";
    }
}