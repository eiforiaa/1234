const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const Place = require('../models/Place');
const upsert = require('../utils/upsert');
const { Iconv } = require('iconv');

const PlaceController = () => {
  const sync = async (req, res) => {
    const file = fs.readFileSync(path.join(__dirname, '../../db/data.json'));
    const buffer = Buffer.from(file, 'binary');
    const conv = Iconv('windows-1251', 'utf8');
    const body = conv.convert(buffer).toString();
    const apiData = JSON.parse(body);

    //  eslint-disable-next-line no-restricted-syntax
    apiData.forEach((entry) => {
      upsert({
        model: Place,
        values: {
          id: entry.global_id,
          name: entry.Name,
          address: entry.Address,
          eventDate: entry.EventDate,
          time: entry.TIME,
        },
        condition: { id: entry.global_id },
      });
    });

    return res.status(200).json(apiData);
  };

  const getAll = async (req, res) => {
    try {
      let places;

      if (req.query.name) {
        places = await Place.findAll({
          where: {
            name: {
              [Op.substring]: req.query.name,
            },
          },
        });
      } else {
        places = await Place.findAll();
      }

      return res.status(200).json({ places });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    sync,
    getAll,
  };
};

module.exports = PlaceController;
