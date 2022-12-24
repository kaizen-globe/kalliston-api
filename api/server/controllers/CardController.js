const Util = require('../utils/Utils');
const bcrypt = require('bcrypt');
const database = require('../src/models');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'crtvecode@gmail.com',
    pass: 'sbyvkjdckqtosuhm'
  }
});

const util = new Util();

const getCardDetails = async (req, res) => {
  try {
    const id = req.coachId;

    const card = await database.CardDetail.findOne({ where: { coach_id: id } });
    console.log("card details", card)
    return res.status(200).send({
      card: card,
      status: 200
    });
  } catch (error) {
    return res.status(401).send({
      message: error,
      status: 401
    });
  }
}

const addCard = async (req, res) => {
  const { card_number, card_holder_name, expiry_date, cvv, billing_address1, billing_address2, city, country } = req.body;
  try {
    const id  = req.coachId;
    const card = await database.CardDetail.findOne({ where: { coach_id: id } });
    console.log("card", card);

    if (card) {
      console.log("update")
      const data = {
        card_number, card_holder_name, expiry_date, cvv, billing_address1, billing_address2, city, country, coach_id: id
      }
      const update_profile = await database.CardDetail.update(data, { where: { coach_id: id } });
      if (update_profile) {
        return res.status(200).send({
          message: 'Card updated successfully',
          status: 200
        });
      } else {
        return res.status(401).send({
          message: 'Something went wrong, please try again later',
          status: 401
        });
      }
    } else {
      console.log("create")
      const data = {
        card_number, card_holder_name, expiry_date, cvv, billing_address1, billing_address2, city, country, coach_id: id
      }
      const createcard = await database.CardDetail.create(data);
      console.log("after update");

      if (createcard) {
        return res.status(200).send({
          message: 'Card added successfully',
          status: 200
        });
      } else {
        return res.status(401).send({
          message: 'Something went wrong, please try again later',
          status: 401
        });
      }
    }
  } catch (error) {
    return res.status(401).send({
      message: error,
      status: 401
    });
  }
}

module.exports = { getCardDetails, addCard };
