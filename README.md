# Full VideoAsk Project

This project contains an Express.js server and a Next.js client (VideoAsk) intended to work together.

## Requirements

To run this project, you need to have the following installed on your system:

- Docker
- Docker Compose

## Getting Started

1. Clone this repository:

    ```bash
    git clone <repository-url>
    cd full-videoAsk
    ```

2. Run Docker Compose to build and start the services:

    ```bash
    docker-compose up --build -d
    ```

3. Once the containers are up and running, you can access the client (VideoAsk) at [http://localhost:3000](http://localhost:3000) and the server at [http://localhost:5000](http://localhost:5000).

4. To stop the services, run:

    ```bash
    docker-compose down
    ```

## Project Structure

- `docker-compose.yaml`: Docker Compose configuration file specifying the services and their configurations.
- `server/`: Directory containing files related to the Express.js server.
- `videoAsk/`: Directory containing files related to the Next.js client (VideoAsk).

##Database Schema Design & Logic

<img width="1004" alt="readme" src="https://github.com/eelmoham/videoAsk/assets/93978869/8222e617-0a81-483a-ab3c-0c9abcf56035">
