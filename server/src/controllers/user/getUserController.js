const {User} = require("../../db")

const getUserController = async (id)=>{
    try {
        const response = await User.findOne({
            where: {id:id}
        })
        return response
    } catch (error) {
        throw error
    }
}
module.exports = getUserController