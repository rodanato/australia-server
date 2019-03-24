FROM node:8.12.0-alpine
COPY . .
RUN npm i
EXPOSE 3333
CMD node index.js
