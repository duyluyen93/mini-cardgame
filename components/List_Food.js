var list = [
  { key: 0, anh: require('../image/food/apple.png'), default: require('../image/card.png') },
  { key: 1, anh: require('../image/food/banana.png'), default: require('../image/card.png') },
  { key: 2, anh: require('../image/food/cabbage.png'), default: require('../image/card.png') },
  // { key: 3, anh: require('../image/food/cake.png'), default: require('../image/card.png') },
  // { key: 4, anh: require('../image/food/chili.png'), default: require('../image/card.png') },
  // { key: 5, anh: require('../image/food/corn.png'), default: require('../image/card.png') },
  // { key: 6, anh: require('../image/food/egg.png'), default: require('../image/card.png') },
  // { key: 7, anh: require('../image/food/fish.png'), default: require('../image/card.png') },
  // { key: 8, anh: require('../image/food/meat.png'), default: require('../image/card.png') },
  // { key: 9, anh: require('../image/food/coke.png'), default: require('../image/card.png') },
  { key: 10, anh: require('../image/food/apple.png'), default: require('../image/card.png') },
  { key: 11, anh: require('../image/food/banana.png'), default: require('../image/card.png') },
  { key: 12, anh: require('../image/food/cabbage.png'), default: require('../image/card.png') },
  // { key: 13, anh: require('../image/food/cake.png'), default: require('../image/card.png') },
  // { key: 14, anh: require('../image/food/chili.png'), default: require('../image/card.png') },
  // { key: 15, anh: require('../image/food/corn.png'), default: require('../image/card.png') },
  // { key: 16, anh: require('../image/food/egg.png'), default: require('../image/card.png') },
  // { key: 17, anh: require('../image/food/fish.png'), default: require('../image/card.png') },
  // { key: 18, anh: require('../image/food/meat.png'), default: require('../image/card.png') },
  // { key: 19, anh: require('../image/food/coke.png'), default: require('../image/card.png') }
]
var dulieu = list.sort(
  function () {
    return 0.5 - Math.random();
  }
)

module.exports = dulieu
