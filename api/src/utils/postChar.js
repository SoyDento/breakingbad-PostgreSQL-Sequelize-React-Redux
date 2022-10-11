const { Character, Occupation } = require('../db.js');

let postChar = async(obj)=>{

  let {name, nickname, birthday, img, status, occupations } = obj;
  // capitalize
  if (name.includes(' ')) {
    name = name.split(' ').map(p=> p.slice(0,1).toUpperCase().concat(p.slice(1).toLowerCase())).join(' ')
  } else { name = name[0].toUpperCase().concat(name.slice(1).toLowerCase()) };
  // corrigiendo formato de fecha
  birthday = birthday.replace('/','-').replace('.','-').split('-');
  if (birthday[0].length === 1) birthday[0] = '0'.concat(birthday[0]);
  if (birthday[1].length === 1) birthday[1] = '0'+birthday[1];
  birthday = birthday.join('-');

  // corrigiendo posible errores de nickname
  nickname.replace(' ','');

  let char = await Character.findOrCreate({
    where:
    {name: name, nickname: nickname, birthday: birthday, img: img, status: status}
              });
  let occ = await occupations.map(async(o)=> await Occupation.findOrCreate({
                where: {name: o},
              })
            );
  let mychar = await Character.findOne({ where: { name: name } });  // console.log(mychar);

  let allOcc = await Occupation.findAll(); //  console.log(newsOcc);

  let newsOcc = allOcc.filter(o=> occupations.includes(o.name));

  let inc = await newsOcc.forEach( async(o)=> await mychar.addOccupation(o.id) );  // console.log(occ);

  return mychar;
};

module.exports = postChar;
