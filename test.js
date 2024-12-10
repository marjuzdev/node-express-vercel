
const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {

  console.log(`[INFO]  Entering the endpoint '/'`);
  console.info(`[INFO]  Entering the endpoint '/'`);

  try {

    res.status(200).json({
       response: "ok"
    });

  } catch (error) {

    console.log('Error test', error);
    res.status(500).json({
      response: "Internal error server"
    });
  }
});



module.exports = router;  