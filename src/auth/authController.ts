import { Request, Response } from "express";

const index = (req: Request, res: Response) => {
  res.send('Hello auth');
};

const login = (req: Request, res: Response) => {
  res.send('login');
};

export default {
  index,
  login,
}