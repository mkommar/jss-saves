# jss-saves

Running from commandline
npm -g install typescript
npm i
npm start

Building and running docker
Building docker image
docker build -t <username>/jss-saves .
docker run -p 3000:3000 -d <username>/jss-saves

docker ps
docker logs <container id>

Test and endpoint
curl http://localhost:3000 -XGET

# Set SKUs
# Create a cart
# Do discounts on cart