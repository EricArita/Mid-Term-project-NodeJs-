var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/management/accountlist', function(req, res, next) {
  res.render('AccountList', { title: 'Quản lí tài khoản' });
});

router.get('/management/orderlist', function(req, res, next) {
  res.render('OrderList', { title: 'Quản lí đơn hàng' });
});

router.get('/management/productlist', function(req, res, next) {
  res.render('ProductList', { title: 'Quản lí sản phẩm' });
});

router.get('/statistics', function(req, res, next) {
  res.render('Statistics', { title: 'Thống kê doanh thu' });
});


module.exports = router;
