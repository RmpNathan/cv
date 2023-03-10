FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm i -g concurrently

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
