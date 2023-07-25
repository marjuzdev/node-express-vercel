
const { Router } = require('express');


const router = new Router();

router.get('/test', (req, res) => {
      console.log("call for webkook");
      console.log("more text");

      console.log('req.query', JSON.stringify(req.query));
      // console.log('req.query', req);

      const {Usuario,External_Id, id, Transaccion, FechaRegistro } = req.query;
      console.log('Usuario', Usuario);

      res.json({
        status: '200',
        response: "ok"
      });
});



module.exports = router;  