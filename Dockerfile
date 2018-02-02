FROM alexsuch/angular-cli

MAINTAINER Ramon Ontiveros, ramon.ontiveros@itesm.mx

RUN mkdir /home/ip-cam
WORKDIR /home/ip-cam
ADD package.json /home/ip-cam/
RUN npm install
ADD . /home/ip-cam

EXPOSE 4200
