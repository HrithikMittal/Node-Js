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

exports.userSignupValidator = (req, res, next) => {
  // name is not null and between 4-10 characters
  req.check("name", "Name is required").notEmpty();
  req
    .check("name", "Name length should be between 4 to 10 characters")
    .isLength({
      min: 4,
      max: 10
    });

  //email is not null, valid and normalized
  req.check("email", "Email is required").notEmpty();
  req
    .check("email", "Email length should be between 3 to 32 characters")
    .isLength({
      min: 4,
      max: 32
    });
  req
    .check("email", "Email should be proper")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @");

  //check for password
  req.check("password", "Password is required").notEmpty();
  req
    .check("password", "Password should be minimum 6 length")
    .isLength({
      min: 6
    })
    .matches(/\d/)
    .withMessage("Password Must contain a number");

  //check for errors
  const errors = req.validationErrors();

  // If error show the first one as they happen
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  // proceed to next middleware
  next();
};
