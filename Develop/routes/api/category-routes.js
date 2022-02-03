const router = require('express').Router();
const { Category, Product } = require('../../models');
const sequelize = require('sequelize');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  console.log('======================')
  Category.findAll({
    attributes: [
      'id',
      'category_name',
      //[sequelize.literal('(SELECT * FROM Category')] //unsure how to reference products here JOIN
    ]
  }).then((taco) => {
    console.log(taco);
    res.json(taco)
  })
  //res.json('oooo not good')
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  console.log('======================')
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'category_name'
      //[sequelize.literal('(SELECT COUNT(*) FROM Product WHERE Category.id = Product.category_id)')] //i know this is wrong
    ],
    // include: [
    //   {
    //     model: Category,
    //     attributes: ['id', 'category_name'], //PROBABLY DELETE THIS AFTER UPDATING INDEX.JS
    //     include: {
    //       model: Product,
    //       attributes: ['product_name']
    //     }
    //   },
    //   {
    //     model: Product,
    //     attributes: ['product_name'] //trying to list out the products tied to this category?
    //   }
    // ]
  })
  .then(dbCategoryData => {
    console.table(dbCategoryData);
    res.json(dbCategoryData);
  })
  //res.json('mary broke it')
});

router.post('/', (req, res) => {
  // create a new category
  console.log('======================')
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  console.log('======================')
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  console.log('======================')
});

module.exports = router;
