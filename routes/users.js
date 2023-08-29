import express from'express';
import update from '../controller/user/update.js';
import create from '../controller/user/create.js';
import read from '../controller/user/read.js';
import readOne from '../controller/user/readOne.js';
import destroy from '../controller/user/destroy.js';


let router = express.Router();

//CREATE
router.post('/', create)

//READ
router.get('/', read)
router.get('/:user_id', readOne)

//UPDATE
router.put('/:u_id', update)


router.delete('/:id', destroy)


export default router;
