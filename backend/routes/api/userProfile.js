const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User,Booking, Listing } = require("../../db/models")

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



module.exports = router;