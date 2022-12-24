const express = require("express");
const database = require('../src/models');
//import { User } from "../src/models/user";

const checkCoachAlreadyExist = async (req, res, next) => {
  try {
    const email = await database.User.findOne({
      where: {
        email: req.body.email,
        user_type: "coach",
      },
    });
    //if email exist in the database respond with a status of 409
    if (email) {
      return res.json(409).send("coach email already taken");
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports =  { checkCoachAlreadyExist };
