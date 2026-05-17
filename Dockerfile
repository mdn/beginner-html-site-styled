FROM nginx:alpine

# Copy website files to nginx html directory
COPY . /usr/share/nginx/html

# Expose port 99
EXPOSE 99

# Change nginx to listen on port 99
RUN sed -i 's/listen       80;/listen       99;/g' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
