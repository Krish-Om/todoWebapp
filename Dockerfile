FROM ubuntu:latest
LABEL authors="krishom"

ENTRYPOINT ["top", "-b"]