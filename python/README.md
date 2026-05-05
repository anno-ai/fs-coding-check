# Python Order Queue API

This is a FastAPI implementation of an in-memory order queue backed by a custom deque in [deque.py](deque.py). The code must be updated to complete the implementation. The following actions must be done.
A. In the Deque class:
    - Implement `push_back`
    - Implement `push_front`
B. In the API:
    - Implement the `dequeue` endpoint that takes and removes the oldest order from the queue
    - Implement the `get_last` endpoint that returns but doesn't remove the newest order in the queue
    - Implement the `get_next` endpoint that returns but doesn't remove the oldest order in the queue

## Run

```bash
pip install -r requirements.txt
uvicorn api:app --reload
```

Server URL: http://127.0.0.1:8000

Interactive docs:
- Swagger: http://127.0.0.1:8000/docs
- ReDoc: http://127.0.0.1:8000/redoc

## Endpoints

- `POST /orders/enqueue` with JSON body `{ "order_number": "A-1001" }`
- `POST /orders/dequeue`
- `GET /orders/get_last`
- `GET /orders/get_next`
