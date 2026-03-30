exports.getProfile = (req, res) => {
  res.json({ userId: req.user.id });
};