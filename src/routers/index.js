import { Router } from 'express'

import viewsRouter from './views.router.js'
import productsRouter from "./products.router.js"
import cartsRouter from "./carts.router.js"
import usersRouter from "./users.router.js"

const router = Router()

router.use("/api/products", productsRouter);
router.use("/api/carts", cartsRouter);
router.use("/api/products", ()=>{});
router.use('/api/views', viewsRouter);
router.use('/api/users', usersRouter);


export default router;