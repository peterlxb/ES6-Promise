requirejs.config({
  baseUrl:"/",
  paths:{
    jquery:'./libs/jquery-3.2.0',
    API:'./libs/utils',
    request:'./libs/request',
    calendar:'./components/calendar'
  }
})

define(function(require){
  var $ = require('jquery');

  require('calendar');

})
