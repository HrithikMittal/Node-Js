exports.createPostValidator = (req, res, next) => {
  req.check("title", "Write a title").notEmpty();
  req.check("title", "Title must be between 4 to 150 characters").isLength({
    min: 4,
    max: 150
  });

  req.check("body", "Write a body").notEmpty();
  req.check("body", "body must be between 5 to 2000 characters").isLength({
    min: 5,
    max: 2000
  });

  // Check for erros
  const errors = req.validationErrors();

  // If error show the first one as they happen
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  // proceed to next middleware
  next();
};
