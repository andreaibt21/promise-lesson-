const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (failureValue) => {
  console.log(failureValue);
};

checkInventory(order) .then(handleSuccess,handleFailure );
