# TypeScript Order Queue API (npm clone)

This folder contains a TypeScript + Express clone of the Python version, including a custom deque implementation in [src/deque.ts](src/deque.ts).

## Setup

```bash
cd npm
npm install
```

## Run (development)

```bash
npm run dev
```

Default server URL: http://127.0.0.1:8000

## Build and run

```bash
npm run build
npm start
```

## Endpoints

- `POST /orders/enqueue` with JSON body `{ "order_number": "A-1001" }`
- `POST /orders/dequeue`
- `GET /orders/get_last`
- `GET /orders/get_next`
