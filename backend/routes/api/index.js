const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listings.js')
const bookingsRouter = require('./bookings.js')
const userProfileRouter = require('./userProfile.js')
const reviewsRouter = require('./reviews.js')
const tagsRouter = require('./listingTag.js')
router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/listings', listingsRouter);
router.use('/reviews', reviewsRouter);

router.use('/bookings', bookingsRouter);
router.use('/users', userProfileRouter);
router.use('/tags', tagsRouter)

  // GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
}));


// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);


// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);

module.exports = router;