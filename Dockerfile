FROM node:12-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci -qy

COPY ./ .

RUN npm run build

EXPOSE 1337

CMD [ "npm", "run", "dev" ]
