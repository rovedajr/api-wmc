
## Description
WMC assignment repository using NestJS and Prisma ORM.

*An observation here: TypeORM was the first choice but I had troubles generating migrations due to version conflicts - so Prisma the definitive choice.*

## Installation

```bash
# Important: Docker must be installed in the machine.

# Run the dockerized database
$ docker compose up dev-db -d

# Install dependencies
$ npm install

# Create the tables:
$ npx prisma migrate dev
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Swagger
Endpoints documentation can be found on http://localhost:3000/docs


## Postman
A Postman with all the endpoints can be found in the following file at the root of the project 
**wmc_api_user.postman_collection.json**