import User from "../models/User.js";

export const create = async (req, res) => {
  
 const { name, number } = req.body;
  
  if (!name || !number) {
    return res.json("Fields cannot be empty");
  }
  const newUserObj = new User({
    name,
    number,
  });
  const createdUser = await newUserObj.save();
  return res.status(201).json(createdUser);
};

export const findAll = async (req, res) => {
  const foundAll = await User.find();
  return res.json(foundAll);
};

export const findOne = async(req,res)=>{
    const foundUser =  await User.findById(req.params.id)
    if(foundUser){
        return res.json(foundUser)
    }
    res.status(404).json({ message: "No user found"})
}

export const update = async(req, res)=>{
    const {name, number} = req.body
    const newPersonObj = { name, number}
    const updateUser = await User.findByIdAndUpdate(req.params.id, newPersonObj, {new:true})
    return res.json(updateUser)
}

export const remove = async(req, res)=>{
    const removeUser = await User.findByIdAndDelete(req.params.id)
    return res.status(201).json({ message: "successfully removed from database"})
}