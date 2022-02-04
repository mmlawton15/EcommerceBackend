const router = require('express').Router();
const apiRoutes = require('./api');
const categoryRoutes = require('./api/category-routes.js')
const productRoutes = require('./api/product-routes.js')
const tagRoutes = require('./api/tag-routes.js')

router.use('/api', apiRoutes);
router.use('/category', categoryRoutes); //trying to mimic the lesson content here but not sure what these are referencing
router.use('/product', productRoutes);
router.use('/tag', tagRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;