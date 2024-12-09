# Use an official Nginx image as a base image
FROM nginx:latest

# Copy the contents of the current directory to the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80 (the default port for Nginx)
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

