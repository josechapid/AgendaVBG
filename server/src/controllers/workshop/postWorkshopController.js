const {Workshops} = require("../../db")

const postWorkshopController = async (
 titleOne,
  imageOne,
  descriptionOne,
  titleTwo,
  imageTwo,
  descriptionTwo
) => {
    const response = await Workshops.create({
      titleOne,
      imageOne,
      descriptionOne,
      titleTwo,
      imageTwo,
      descriptionTwo,
    });
    if(response){
        return "workshop creado con exito"
    } else {
        return "no se pudo crear el workshop "
    }
};

module.exports= postWorkshopController