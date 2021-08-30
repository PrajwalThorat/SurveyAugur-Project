FROM openjdk:11

ADD ./target/configservice-0.0.1-SNAPSHOT.jar /usr/src/configservice-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "configservice-0.0.1-SNAPSHOT.jar"]
