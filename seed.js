// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var albumList =[];
albumList.push({
              artistName: 'Nine Inch Nails',
              name: 'The Downward Spiral',
              releaseDate: '1994, March 8',
              genres: [ 'industrial', 'industrial metal' ]
            });
albumList.push({
              artistName: 'Metallica',
              name: 'Metallica',
              releaseDate: '1991, August 12',
              genres: [ 'heavy metal' ]
            });
albumList.push({
              artistName: 'The Prodigy',
              name: 'Music for the Jilted Generation',
              releaseDate: '1994, July 4',
              genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
            });
albumList.push({
              artistName: 'Johnny Cash',
              name: 'Unchained',
              releaseDate: '1996, November 5',
              genres: [ 'country', 'rock' ]
            });

var sampleSongs = [];

sampleSongs.push({ name: 'Swamped',
                   trackNumber: 1
});
sampleSongs.push({ name: "Heaven's a Lie",
                   trackNumber: 2
});
sampleSongs.push({ name: 'Daylight Dancer',
                   trackNumber: 3
});
sampleSongs.push({ name: 'Humane',
                   trackNumber: 4
});
sampleSongs.push({ name: 'Self Deception',
                   trackNumber: 5
});
sampleSongs.push({ name: 'Aeon',
                   trackNumber: 6
});
sampleSongs.push({ name: 'Tight Rope',
                   trackNumber: 7
});


  db.Album.remove({}, function(err, albumsugh){


    db.Album.create(albumList, function(err, albums){
      if (err) { return console.log('ERROR', err); }
      console.log("all albums:", albums);
      console.log("created", albums.length, "albums");
      let numFinished = 0;
      albums.forEach(function(element,index){
        
        sampleSongs.forEach(function(song,index){
          element.songs.push(song);

        })
        console.log("current album is ", element);
        console.log(element.songs);
        element.save(function (err, savedElement) {
          numFinished += 1;
          if (numFinished === albums.length) {
            process.exit();
          }
        });

      })
    });

  });
