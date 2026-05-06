import express, { Request, Response } from "express";
import { Deque } from "./deque";

type OrderRequest = {
  order_number: string;
};

const app = express();
const port = Number(process.env.PORT ?? 8000);
const orderQueue = new Deque<string>();

app.use(express.json());

app.post("/orders/enqueue", (req: Request<unknown, unknown, OrderRequest>, res: Response) => {
  //implement
});

app.post("/orders/dequeue", (_req: Request, res: Response) => {
  //implement
});

app.get("/orders/get_last", (_req: Request, res: Response) => {
  if (orderQueue.isEmpty()) {
    return res.status(404).json({ detail: "Queue is empty" });
  }

  return res.json({
    next_order: orderQueue.peekFront(),
    queue_size: orderQueue.size(),
  });
});

app.get("/orders/get_next", (_req: Request, res: Response) => {
  if (orderQueue.isEmpty()) {
    return res.status(404).json({ detail: "Queue is empty" });
  }

  return res.json({
    last_order: orderQueue.peekBack(),
    queue_size: orderQueue.size(),
  });
});

app.listen(port, () => {
  // Startup log for local development.
  console.log(`Order Queue API (TypeScript) listening on http://127.0.0.1:${port}`);
});
