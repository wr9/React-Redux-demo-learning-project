export default {
  comparePropertiesForSort: function(first, second, isAscending) {
    if (first.toLowerCase && second.toLowerCase) {
      return isAscending
        ? first.toLowerCase() > second.toLowerCase()
        : first.toLowerCase() < second.toLowerCase();
    }
    return isAscending ? first > second : first < second;
  },
};