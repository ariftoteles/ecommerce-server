const { authenticate } = require('../middlewares')
const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')
const productRoutes = require('./productRoutes')
const bannerRoutes = require('./bannerRoutes')
const categoryRoutes = require('./categoriesRoutes')
const cartRoutes = require('./cartRoutes')
const customerRoutes = require('./customerRoutes')
const wishlistRoutes = require('./wishlistRoutes')

router.use(userRoutes)
router.use('/customer', customerRoutes)
router.use(authenticate)
router.use('/products', productRoutes)
router.use('/banners', bannerRoutes)
router.use('/categories', categoryRoutes)
router.use('/carts', cartRoutes)
router.use('/wishlists', wishlistRoutes)

module.exports = router