const { getOccupations } = require('../utils/getOccupations.js');
const  getCharsDB  = require('../utils/getCharsDB.js');
const  postChar  = require('../utils/postChar.js');
const { getCharsQy } = require('../utils/getCharsQy.js');
const getIDchar = require('../utils/getIDchar');
const altChar = require('../utils/altChar');
const deleteChar = require('../utils/deleteChar.js');

const charactersGet = async(req, res, next)=>{
  try {
    let { data } = req.query; // console.log(data);
    if (!data) {
      let charsDB = await getCharsDB() || [];
      // console.log(allGames);
      return res.send(charsDB)  // petición probada !!!!!! --
    };
    let chs = await getCharsQy(data);
    res.send(chs)              // petición probada !!!!!! --
  } catch (e) { next(e) }
};

const charIDget = async(req, res, next)=>{
  try {
    let { id } = req.params; console.log(id);
    let c = await getIDchar(id) || {};    
    res.send(c)              // petición probada !!!!!! --
  } catch (e) { next(e) }
};

const charPost = async(req, res, next)=>{
  try {
    let c = await postChar(req.body) || {};
    res.send(c)   // petición probada !!!!!! --
  } catch (e) { next(e) }
};

const occupationsGet = async(req, res, next)=>{
  try {
    let o = await getOccupations() || [];
    res.send(o)            // petición probada !!!!!! --
  } catch (e) { next(e) }
};

const altAttribute = async (req, res, next)=>{
	try {
		let { attribute } = req.params;
	  let { idChar, value } = req.query;

		let myAlt = await altChar(idChar, attribute, value.toString()) || {};
		res.send(myAlt)            // petición probada !!!!!! --
	} catch (e) { next (e) }
};

const charIDremove = async (req, res, next)=>{
	try {
	  let { id } = req.query;
		let c = await deleteChar(id) || {};
		res.send(c)            // petición probada !!!!!! --
	} catch (e) { next (e) }
};

module.exports = {
  charactersGet,
  charIDget,
  charPost,
  occupationsGet,
  altAttribute,
  charIDremove
}
