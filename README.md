# ChessFrontEnd

Chess web app front end built with React 19, TypeScript and Vite.

## Run the whole app

The front end, back end and database are started together from the `ChessApp` repository with Docker Compose.

The front-end image is:

```
ghcr.io/beausername/chessapp-frontend:latest
```


## Develop

Requirements: Node 22 and the back end running on http://localhost:8080.

1. Install the packages:
```
   npm ci
```
2. Start the dev server:
```
   npm run dev
```
3. Open the address that Vite prints, for example http://localhost:5173. Requests to `/api` are forwarded to http://localhost:8080 (`vite.config.ts`).

## Build the image yourself

1. Build the pages into the folder `dist`:
```
   npm run build
```
2. Build the Docker image:
```
   docker build -t chessapp-frontend-image .
```