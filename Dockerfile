FROM node:9-alpine

WORKDIR /app
COPY . /app/
COPY docker/entrypoint.sh /app/
RUN yarn
RUN chmod +x entrypoint.sh

EXPOSE 9000

ENTRYPOINT [ "/app/entrypoint.sh" ]
