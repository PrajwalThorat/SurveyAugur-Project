FROM openjdk:11

ADD ./target/survey_engine-0.0.1-SNAPSHOT.jar /usr/src/survey_engine-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "survey_engine-0.0.1-SNAPSHOT.jar"]
