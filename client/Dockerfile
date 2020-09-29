FROM node:10-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g @angular/cli && ng new client

WORKDIR /usr/src/app/client
EXPOSE 4200
CMD ng serve --host 0.0.0.0
