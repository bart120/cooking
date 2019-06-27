# base image
FROM node:12.2.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install react-scripts@3.0.1 -g
RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]


