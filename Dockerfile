FROM node:20.9.0-alpine3.18

WORKDIR /usr/src

COPY package*.json ./

RUN npm ci

COPY . .

ENV PORT: "8080"
ENV DB_CONNECTION: "postgres"
ENV DB_HOST: "localhost"
ENV DB_DATABASE: "uplift"
ENV DB_USERNAME: "postgres"
ENV DB_PASSWORD: "aldhi"
ENV JWT_SECRET_KEY: "secret"
ENV JWT_EXPIRATION: "1hr"

EXPOSE 8080

CMD ["npm", "run", "start"]
