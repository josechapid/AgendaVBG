const {User} = require ("../../db")

const postUserController = async({
  name,
  lastName,
  email,
  address,
  phone,
  password,
  dateOfBirth,
})=>{
    const newUser= await User.create({
        name,
        lastName,
        email,
        address,
        phone,
        password,
        dateOfBirth
    })
return newUser
};
module.exports = postUserController