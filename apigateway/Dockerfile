FROM openjdk:11

ADD ./target/apigateway-0.0.1-SNAPSHOT.jar /usr/src/apigateway-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "apigateway-0.0.1-SNAPSHOT.jar"]
