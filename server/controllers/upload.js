const videoAsset = require('../models/videoAsset');

exports.Upload = async (req, res) => {
  try {
   const video = req.file;
   const options = req.body;
    const newVideo = new videoAsset({video, options});
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}