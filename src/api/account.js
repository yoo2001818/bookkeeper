import { Router } from 'express';
import { isNull } from 'validator';
import knex from '../db';

const router = new Router();
export default router;

const ACCEPTED_ACCOUNT_TYPES = [
  'asset',
  'capital',
  'liability',
  'income',
  'expense'
];

/**
 * @api {get} /api/account/ Get total list of accounts
 * @apiName getAccountList
 * @apiGroup Account
 */
router.get('/', (req, res) => {
  knex('accounts').select().then(result => {
    res.json(result);
  }, error => {
    console.log(error);
    res.status(500);
    res.json(error);
  });
});

/**
 * @api {post} /api/account/ Create a new account
 * @apiName createAccount
 * @apiGroup Account
 *
 * @apiParam (Body) {String} name The name of an account.
 * @apiParam (Body) {String} type The type of an account.
 */
router.post('/', (req, res) => {
  if (isNull(req.body.name)) {
    res.status(400).send('Please specify the account name.');
    return;
  }
  if (ACCEPTED_ACCOUNT_TYPES.indexOf(req.body.type) === -1) {
    res.status(400).send('Account type is not invalid.');
    return;
  }
  knex('accounts').insert({
    type: req.body.type,
    name: req.body.name
  }).then(result => {
    res.json(result);
  }, error => {
    console.log(error);
    res.status(500);
    res.json(error);
  });
});
