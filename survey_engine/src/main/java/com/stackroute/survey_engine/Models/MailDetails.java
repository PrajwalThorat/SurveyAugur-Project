package com.stackroute.survey_engine.Models;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MailDetails {
    String[] mailIds;
    String message;
}
