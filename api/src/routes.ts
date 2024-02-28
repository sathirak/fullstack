// routes/routes.ts
import { Router } from 'express';

// template route for reusing purposes
import template_route from './routes/template';

const router = Router();

// api call at the start
router.get('/', (req, res) => {
    res.send('> hello there! 😁');
});

// template route for reusing purposes
router.use('/temp', template_route);

export default router;