const ApiError = require("../utils/apiError");
const { Shop } = require("../models");

const checkId = async (req, res, next) => {
  try {
    const shop = await Shop.findByPk(req.params.id);

    if (!shop) {
      return next(new ApiError(`Shop Not Found`, 404));
    }

    next();
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

module.exports = checkId;
