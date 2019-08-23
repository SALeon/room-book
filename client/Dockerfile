FROM node as builder
WORKDIR '/room-book'
COPY ./package.json ./
RUN npm i
COPY . .
CMD ["npm", "build"]

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /room-book/dist user/share/nginx/html
