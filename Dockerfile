FROM nginx:alpine
COPY . /usr/share/nginx/html
# EXPOSE 80
# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./getConfig.sh .
COPY ./configMap.env .
# Add bash
RUN apk add --no-cache bash
# Make our shell script executable
RUN chmod +x env.sh
# Start Nginx server in addition to calling env.sh to generate our script file
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/getConfig.sh && nginx -g \"daemon off;\""]