const Trade = require('../models/trades');

module.exports.createTrade = async (req, res) => {
  try {
    const trade = await Trade.create(req.body);
    res.status(201).json(trade); // Set the status code to 201
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports.getTrade = async (req, res) => {
try {
    let trades = await Trade.findAll();
    
    if (req.query.type) {
      trades = trades.filter(trade => trade.type === req.query.type);
    }
    
    if (req.query.user_id) {
      trades = trades.filter(trade => trade.user_id === Number(req.query.user_id));
    }
    
    trades = trades.sort((a, b) => a.id - b.id);
    
    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ error: "Unable to retrieve trades" });
  }
};


// module.exports.getSpecificTrade = async (req, res) => {
//   try {
//     const trade = await Trade.findByPk(req.params.id);
//     if (trade) {
//       res.json(trade);
//     } else {
//       res.status(404).send('Trade not found'); // Set the status code to 400
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };


// module.exports.updateSpecificTrade = async (req, res) => {
//   try {
//     const [numUpdated, updatedTrade] = await Trade.update(req.body, {
//       where: { id: req.params.id },
//       returning: true,
//     });
//     if (numUpdated) {
//       res.json(updatedTrade[0]);
//     } else {
//       res.status(405).send('Trade not found'); // Set the status code to 405
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };


// module.exports.deleteSpecificTrade = async (req, res) => {
//   try {
//     const numDeleted = await Trade.destroy({
//       where: { id: req.params.id },
//     });
//     if (numDeleted) {
//       res.sendStatus(405);
//     } else {
//       res.status(400).send('Trade not found'); // Set the status code to 400
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

module.exports.updateSpecificTrade = async (req, res) => {
  try {
    res.status(405).send('Method Not Allowed'); // Set the status code to 405
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.deleteSpecificTrade = async (req, res) => {
  try {
    res.status(405).send('Method Not Allowed'); // Set the status code to 405
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.getSpecificTrade = async (req, res) => {
  try {
    const trade = await Trade.findByPk(req.params.id);
    if (trade) {
      res.json(trade);
    } else {
      res.status(404).send('ID not found'); // Set the status code to 404
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
