const { MyNotes } = require("../../db");

const updateMyNotesController = async (id, title, description) => {
  const [updated] = await MyNotes.update({ title, description }, { where: { id } });
  if (updated) {
    const updatedNote = await myNotes.findByPk(id);
    return updatedNote;
  }
  return null;
};

module.exports = updateMyNotesController;