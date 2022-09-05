const express = require('express');
const asyncHandler = require('express-async-handler');
const { ListingTag, Tag, Listing} = require('../../db/models');

// const { check, validationResult } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// //--------TAG VALIDATION
// const validateListing = [
//     check('tagType')
//       .exists({ checkFalsy: true })
//       .notEmpty()
//       .withMessage('Tag type cannot be empty.'),
//     handleValidationErrors
//   ];
//--------GET ALL TAGS
router.get('/', asyncHandler(async (_req, res) => {
    const tags = await Tag.findAll();
    return res.json(tags);
  })
);

//--------GET LISTINGS UNDER EACH TAG
router.get('/:id(\\d+)/listings', asyncHandler(async (_req, res) => {
    const listingTags = await ListingTag.findAll({
      include: Listing
    });
    return res.json(listingTags);
  })
);



module.exports = router;
