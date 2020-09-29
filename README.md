# Installation

1. Setup docker-compose
2. Run once to migrate existing schemes to postgres db

```
   docker-compose run server npm run migrate -- --rebuild
```

3. Run "npm i" inside client and server folder to install all dependencies required for correct IDE work
4. Run "docker-compose up"
