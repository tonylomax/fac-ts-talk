import { Express, Request, Response } from "express";

export function Cart(app: Express) {
  app.delete("/cart/:id", async (req: Request, res: Response) => {
    const cartId = req.params.id;
    try {
      //do some stuff
    } catch (error) {
      res.send((error as Error).message);
      console.log((error as Error).message);
    }
  });
}
