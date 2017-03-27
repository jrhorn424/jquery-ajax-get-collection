'use strict';

const config = require('../config');

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET',
  });
};

module.exports = {
  index,
};
