
const { Router } = require('express');


const router = new Router();

router.get('/test', (req, res) => {
      console.log("call for webkook");
      console.log("more text");

      // console.log('req', req.);

      res.json({
        status: '200',
        response: "ok"
      });
});



module.exports = router;  