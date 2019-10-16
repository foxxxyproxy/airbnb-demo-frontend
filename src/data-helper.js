/**
 * @param {array} items = [{},{},{}]
 * @return {object} where key = id
 * @return {array} array of ids
 */
export function mapItemsToObjects(items) {
  const reducedItems = items.reduce(function(prevValue, currentValue) {
    return {
      ...prevValue,
      [currentValue.id]: currentValue
    };
  }, {});

  return {
    ...reducedItems, // copy reducedItems
    list: items.map(function(item) {
      return item.id; // return only id
    })
  };
}
