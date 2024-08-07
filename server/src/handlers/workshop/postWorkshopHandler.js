const postWorkshopController = require("../../controllers/workshop/postWorkshopController")

const postWorkshopHandler = async (req, res) => {
  const {
    titleOne,
    imageOne,
    descriptionOne,
    titleTwo,
    imageTwo,
    descriptionTwo,
  } = req.body;

  try {
    const newResponse = await postWorkshopController(
      titleOne,
      imageOne,
      descriptionOne,
      titleTwo,
      imageTwo,
      descriptionTwo
    );

    if (newResponse.success) {
      res.status(200).json(newResponse);
    } else {
      res.status(400).json({ error: newResponse.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports= postWorkshopHandler