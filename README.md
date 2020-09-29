# Installation

1. Setup docker-compose
2. Run once to migrate existing schemes to postgres db

```
   docker-compose run server npm run migrate -- --rebuild
```

3. Run "npm i" inside client and server folder to install all dependencies required for correct IDE work
4. Run "docker-compose up"

# Usage

Open http://localhost:4200/pet for FE and http://127.0.0.1:3000/pets for BE.
Notice please, that becouse of lack of time I did implement all functionality only for BE(+ docker-compose with hot-reload), FE contains only pets get/create methods.
