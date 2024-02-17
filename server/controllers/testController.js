exports.test = async (req, res) => {
  try {
    res.status(200).json({ message: 'Test route works' });
  }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}