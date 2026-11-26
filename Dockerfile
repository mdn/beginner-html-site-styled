FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*


COPY . /usr/share/nginx/html

EXPOSE 80

# Iniciamos Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
