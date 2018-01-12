define(function(require){
  var API = require('API');

  getDayInfo = function(){
    return $.get(API.dayInfo);
  }

  getTypeInfo = function() {
    return $.get(API.typeInfo);
  }

  return {
    getDayInfo: getDayInfo,
    getTypeInfo: getTypeInfo
  }
})
