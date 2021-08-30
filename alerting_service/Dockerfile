FROM openjdk:11

ADD ./target/alerting_service-0.0.1-SNAPSHOT.jar /usr/src/alerting_service-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "alerting_service-0.0.1-SNAPSHOT.jar"]
