
const { Character, Occupation, Op } = require('../db.js');

let getCharsQy = async(data)=>{

  let charsDB = await Character.findAll({
                  // logging: console.log,
                  where: { name: { [Op.iLike]:  `%${data}%` } },   // [Op.substring]: data
                  include:  Occupation,
                }).then( response=> response)
                  .catch( e=> console.log('Falló en charsDBq: ',e.message) );
  return charsDB;
};

module.exports = { getCharsQy };
