import { Router, Request, Response } from "express";

const router = Router();

// @route GET /dashboard
// @des Authenticate a user
// @access PUBLIC

router.get("/", (req: Request, res: Response) => {
  res.send(200);
});

export default router;