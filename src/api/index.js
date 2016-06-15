import { Router } from 'express';
import bodyParser from 'body-parser';

import account from './account';

const router = new Router();
export default router;

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.use('/account', account);
