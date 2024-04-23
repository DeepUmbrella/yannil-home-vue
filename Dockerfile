FROM node:18.16.0-alpine3.17 as build

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . .

RUN npm run build

FROM node:18.16.0-alpine3.17 as main

COPY --from=build /app /

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
