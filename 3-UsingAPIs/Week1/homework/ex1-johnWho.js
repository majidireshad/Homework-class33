'use strict';
/*------------------------------------------------------------------------------
Rewrite this function, but replace the callback syntax with the Promise syntax:
- Have the `getAnonName` function return a `new Promise`.
- If the Promise `resolves`, pass the full name as an argument to resolve with.
- If the Promise `rejects`, pass an error as the argument to reject with: "You 
  didn't pass in a first name!"
------------------------------------------------------------------------------*/

const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    const fullName = `${firstName} Doe`;
    if (!firstName) {
      const message = new Error("You didn't pass in a first name!");
      reject(message);
    } else {
      resolve(fullName);
    }
  });
};
getAnonName('John')
  .then((fullNameSuccess) => {
    console.log(fullNameSuccess);
  })
  .catch((error) => {
    console.log(error.message);
  });

// ! Do not change or remove the code below
module.exports = getAnonName;
