FROM openjdk:11

ADD ./target/mapping_service-0.0.1-SNAPSHOT.jar /usr/src/mapping_service-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "mapping_service-0.0.1-SNAPSHOT.jar"]
