const { Router } = require('express');
const axios = require('axios');
const { Character, Occupation } = require('../db.js');


async function getIDchar (id) {

  try {
    let char = await Character.findOne({
        // logging: console.log,
        where: { id },
        include: Occupation
      });
    return char;

  } catch (e) { console.log('falló el get a DB(/:id): ', e.message) }

};

module.exports = getIDchar;
