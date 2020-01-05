exports.myDateTime = function () {
require('x-date') ; 
  return new Date().format('yyyy-mm-dd HH:MM:ss');
};