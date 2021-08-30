package com.stackroute.survey_authoring.Models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Data
@NoArgsConstructor
public class QuestionGroup implements Serializable {

    @Id
    private UUID questionGroupId;
    private String name;
    private UUID createdBy;
    private Date createdOn;
    private Date updatedOn;
    private String []tags;
}
