FROM openjdk:11

ADD ./target/user_microservice-0.0.1-SNAPSHOT.jar /usr/src/user_microservice-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "user_microservice-0.0.1-SNAPSHOT.jar"]
