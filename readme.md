## Copy Repository

`git clone https://github.com/odymosgr/saas_2022_26.git energy_live`

## Development Environment

#### Setup with docker
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build`
#### Close docker container
`docker-compose down -v`

## Production Environment

#### Setup with docker
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`
#### Close docker container
`docker-compose down -v`