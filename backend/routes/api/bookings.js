const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Booking } = require("../../db/models")

const router = express.Router();

//--------------------------------------VALIDATION FOR POSTING A BOOKING---------------------------------------
const validateBooking = [
    check('checkIn')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Select your check in date.'),
      check('checkOut')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Select your check out date.'),
    handleValidationErrors
  ];





//-----------------------------------------------GET TO BOOKINGS PAGE---------------------------------------------
router.get('/', asyncHandler(async (_req, res) => {
    const booking = await Booking.findAll({
        order:[['createdAt', 'ASC']]
    })
    return res.json(booking);
  }));

    // --FETCH TEST:
      //fetch('/api/bookings', {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "XSRF-TOKEN": `APdIoYf6-5GVtVCwNjx53Mu_BKL_QR5FP0u8`
      //   }
      // }).then(res => res.json()).then(data => console.log(data));






//------------------------------------------------POST A LISTING----------------------------------------------
router.post(
    '/',
    validateBooking,
    asyncHandler(async (req, res) => {
      const validationErrors = validationResult(req);
      const {
        userId,
        listingId,
        checkIn,
        checkOut
      } = req.body;
      const newBooking = await Booking.create({
        userId,
        listingId,
        checkIn,
        checkOut
      });

      if (!validationErrors.isEmpty()) {
          return res.status(422).json({ errors: validationErrors.array() });
      } else {
          await newBooking.save();
          res.json(newBooking);
      }
}));

    // --FETCH TEST:
        //     fetch('/api/bookings', {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //         "XSRF-TOKEN": ``
        //       },
        //       body: JSON.stringify({
        //         userId:"1",
        //         listingId:"1",
        //         checkIn:"2022-08-01",
        //         checkOut:"2022-08-03"
        //     })
        //     }).then(res => res.json()).then(data => console.log(data));



    module.exports = router;