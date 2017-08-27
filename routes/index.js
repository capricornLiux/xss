var express = require('express');
var router = express.Router();

var comments = {};

function html_encode(str) {
  var result = '';
  if (str.length === 0) {
    return '';
  }
  result = result.replace(/&/g,"&gt;");
  result = result.replace(/</g,"&lt;");
  result = result.replace(/>/g,"&gt;");
  result = result.replace(/\s/g,"&nbsp;");
  result = result.replace(/\'/g,"&#39;");
  result = result.replace(/\"/g,"&quot;");
  result = result.replace(/\n/g,"<br>");
  return result;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/comment', function (req, res, next) {
  // comments.v = req.query.comment;
  comments.v = html_encode(req.query.comment);
})

router.get('/getComment', function (req, res, next) {
  res.json({
    comment: comments.v;
  })
})

module.exports = router;
