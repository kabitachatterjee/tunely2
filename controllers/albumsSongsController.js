var db = require('../models');

function create(req, res) {
  // create an album based on request body and send it back as JSON
  console.log(req.params);
  console.log('body', req.body);
  //var newSong = {}
var id = req.params.album_id;
db.Album.findById(id, function(err, allAlbums) {
  console.log ("db's albums are ", allAlbums);
  allAlbums.songs.push(req.body);
  allAlbums.save();
  res.json(allAlbums);
});
  //res.json({});

  // split at comma and remove and trailing space
  // db.Album.find({}, function(err, allAlbums) {
  //   console.log ("db's albums are ", allAlbums);
  //   res.json(allAlbums);
  // });
  //
  // db.Album.create(req.body, function(err, album) {
  //   if (err) { console.log('error', err); }
  //   console.log(album);
  //   res.json(album);
  // });
}

module.exports = {
  // index: index,
  create: create
  // show: show,
  // destroy: destroy,
  // update: update
};
