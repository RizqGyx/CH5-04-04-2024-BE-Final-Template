const ApiError = require("../utils/apiError");

const checkOwnership = (req, res, next) => {
  if (req.user.shopId != req.params.id)
    return next(new ApiError("You are not part of this store", 401));

  next();
};

module.exports = checkOwnership;
