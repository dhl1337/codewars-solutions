module.exports = {
  findSmallestInt(args = []) {
    return Math.min(...args);
  },

  longest(strA, strB) {
    const distLongest = strA.concat(strB);

    return distLongest
      .split('')
      .sort()
      .filter((item, post, self) => {
        return self.indexOf(item) == post;
      })
      .join('');

    // es6, best practiceish
    // const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
  }
};
