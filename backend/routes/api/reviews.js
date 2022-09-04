const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Review, Booking} = require("../../db/models")

const router = express.Router();

//--------------------------------------VALIDATION FOR POSTING A LISTING---------------------------------------
const validateListing = [
    check('title')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Title cannot be empty.'),
    check('content')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a content.'),
    check('rating')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a rating.'),
    handleValidationErrors
  ];





//-----------------------------------------------GET TO LISTINGS PAGE---------------------------------------------
router.get('/', asyncHandler(async (_req, res) => {
    const review = await Review.findAll({
        order:[['createdAt', 'DESC']]
    })
    return res.json(review);
  }));

    // --FETCH TEST:
      //fetch('/api/listings', {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "XSRF-TOKEN": `APdIoYf6-5GVtVCwNjx53Mu_BKL_QR5FP0u8`
      //   }
      // }).then(res => res.json()).then(data => console.log(data));





//------------------------------------------------GET A LISTING----------------------------------------------
router.get('/:id(\\d+)', asyncHandler(async function(req, res) {
  const review = await Review.findByPk(req.params.id);
  return res.json(review);
}));

//FETCH TEST
  // fetch('/api/business/4', {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "XSRF-TOKEN": `oRyFhSGl-iDVtRlNy16zLRIFqLoUC0gHzLzA`
  //   }
  // }).then(res => res.json()).then(data => console.log(data));

  
//------------------------------------------------POST A LISTING----------------------------------------------
router.post(
    '/',
    validateListing,
    asyncHandler(async (req, res) => {
      const validationErrors = validationResult(req);
      const {
        title,
        content,
        rating,
        userId,
        listingId
      } = req.body;
      const NewReview = await Review.create({
        title,
        content,
        rating,
        userId,
        listingId
      });

      if (!validationErrors.isEmpty()) {
          return res.status(422).json({ errors: validationErrors.array() });
      } else {
          await NewReview.save();
          res.json(NewReview);
      }
}));

    // --FETCH TEST:
      //   fetch('/api/listings', {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       "XSRF-TOKEN": ``
      //     },
      //     body: JSON.stringify({
      //         userId:"2",
      //         name:"EditnewListing",
      //         about:"NewReview",
      //         city:"NewReview",
      //         state:"NewReview",
      //         price:"100",
      //         serviceFee:"25",
      //         img1:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-50634369/original/ddbbcb9a-0b44-4677-a194-f032d7bbb0d6.jpeg?im_w=1200",
      //         img2:null,
      //         img3:null,
      //   })
      //   }).then(res => res.json()).then(data => console.log(data));





//---------------------------------------------------EDIT A LISTING---------------------------------------------------
router.put('/:id(\\d+)', validateListing, asyncHandler(async function(req, res) {
  const reviewId = parseInt(req.params.id, 10);
  let currReview = await Review.findByPk(reviewId);
  const validationErrors = validationResult(req);
  const {
    title,
    content,
    rating,
    userId,
    listingId} = req.body;
    

  if (validationErrors.isEmpty()) {
    await currReview.update({
        title,
        content,
        rating,
        userId,
        listingId})
    const NewReview = await Review.findByPk(reviewId);
    // console.log("!!!!!THIS IS NEW LISTING", NewReview)
  res.json(NewReview);
} else {
  res.status(422).json({ errors: validationErrors.array() });
}
}));

    // --FETCH TEST:
      //   fetch('/api/listings/1', {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //       "XSRF-TOKEN": ``
      //     },
      //     body: JSON.stringify({
      //         userId:"2",
      //         name:"NewReview",
      //         about:"NewReview",
      //         city:"NewReview",
      //         state:"NewReview",
      //         price:"100",
      //         serviceFee:"25",
      //         img1:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-50634369/original/ddbbcb9a-0b44-4677-a194-f032d7bbb0d6.jpeg?im_w=1200",
      //         img2:null,
      //         img3:null,
      //   })
      //   }).then(res => res.json()).then(data => console.log(data));




//----------------------------------------------DELETE A LISTING---------------------------------------------
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  const review = await Review.findByPk(req.params.id)
  if (review) {
      await review.destroy()
      res.json({ message: 'Success' })
  } else {
      res.json({ message: 'Fail' })
  }
}))

// FETCH TEST
  // fetch('/api/listings/6', {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "XSRF-TOKEN": `oRyFhSGl-iDVtRlNy16zLRIFqLoUC0gHzLzA`
  //   }
  // }).then(res => res.json()).then(data => console.log(data));



module.exports = router;