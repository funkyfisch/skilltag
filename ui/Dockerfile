FROM node:lts-alpine

# Pass in build arguments as environment variables
ARG IN_CONTAINER
ENV IN_CONTAINER $IN_CONTAINER

# Add static server code and install dependencies
WORKDIR /app
COPY static-server/* ./
RUN npm install

# Add frontend package and install dependencies
WORKDIR /app/uicode
COPY ui/package*.json .
RUN npm install

# Add frontend code separately and build
COPY ui .
RUN npm run build

# Move the built files into the static-server, and cleanup the rest
WORKDIR /app
RUN cp -R ./uicode/dist ./dist \
      && rm -rf ./src

CMD ["npm", "run", "start"]
