FROM openjdk:11

ADD ./target/discoveryservice-0.0.1-SNAPSHOT.jar /usr/src/discoveryservice-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "discoveryservice-0.0.1-SNAPSHOT.jar"]
