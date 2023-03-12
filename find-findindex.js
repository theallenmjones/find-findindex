function findUserByUsername(arr, username) {
    return arr.find(function(obj) {
      return obj.username === username;
    });
  }


  function removeUser(arr, username) {
    const index = arr.findIndex(function(obj) {
      return obj.username === username;
    });
  
    // If the index is found, remove the object from the array and return it
    if (index !== -1) {
      return arr.splice(index, 1)[0];
    }
  
    // Otherwise, return undefined
    return undefined;
  }