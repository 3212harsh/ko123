FROM node:latest

LABEL maintainer="Harsh Choudhary"

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 5173

ENTRYPOINT ["npm", "run", "dev", "--host"]
