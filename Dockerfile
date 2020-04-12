FROM node:lts-alpine

# Pass in build arguments as environment variables
ARG IN_CONTAINER
ENV IN_CONTAINER $IN_CONTAINER

RUN npm install -g static-frontend-server@0.6.0

# Add frontend package and install dependencies
WORKDIR /app/uicode
COPY package*.json ./
RUN npm install

# Add frontend code separately and build
COPY . ./
RUN npm run build

# Move the built files into the static-server
WORKDIR /app
RUN cp -R ./uicode/dist ./dist \
      && cp ./uicode/apiConfiguration.json ./apiConfiguration.json \
      && rm -rf ./uicode

CMD ["static-frontend-server", "--api-config", "apiConfiguration.json"]
