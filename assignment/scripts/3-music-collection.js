console.log('***** Music Collection *****')
/*- Create a variable `collection` that starts as an empty array.

- Add a function named `addToCollection`. This function should:
  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
  - Create a new object having the above properties
  - Add the new object to the end of the `collection` array
  - Return the newly created object

- Test the `addToCollection` function:
  - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  - Console.log each album as added using the returned value.
  - After all are added, console.log the `collection` array.
*/
let collection = [];
let record;
function addToCollection(title, artist, yearPublished){

record = {
  title,
  artist,
  yearPublished
};//end new object
    collection.push(record);
    console.log(collection);

return record;
  }//end add to collection function
console.log(addToCollection("Revolver", "The Beatles", "1966"));

console.log(addToCollection("test", "Testing", "1990"));

console.log(collection);
