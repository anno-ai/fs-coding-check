#from deque import Deque
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="Order Queue API")

# Internal in-memory queue
order_queue = Deque()


class OrderRequest(BaseModel):
    order_number: str


@app.post("/orders/enqueue")
def enqueue_order(payload: OrderRequest):
    order_queue.push_front(payload.order_number)
    return {
        "message": "Order added to queue",
        "order_number": payload.order_number,
        "queue_size": len(order_queue),
    }


@app.post("/orders/dequeue")
def dequeue_order():
    raise NotImplementedError("Deque must implement pop_back method")


@app.get("/orders/get_last")
def peek_front():
    raise NotImplementedError("Deque must implement peek_front method")


@app.get("/orders/get_next")
def peek_back():
    raise NotImplementedError("Deque must implement peek_back method")