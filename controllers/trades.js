const Trade = require('../models/trades');

module.exports.createTrade = async (req, res) => {
  try {
    const trade = await Trade.create(req.body);
    res.json(trade);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports.getTrade = async (req, res) => {
  try {
    const trades = await Trade.findAll();
    res.json(trades);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports.getSpecificTrade = async (req, res) => {
  try {
    const trade = await Trade.findByPk(req.params.id);
    if (trade) {
      res.json(trade);
    } else {
      res.status(404).send('Trade not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports.updateSpecificTrade = async (req, res) => {
  try {
    const [numUpdated, updatedTrade] = await Trade.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (numUpdated) {
      res.json(updatedTrade[0]);
    } else {
      res.status(404).send('Trade not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports.deleteSpecificTrade = async (req, res) => {
  try {
    const numDeleted = await Trade.destroy({
      where: { id: req.params.id },
    });
    if (numDeleted) {
      res.sendStatus(204);
    } else {
      res.status(404).send('Trade not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}