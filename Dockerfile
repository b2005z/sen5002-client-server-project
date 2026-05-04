FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy your project files into nginx
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80