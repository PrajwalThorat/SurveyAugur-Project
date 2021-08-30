package com.stackroute.survey_authoring.Services;


import com.stackroute.survey_authoring.Enums.SurveyType;
import com.stackroute.survey_authoring.Exceptions.ServiceException;
import com.stackroute.survey_authoring.Models.InactiveSurvey;
import com.stackroute.survey_authoring.Repository.InactiveSurveyRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class InactiveSurveyServiceTest {
    private InactiveSurvey survey;
    @Mock
    InactiveSurveyRepository repository;
    @InjectMocks
    InactiveSurveyServiceImpl service;

    public InactiveSurveyServiceTest(){
        survey = new InactiveSurvey();
        survey.setId(UUID.fromString("c8569913-1724-4575-8a8e-38234e9bcd1f"));
        survey.setTitle("Test");
        survey.setTargetAudience("20-40 years age male");
        survey.setCreatedBy(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        survey.setActiveTime(Long.valueOf(5));
        survey.setSurveyType(SurveyType.SECTIONED);
    }

    @Test
    public void givenSurveyToSaveShouldReturnSavedSurvey(){
        when(repository.save(survey)).thenReturn(survey);
        InactiveSurvey test = service.saveSurvey(survey, UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        verify(repository, times(1)).save(any());
        Assertions.assertNotNull(test);
        Assertions.assertEquals(survey.getTitle(), test.getTitle());
    }

    @Test
    public void givenSurveyToSaveThrowExceptionWhenTitleMissing(){
        InactiveSurvey survey1 = new InactiveSurvey();
        survey1.setId(UUID.fromString("c8569913-1724-4575-8a8e-38234e9bcd1f"));
        survey1.setTargetAudience("20-40 years age male");
        survey1.setCreatedBy(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        survey1.setActiveTime(Long.valueOf(5));
        survey1.setSurveyType(SurveyType.SECTIONED);
        Assertions.assertThrows(ServiceException.class, ()->{
            service.saveSurvey(survey1, UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        });
    }

    @Test
    public void givenSurveyToSaveThrowExceptionWhenTargetAudienceMissing(){
        InactiveSurvey survey1 = new InactiveSurvey();
        survey1.setId(UUID.fromString("c8569913-1724-4575-8a8e-38234e9bcd1f"));
        survey1.setTitle("Test");
        survey1.setCreatedBy(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        survey1.setActiveTime(Long.valueOf(5));
        survey1.setSurveyType(SurveyType.SECTIONED);
        Assertions.assertThrows(ServiceException.class, ()->{
            service.saveSurvey(survey1, UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        });
    }

    @Test
    public void givenSurveyToSaveThrowExceptionWhenActiveTimeMissing(){
        InactiveSurvey survey1 = new InactiveSurvey();
        survey1.setId(UUID.fromString("c8569913-1724-4575-8a8e-38234e9bcd1f"));
        survey1.setTitle("Test");
        survey1.setTargetAudience("20-40 years age male");
        survey1.setCreatedBy(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        survey1.setSurveyType(SurveyType.SECTIONED);
        Assertions.assertThrows(ServiceException.class, ()->{
            service.saveSurvey(survey1, UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        });
    }

    @Test
    public void givenSurveyToSaveThrowExceptionWhenSurveyTypeMissing(){
        InactiveSurvey survey1 = new InactiveSurvey();
        survey1.setId(UUID.fromString("c8569913-1724-4575-8a8e-38234e9bcd1f"));
        survey1.setTitle("Test");
        survey1.setTargetAudience("20-40 years age male");
        survey1.setCreatedBy(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        survey1.setActiveTime(Long.valueOf(5));
        Assertions.assertThrows(ServiceException.class, ()->{
            service.saveSurvey(survey1, UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        });
    }

    @Test
    public void givenSurveyToUpdateReturnSurvey(){
        when(repository.save(any())).thenReturn(survey);
        when(repository.findByCreatedByAndId(any(),any())).thenReturn(survey);
        InactiveSurvey test = service.updateSurvey(survey, UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        verify(repository, times(1)).save(any());
        Assertions.assertNotNull(test);
        Assertions.assertEquals(survey.getTitle(), test.getTitle());
    }

    @Test
    public void givenSurveyToUpdateThrowExceptionWhenSurveyNotPresent(){
        when(repository.findByCreatedByAndId(any(),any())).thenReturn(null);
        Assertions.assertThrows(ServiceException.class, ()->{
            service.updateSurvey(survey, UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        });
    }

    @Test
    public void givenSurveyToDelete(){
        Optional<InactiveSurvey> surveyOptional = Optional.of(survey);
        when(repository.findById(any())).thenReturn(surveyOptional);
        Assertions.assertNull(service.deleteSurvey(survey.getId()));
    }

    @Test
    public void givenSurveyToDeleteThrowsExceptionWhenSurveyNotFound(){
        Optional<InactiveSurvey> surveyOptional = Optional.empty();
        when(repository.findById(any())).thenReturn(surveyOptional);
        Assertions.assertThrows(ServiceException.class, ()->{
            service.deleteSurvey(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        });
    }

    @Test
    public void givenSurveyIdToReturnSurvey(){
        Optional<InactiveSurvey> surveyOptional = Optional.of(survey);
        when(repository.findById(any())).thenReturn(surveyOptional);
        InactiveSurvey test = service.getSurvey(survey.getId());
        Assertions.assertNotNull(test);
        Assertions.assertEquals(survey.getTitle(), test.getTitle());
    }

    @Test
    public void givenSurveyIdToThrowExceptionWhenSurveyNotPresent(){
        Optional<InactiveSurvey> surveyOptional = Optional.empty();
        when(repository.findById(any())).thenReturn(surveyOptional);
        Assertions.assertThrows(ServiceException.class, ()->{
            service.getSurvey(survey.getId());
        });
    }

    @Test
    public void givenUserIdToReturnList(){
        List<InactiveSurvey>  list  = new ArrayList<>();
        InactiveSurvey survey1 = new InactiveSurvey();
        survey1.setId(UUID.fromString("c8519913-1724-4575-8a8e-38234e9bcd1f"));
        survey1.setTitle("Test");
        survey1.setTargetAudience("20-40 years age male");
        survey1.setCreatedBy(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        survey1.setActiveTime(Long.valueOf(5));
        survey1.setSurveyType(SurveyType.SECTIONED);
        list.add(survey);
        list.add(survey1);
        when(repository.findByCreatedBy(any())).thenReturn(list);
        List<InactiveSurvey> inactiveSurveys = service.getAllSurveyByUserId(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        Assertions.assertNotNull(inactiveSurveys);
        Assertions.assertEquals(2, inactiveSurveys.size());
    }

    @Test
    public void givenUserIdToThrowExeptionWhenSurveyNotPresent() {
        List<InactiveSurvey>  list  = new ArrayList<>();
        when(repository.findByCreatedBy(any())).thenReturn(list);
        Assertions.assertThrows(ServiceException.class,()->{
            service.getAllSurveyByUserId(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        });
    }

    @Test
    public void givenSurveyAndUserIdReturnTrue(){
        when(repository.findByCreatedByAndId(any(),any())).thenReturn(survey);
        Assertions.assertTrue(service.checkSurveyAndUser(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"),UUID.fromString("344e4567-e89b-12d3-a456-556642440000")));
    }

    @Test
    public void givenSurveyAndUserIdReturnFalse(){
        when(repository.findByCreatedByAndId(any(),any())).thenReturn(null);
        Assertions.assertFalse(service.checkSurveyAndUser(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"),UUID.fromString("344e4567-e89b-12d3-a456-556642440000")));
    }

    @Test
    public void givenUserIdReturnTrueWhenSurveyExist(){
        List<InactiveSurvey>  list  = new ArrayList<>();
        InactiveSurvey survey1 = new InactiveSurvey();
        survey1.setId(UUID.fromString("c8519913-1724-4575-8a8e-38234e9bcd1f"));
        survey1.setTitle("Test");
        survey1.setTargetAudience("20-40 years age male");
        survey1.setCreatedBy(UUID.fromString("344e4567-e89b-12d3-a456-556642440000"));
        survey1.setActiveTime(Long.valueOf(5));
        survey1.setSurveyType(SurveyType.SECTIONED);
        list.add(survey);
        list.add(survey1);
        when(repository.findByCreatedBy(any())).thenReturn(list);
        Assertions.assertTrue(service.checkUser(UUID.fromString("344e4567-e89b-12d3-a456-556642440000")));
    }

    @Test
    public void givenUserIdReturnFalseWhenSurveyNotExist(){
        when(repository.findByCreatedBy(any())).thenReturn(null);
        Assertions.assertFalse(service.checkUser(UUID.fromString("344e4567-e89b-12d3-a456-556642440000")));
    }
}