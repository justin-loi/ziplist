const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

function zipList(arr1, arr2) {
  const alternateArray = [];
  for (let i = 0; i < arr1.length; i++) {
    alternateArray.push(arr1[i]);
    alternateArray.push(arr2[i]);
  }
  return alternateArray;
}

console.log(zipList(array1, array2));

function zipListTheSimpleWay(arr1, arr2) {
  const zip = _.flatten(_.zip(arr1, arr2));
  return zip;
}

console.log(zipListTheSimpleWay(array1, array2));
