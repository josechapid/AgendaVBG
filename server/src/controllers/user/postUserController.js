const {User} = require ("../../db")

const postUserController = async({
  name,
  user,
  email,
  address,
  phone,
  password,
  dateOfBirth,
})=>{
    const newUser= await User.create({
        name,
        user,
        email,
        address,
        phone,
        password,
        dateOfBirth
    })
return newUser
};
module.exports = postUserController