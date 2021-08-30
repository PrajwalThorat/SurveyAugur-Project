FROM openjdk:11

ADD ./target/survey_authoring-0.0.1-SNAPSHOT.jar /usr/src/survey_authoring-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "survey_authoring-0.0.1-SNAPSHOT.jar"]
