const {
  selectItems,
  selectItemById,
  updateItemById,
  delItemById,
  insertItem,
} = require("../models/items");

exports.getItems = async (req, res) => {
  const {
    query: {
      status,
      buyer,
      seller_username,
      category,
      p,
      limit,
      order,
      sortBy,
    },
  } = req;
  const { items, itemCount } = await selectItems(
    status,
    buyer,
    seller_username,
    category,
    p,
    limit,
    order,
    sortBy
  );
  res.send({ items, itemCount });
};

exports.postItem = async (req, res) => {
  const { body } = req;
  const item = await insertItem(body);
  res.status(201).send({ item });
};

exports.getItemById = async (req, res) => {
  const {
    params: { item_id },
  } = req;
  const item = await selectItemById(item_id);
  res.send({ item });
};

exports.patchItemById = async (req, res) => {
  const {
    body: { status, buyer },
    params: { item_id },
  } = req;
  const item = await updateItemById(status, buyer, item_id);
  res.send({ item });
};

exports.deleteItemById = async (req, res) => {
  const {
    params: { item_id },
  } = req;
  await delItemById(item_id);
  res.sendStatus(204);
};
