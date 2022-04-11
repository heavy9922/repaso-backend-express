/**
 * obtener registros
 * @param {*} req
 * @param {*} res
 */
const getItems = (req, res) => {
  const data = ["hola", "mundo"]
  res.send({ data })
}
/**
 * obtenr un registro
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {}
/**
 * crear resgistro
 * @param {*} req
 * @param {*} res
 */
const createItem = (req, res) => {}
/**
 * actualizar resgistro
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {}
/**
 * eliminar registo resgistro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
