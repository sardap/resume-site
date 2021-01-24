FROM node:10 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install .

COPY . .

RUN npm run build

###################################

FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

COPY --from=builder /app/dist /app/dist

EXPOSE 8080

CMD [ "http-server", "dist" ]
