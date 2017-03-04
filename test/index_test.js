const expect = require('chai').expect;
const index = require('../src/index');

describe('Codewars Solutions', () => {

  it('return the smallest integer in the array', () => {
    expect(index.findSmallestInt([1, 2, 3])).to.equal(1);
    expect(index.findSmallestInt([34, -345, -1, 100])).to.equal(-345)
  });

  it('return new sorted string, the longest possible, containing distinct letters.', () => {
    expect(index.longest("aretheyhere", "yestheyarehere")).to.equal("aehrsty");
    expect(index.longest("loopingisfunbutdangerous", "lessdangerousthancoding")).to.equal("abcdefghilnoprstu");
    expect(index.longest("inmanylanguages", "theresapairoffunctions")).to.equal("acefghilmnoprstuy");
  })

});