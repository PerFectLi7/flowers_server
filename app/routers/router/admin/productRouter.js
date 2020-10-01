/*
 * @Description: 商品模块路由
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-04-07 22:52:56
 */
const Router = require('koa-router');
const productController = require('../../../controllers/admin/productController')

let productRouter = new Router();

productRouter
    .post('/product/admin/getAllProduct', productController.GetAllProduct)
    .post('/product/admin/getProductImg', productController.GetProductImg)
    .post('/product/admin/getDetails', productController.GetDetails)


module.exports = productRouter;