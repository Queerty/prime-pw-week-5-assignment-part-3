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
let title;
let artist;
let yearPublished;
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

addToCollection("The Best of Luck Club","Alex Lahey", "2019");

console.log(addToCollection("The Body, The Blood, The Machine", "The Thermals", "2006"));

console.log(addToCollection("Punisher", "Phoebe Bridgers", "2020"));

addToCollection("Stranger in the Alps","Phoebe Bridgers", "2017");

addToCollection("Sour","Olivia Rodrigo", "2021");

addToCollection("Brat","Nnamdi", "2020");

addToCollection("At the Party With My Brown Friends","Black Belt Eagle Scout", "2019");




console.log(collection);

/*- Add a function named `showCollection`. This function should:
  - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  - Console.log the number of items in the array.
  - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
- Test the `showCollection` function. */
function showCollection(array){
  console.log(array.length);
for(album of array){
      console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }//end for loop
    };//end of showCollection function
showCollection(collection);

/*- Add a function named `findByArtist`. This function should:
  - Take in `artist` (a string) parameter
  - Create an array to hold any results, empty to start
  - Loop through the `collection` and add any objects with a matching artist to the array.
  - Return the array with the matching results. If no results are found, return an empty array.

- Test the `findByArtist` function.
Make sure to test with an artist you know is in the collection,
as well as an artist you know is not in your collection.
Check that for artists with multiple matches, all are found.
*/
//this one returns the matching artist...
function findByArtist(_artist){
  let results = [];
  for (x of collection){
    if(_artist== x.artist) {
      results.push(_artist)
      return results;
    }//end if conditional
  }//end for loop
}//end find function

//This one returns the object with the matching artist... have to test
//with multiple artists now... didn't work only returned first result..
//ok fixed it by moving the return results after the for loop
function findByArtist(_artist){
  let results = [];
  for (x of collection){
    if(_artist== x.artist) {
      results.push(x);
    }//end if conditional
  }//end for loop
  return results;
}//end find function
console.log(findByArtist("Phoebe Bridgers"));
/* this attempt didn't work... returned "1" -> index? quantity? tbd
function findByArtist(artist){
  artist = album.artist;
  let results = [];
  for(let x of collection){
    if(x.artist == artist){
      return results.push(artist);
    }//end if condition
  }//end for loop
}//end findByArtist function
console.log(findByArtist("Testing"));
*/
console.log(findByArtist("Goo Goo Dolls")); //returns an empty array
