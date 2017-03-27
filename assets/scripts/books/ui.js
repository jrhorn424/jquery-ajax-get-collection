'use strict';

// TODO show the data in an attractive way on the "page"
// using some jQuery methods
const onSuccess = function (data) {
  if (data.books) {
    console.table(data.books); // only in Chrome
    // console.log(data.books);
  }
};

// TODO show a pleasant error message to the user when there
// is an error
const onError = function (response) {
  console.error(response);
};

module.exports = {
  onSuccess,
  onError,
};
