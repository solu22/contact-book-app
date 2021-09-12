import User from "../models/User.js";

/*
@route POST /api/v1/users
 @desc create new users in phonebook database
@access Public

*/
export const create = async (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    res.json("Fields cannot be empty");
  }
  const newUserObj = new User({
    name,
    number,
  });
  const createdUser = await newUserObj.save();
  res.status(201).json(createdUser);
};

/*

@route GET /api/v1/users
 @desc  get all userlist from phonebook database
 @access Public

 */

export const findAll = async (req, res) => {
  const foundAll = await User.find();
  res.json(foundAll);
};

/*
 
 @route GET /api/v1/users/:id
 @desc get single user from phonebook database
 @access Public
 
 */

export const findOne = async (req, res, next) => {
  try {
    const foundUser = await User.findById(req.params.id);
    if (foundUser) {
      return res.json(foundUser);
    }
  } catch (error) {
    next(error);
  }
};

/*
@route PUT /api/v1/users/:id
@desc update user based on request id and returns updated user
@access Public

*/
export const update = async (req, res,next) => {
  try{
  const { name, number } = req.body;
  const newPersonObj = { name, number };
  const updateUser = await User.findByIdAndUpdate(req.params.id, newPersonObj, {
    new: true,
  });
  res.json(updateUser);

} catch(error){
  next(error)
}
};

/*
@route DELETE /api/v1/users/:id
@desc deletes users based on request id
@access Public

*/

export const remove = async (req, res, next) => {
  try{
  await User.findByIdAndDelete(req.params.id);
  res.status(201).json({ message: "successfully removed from database" });
  }catch(error){
    next(error)
  }
};
