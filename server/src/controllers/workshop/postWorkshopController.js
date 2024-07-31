const {Workshops} = require("../../db")

const postWorkshopController = async (
  titleOne,
  imageOne,
  descriptionOne,
  titleTwo,
  imageTwo,
  descriptionTwo
) => {
  try {
    const response = await Workshops.create({
      titleOne,
      imageOne,
      descriptionOne,
      titleTwo,
      imageTwo,
      descriptionTwo,
    });
    if (response) {
      return { success: true, message: "Workshop creado con éxito", data: response };
    } else {
      throw new Error("No se pudo crear el workshop");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports= postWorkshopController