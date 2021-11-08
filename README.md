
<img width="160" height="160" align="right" src="https://subicura.com/assets/article_images/2017-01-19-docker-guide-for-beginners-1/docker-logo.png"/>

# Madagascar-MockServer
### Learned how to Dockerize NodeJs application Based on [link](https://github.com/w00ing/WE_SOPT_API_MOCKUP)

## usage
### 1. Install Docker Desktop on Mac : [link](https://docs.docker.com/desktop/mac/install/)
### 2. Follow this command
``` 
docker pull noah0316/madagascar-server:1.0.0
```
```
docker run -p 4000:4000 noah0316/madagascar-server
```

## OR Clone this repo
### 1. Install Docker Desktop on Mac : [link](https://docs.docker.com/desktop/mac/install/)
### 2. Follow this command
```
git clone https://github.com/noah0316/Madagascar-MockServer.git
```
```
cd Madagascar-MockServer
```
```
docker compose up
```
---
if you follow the command, you can test your server on http://localhost:4000/api/user

## docker hub [url](https://hub.docker.com/r/noah0316/madagascar-server)




