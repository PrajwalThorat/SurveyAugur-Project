FROM openjdk:11

ADD ./target/surveyaugur_userapp-0.0.1-SNAPSHOT.jar /usr/src/surveyaugur_userapp-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "surveyaugur_userapp-0.0.1-SNAPSHOT.jar"]
