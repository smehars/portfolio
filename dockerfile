# using alpine iamge because its a small image of node
# node is efficient react applications
FROM node:25-alpine3.22 as build 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# vite uses port 5173 by default
EXPOSE 5173 
CMD ['npm', 'run', 'dev', '--', '--host']