## Local MongoDB container

For testing only. Data is **not persistent**!

```
podman run \
 -d \
 -p 27017:27017 \
 --name mongodb \
 -e MONGODB_INITDB_ROOT_USERNAME=raphael \
 -e MONGODB_INITDB_ROOT_PASSWORD=superSecure \
 -e MONGODB_INITDB_DATABASE=recpies-treasury \
 mongodb/mongodb-community-server:6.0-ubi8
```
