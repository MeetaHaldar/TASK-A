const Model = require("../Model/model");
function paginatedResults() {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.size);
    const skipIndex = (page - 1) * limit;
    const results = {};
console.log(page);
    try {
      results.results = await Model.find()
        .sort({ _id: 1 })
        .limit(limit)
        .skip(skipIndex)
        .exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}

module.exports = paginatedResults;
