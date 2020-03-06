FROM node:12
COPY . /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 5000
CMD npm run build