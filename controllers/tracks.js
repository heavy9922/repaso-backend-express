const { tracksModel } = require("../models")

/**
 * obtener registros
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await tracksModel.find({})
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
const createItem = async (req, res) => {
  const {body} = req
  const data = await tracksModel.create(body)
  res.send(data)
}
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
