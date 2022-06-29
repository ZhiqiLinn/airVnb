const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
<<<<<<< Updated upstream
const { User,Booking, Listing } = require("../../db/models")
=======
const { User,Booking } = require("../../db/models")
>>>>>>> Stashed changes

const router = express.Router();


//-----------------------------------------------GET TO BOOKINGS PAGE---------------------------------------------
router.get('/:id(\\d+)/bookings', asyncHandler(async (_req, res) => {
    const userId = parseInt(_req.params.id, 10);
    const booking = await Booking.findAll({
        where: {userId: userId},
        include: Listing,
        order:[['createdAt', 'ASC']]
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



module.exports = router;