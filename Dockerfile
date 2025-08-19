# Dockerfile for website
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 99
