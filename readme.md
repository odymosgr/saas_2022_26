## Copy Repository

`git clone https://github.com/odymosgr/saas_2022_26.git energy_live`

## Development Environment

#### Setup with docker
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build`
#### Close docker container
`docker-compose down -v`

## Connect to Frontend Server Bash
`docker exec -it energy_live_frontend-server_1 bash`
#### Setup database from bash
`node database/setup.js`

## Production Environment

#### Setup with docker
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`
#### Close docker container
`docker-compose down -v`