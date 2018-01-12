define(function(require){
  var utils = require('utils');

  getDayInfo = function(){
    return $.get(utils.dayInfo);
  }

  getTypeInfo = function() {
    return $.get(utils.typeInfo);
  }

  return {
    getDayInfo: getDayInfo,
    getTypeInfo: getTypeInfo
  }
})
