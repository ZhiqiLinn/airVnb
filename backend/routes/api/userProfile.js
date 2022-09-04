const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User,Booking, Listing, Review } = require("../../db/models")

const router = express.Router();


//-----------------------------------------------GET TO BOOKINGS PAGE---------------------------------------------
router.get('/:id(\\d+)/bookings', asyncHandler(async (_req, res) => {
    const userId = parseInt(_req.params.id, 10);
    const booking = await Booking.findAll({
        where: {userId: userId},
        include: Listing,
        order:[['createdAt', 'DESC']]
    })
    return res.json(booking);
  }));

//-----------------------------------------------GET TO LISTINGS PAGE---------------------------------------------
router.get('/:id(\\d+)/listings', asyncHandler(async (_req, res) => {
  const userId = parseInt(_req.params.id, 10);
  const listing = await Listing.findAll({
      where: {userId: userId},
      order:[['createdAt', 'ASC']]
  })
  return res.json(listing);
}));

//-----------------------------------------------GET TO LISTINGS PAGE---------------------------------------------
router.get('/:id(\\d+)/reviews', asyncHandler(async (_req, res) => {
  const userId = parseInt(_req.params.id, 10);
  const review = await Review.findAll({
      where: {userId: userId},
      order:[['createdAt', 'DESC']]
  })
  return res.json(review);
}));




module.exports = router;