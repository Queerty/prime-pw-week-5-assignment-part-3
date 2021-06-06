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

function addToCollection(title, artist, yearPublished){
let record = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
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

addToCollection("Mother of My Children","Black Belt Eagle Scout", "2018");



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
    return true
    };//end of showCollection function

//honestly not entirely sure what to return from that function since
//it is console logging each title/artist/year

showCollection(collection);

//- Add a function named `findByArtist`

//this one returns the matching artist but not the whole object...
/*
function findByArtist(_artist){
  let results = [];
  for (let x of collection){
    if(_artist.toLowerCase()== x.artist.toLowerCase()) {
      results.push(_artist)
      return results;
    }//end if conditional
  }//end for loop
}//end find function*/

//This one returns the object with the matching artist...
//have to test w/ multiple artists now...
//didn't work only returned first result..
//ok fixed it by moving the return to after the for loop
function findByArtist(_artist){
  let results = [];
  for (let x of collection){
    if(_artist.toLowerCase()== x.artist.toLowerCase()) {
      results.push(x);
    }//end if conditional
  }//end for loop
  return results;
}//end find function

console.log(`Expect to see two albums returned:`);
console.log(findByArtist("Phoebe Bridgers"));


/* this first attempt didn't work... returned "1" -> index? quantity? tbd
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


console.log(`Expect to see an empty array, artist not in collection:`);
console.log(findByArtist("Goo Goo Dolls")); //returns an empty array
console.log(`Expect to see an empty array, artist not exact match:`);
console.log(findByArtist("Black Belt"));//no match returns empty array

console.log(`Expect to see same results for the next two searches:`);
console.log(findByArtist("Black Belt Eagle Scout"));//returns 2 albums by artist
console.log(findByArtist("Black belt eagle scout")); //FIXED with toLowerCase //returns empty array
//needs exact match to return array... not so practical...

//Stretch

let searchArtist;
let searchYear;
let searchCriteria = {
  artist: searchArtist,
  yearPublished: searchYear,
};
function search({artist: searchArtist, yearPublished: searchYear}){
  let searchResult = [];
  for (let x of collection){

    if(searchArtist.toLowerCase() == x.artist.toLowerCase() && searchYear == x.yearPublished) {
      searchResult.push(x);
}//end search if conditional
}//end for loop
return searchResult;
}

console.log(`Expect to see Black Belt Eagle Scouts album from 2019:`);
console.log(search({artist: "Black Belt Eagle Scout", yearPublished: 2019}));
//testing a known artist and year match
console.log(`Expect to see an empty array because artist not found:`);
console.log(search({artist: "Test", yearPublished: 1990}));//should return empty

console.log(`Expect to see The Thermals album from 2006:`);

console.log(search({artist: "the thermals", yearPublished: 2006}));
//should still return object
