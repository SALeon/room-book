FROM node
WORKDIR /room-book
COPY ./package.json ./

RUN npm i --production
COPY . .

CMD ["npm", "start"]
