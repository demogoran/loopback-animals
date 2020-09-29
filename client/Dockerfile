FROM node:10-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g @angular/cli && npm i

EXPOSE 4200 49153
COPY . .

CMD ng serve --host 0.0.0.0 --poll
