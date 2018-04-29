FROM node:8.9
LABEL authors="Jairo Fdez <jairofg12@gmail.com>"
RUN mkdir /src
WORKDIR /src

EXPOSE 9000

CMD bash