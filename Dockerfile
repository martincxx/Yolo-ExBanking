FROM node:lts-alpine
ENV NODE_ENV=production
RUN mkdir /app 
WORKDIR /app
COPY ["package.json", "package-lock.json*", "mocha.opts", "babel.config.json", "src", "test", "/app/"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN chown -R node /app
USER node
ENTRYPOINT ["npm", "run", "test", ":report"]
CMD [ "" ]