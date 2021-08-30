package com.stackroute.user_microservice.controller;

import com.stackroute.user_microservice.Enum.UserRole;
import com.stackroute.user_microservice.Exception.ServiceException;
import com.stackroute.user_microservice.model.User;
import com.stackroute.user_microservice.service.IGoogleService;
import com.stackroute.user_microservice.service.IUserService;

import com.stackroute.user_microservice.utils.CookieUtil;
import com.stackroute.user_microservice.utils.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;
import java.util.UUID;


@RestController
@Slf4j
@ComponentScan("com.stackroute.user_microservice")
@RequestMapping("userservice/api/v1/authorize")
public class HomeController {
    @Autowired
    IUserService userService;
    @Autowired
    Environment env;
    @Autowired
    IGoogleService googleService;



    @GetMapping("/app/googlelogin")
    public RedirectView appgooglelogin() {
        RedirectView redirectview = new RedirectView();
        String url = googleService.googlelogin();
        String urlUpdated = url + "&state=app";

        redirectview.setUrl(urlUpdated);
        return redirectview;
    }

    @GetMapping("/client/googlelogin")
    public RedirectView clientgooglelogin() {
        RedirectView redirectview = new RedirectView();
        String url = googleService.googlelogin();
        String urlUpdated = url + "&state=client";

        redirectview.setUrl(urlUpdated);
        return redirectview;
    }

    @GetMapping("/googlecomplete")
    public RedirectView google(@RequestParam("code") String code, @RequestParam("state") String state, HttpServletResponse res) throws ServiceException {
        RedirectView redirectview = new RedirectView();
        try {
            String accessToken = googleService.getGoogleAccessToken(code);
            log.info("AccessToken: " + accessToken);
            User userreq = googleService.getGoogleUserProfile(accessToken);

            if(userService.getUserByEmail(userreq.getEmail()) == null) {
                userreq.setUserId(UUID.randomUUID());

                if (state.equals("app")) {
                    userreq.setUserRole(UserRole.ASSESSOR);
                } else if (state.equals("client")) {
                    userreq.setUserRole(UserRole.RESPONDENT);
                }

            } else {
                userreq = userService.getUserByEmail(userreq.getEmail());
            }

            log.info("User: " + userreq.toString());
            String jwtToken = JwtUtil.addToken(userreq.getUserId(), userreq.getEmail(), userreq.getAvatar());
            log.info("JWT: " + jwtToken);
            log.info("creating cooie for domain : " + env.getProperty("domain"));
            Cookie cookie = CookieUtil.create(env.getProperty("cookie.name"), jwtToken, false, -1, env.getProperty("domain"));
            log.info("Adding cookie with name: " + cookie.getName());
            res.addCookie(cookie);

            if (state.equals("app")) {
                redirectview.setUrl(env.getProperty("redirect.app-landing-page"));
            } else if (state.equals("client")) {
                redirectview.setUrl(env.getProperty("redirect.client-landing-page"));
            }

            userService.saveUser(userreq);

        } catch (Exception exception) {
            log.error("In google method " + LocalDateTime.now() + " " + exception.getMessage());
            throw new ServiceException("Operation Failed");
        }

        return redirectview;
    }
}

