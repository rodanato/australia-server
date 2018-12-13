FROM node:8.12.0-alpine
COPY . .
RUN npm i
EXPOSE 3000
CMD node index.js
