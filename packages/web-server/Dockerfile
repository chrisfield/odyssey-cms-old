FROM node:10

COPY . .

RUN npm i

RUN npm run build

ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]