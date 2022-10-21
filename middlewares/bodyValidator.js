const { body, validationResult } = require("express-validator");

const registerRules = () => [
  body("firstName", "firstName is required").notEmpty().isLength({max:20}),
  body("lastName", "lastName is required").notEmpty().isLength({max:20}),
  body("region", "region is required").notEmpty().isLength({max:20}),
  body("email", "email is not valid").isEmail(),
  body("password", "password must contains 6 characters").isLength({ min: 6, max: 20 }),
];

const loginRules=()=>[
  body("email", "email is not valid").isEmail(),
  body("password", "password must contains 6 characters").isLength({ min: 6, max: 20 }),
]

const validator = (req,res,next)=>{
  const errors = validationResult(req)
  if(errors.notEmpty){
    return res.status(400).json(errors.array())
  } 
  else next()
}
module.exports={
  validator,
  loginRules,
  registerRules
}