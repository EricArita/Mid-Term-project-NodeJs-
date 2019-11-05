var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Đăng nhập' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Đăng kí' });
});

router.get('/detail', function(req, res, next) {
  res.render('detail', { title: 'Chi tiết sản phẩm' });
});

router.get('/add-item', function(req, res, next) {
  res.render('cart', { title: 'Giỏ hàng' });
});

router.get('/reset-password', function(req, res, next) {
  res.render('resetPassword', { title: 'Reset mật khẩu' });
});



module.exports = router;
