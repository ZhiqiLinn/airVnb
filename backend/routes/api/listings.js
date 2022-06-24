const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Listing } = require("../../db/models")

const router = express.Router();

//-------------------VALIDATION FOR POSTING A LISTING----------------------
const validateListing = [
    check('name')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Name cannot be empty.'),
    check('about')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a description.'),
    check('city')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a city.'),
    check('state')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a state.'),
    check('price')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a price.'), 
    check('serviceFee')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please include your serviceFee.'),
      check('img1')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide minimum of one image.'),
    handleValidationErrors
  ];

//-------------------GET TO LISTINGS PAGE--------------------------
router.get('/', asyncHandler(async (_req, res) => {
    const listing = await Listing.findAll({
        order:[['createdAt', 'ASC']]
    })
    return res.json(listing);
  }));


  //-------------------POST A LISTING----------------------------------
router.post(
    '/',
    validateListing,
    asyncHandler(async (req, res) => {
      const validationErrors = validationResult(req);
      const {
        userId,
        name,
        about,
        city,
        state,
        price,
        serviceFee,
        img1,
        img2,
        img3
      } = req.body;
      const newListing = await Listing.create({
        userId,
        name,
        about,
        city,
        state,
        price,
        serviceFee,
        img1,
        img2,
        img3
      });

      if (!validationErrors.isEmpty()) {
          return res.status(422).json({ errors: validationErrors.array() });
      } else {
          await newListing.save();
          res.json(newListing);
      }
}));

// --FETCH TEST:
//   fetch('/api/listing', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": ``
//     },
//     body: JSON.stringify({
//         userId:"2",
//         name:"newListing",
//         about:"newListing",
//         city:"newListing",
//         state:"newListing",
//         price:"100",
//         serviceFee:"25",
//         img1:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-50634369/original/ddbbcb9a-0b44-4677-a194-f032d7bbb0d6.jpeg?im_w=1200",
//         img2:null,
//         img3:null,
//   })
//   }).then(res => res.json()).then(data => console.log(data));

module.exports = router;