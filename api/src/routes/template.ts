// routes/template.ts
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Segmentation fault (core dumped) <br/>Error: Attempted to access memory at address 0xurdeadmeat <br/>Program terminated unexpectedly.');
});

export default router;