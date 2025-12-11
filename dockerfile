# using alpine iamge because its a small image of node
# node is efficient react applications
FROM node:25-alpine3.22 as build 
WODKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm 