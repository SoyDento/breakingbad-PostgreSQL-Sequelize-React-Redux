const { Character, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Character model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    // beforeEach(() => Character.sync({ force: false }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Character.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', (done) => {
        Character.create({
                name: "Harry",
                nickname: "Opa",
                birthday: "20-11-1997",
                img: "https://media.glamour.es/photos/616f95a2bcde302b0cd8282c/master/w_1600%2Cc_limit/618905.jpg",
                status: "Alive"
            })
            .then((res)=> expect(res).to.have.length(1) )            
            .catch(() => done())
      });
    });
  });
});
