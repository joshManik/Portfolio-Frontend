FROM node:16.13.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./

RUN npm i

COPY ./frontend ./
# start app
CMD ["npm", "start"]