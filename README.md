# Installation

1. Setup docker-compose
2. Run "docker-compose up"
3. Run once to migrate existing schemes to postgres db

```
   docker-compose run server npm run migrate -- --rebuild
```

4. Run "npm i" inside client and server folder to install all dependencies required for correct IDE work
