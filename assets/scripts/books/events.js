'use strict';

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const api = require('./api');
const ui = require('./ui');

const onGetBooks = function (event) {
  event.preventDefault();

  api.index()
  .then(ui.onSuccess)
  .catch(ui.onError)
  ;
};

module.exports = {
  onGetBooks,
};
