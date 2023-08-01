FROM nginx:alpine-slim

WORKDIR /app

COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf