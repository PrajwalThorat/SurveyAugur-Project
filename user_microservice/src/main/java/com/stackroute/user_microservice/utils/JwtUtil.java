package com.stackroute.user_microservice.utils;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;
import java.util.UUID;

@Slf4j
public class JwtUtil {


    static final long EXPIRATIONTIME = 3600000;// 1 hour in milliseconds

    public static String addToken(UUID userId, String email, String avatar) {
        log.info("Generating Token");
        String jwtToken = Jwts.builder()
                .setIssuer("SurveyAugur")
                .setSubject(email)
                .setIssuedAt(new Date())
                .claim("userId", userId)
                .claim("avatar", avatar)
                .signWith(SignatureAlgorithm.HS512, "sOmE_sEcReT")
                .compact();

        return jwtToken;
    }
}
