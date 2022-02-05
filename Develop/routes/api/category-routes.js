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
    ],
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name']
      },
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  }).then((taco) => {
    console.log(taco);
    res.json(taco)
  })
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
    ],
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name'], //PROBABLY DELETE THIS AFTER UPDATING INDEX.JS
      },
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No Category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  // create a new category
  console.log('======================')
  Category.create({
    category_name: req.body.category_name //is this creating a new category in the Category table?
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  console.log('======================')
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(dbCategoryData);
  })
  .cetch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  console.log('======================')
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with that id!'})
      return;
    }
    res.json(dbCategoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;