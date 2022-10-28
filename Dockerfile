FROM debian:bullseye as builder

ARG NODE_VERSION=16.15.1
ARG YARN_VERSION=1.22.19

RUN apt-get update; apt install -y curl
RUN curl https://get.volta.sh | bash
ENV VOLTA_HOME /root/.volta
ENV PATH /root/.volta/bin:$PATH
RUN volta install node@${NODE_VERSION} yarn@${YARN_VERSION}

#######################################################################

RUN mkdir /app
WORKDIR /app

ENV NODE_ENV production

COPY . .

RUN yarn install && yarn run build
FROM debian:bullseye

LABEL fly_launch_runtime="nodejs"

COPY --from=builder /root/.volta /root/.volta
COPY --from=builder /app /app

WORKDIR /app
ENV NODE_ENV production
ENV PATH /root/.volta/bin:$PATH

CMD [ "yarn", "run", "start" ]

## Base image
#FROM node:18
#
## Create app directory
#WORKDIR /usr/src/app
#
## A wildcard is used to ensure both package.json AND package-lock.json are copied
#COPY package*.json ./
#
## Install app dependencies
#RUN yarn install
#
## Bundle app source
#COPY . .
#
## Creates a "dist" folder with the production build
#RUN yarn run build
#
## Start the server using the production build
#CMD [ "node", "dist/main.js" ]
