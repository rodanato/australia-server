const express = require('express');
const router  = express.Router();
const fs = require("fs");

// const Artist = require('./artist.model');


router.route('/artists')
  .post((req, res) => {
    res.statusCode = 200;
    res.json({message: 'post artists ' + req.body.mes});
    // Artist.create(req.body)
    //   .then(list => res.json({ message: 'Artist created!' }))
    //   .catch(err => res.send(err));
  })

  .get((req, res) => {
    fs.readFile(__dirname + "/../../../artists.json", 'utf8', (err, data) => {
      if (err) throw err;
      data = res.fn ? res.fn( JSON.parse(data), req.body) : JSON.parse(data);
      res.statusCode = 200;
      res.header('Content-Type', 'application/json');
      res.end( JSON.stringify(data));
    });
    // Artist.find()
    //   .then(artists => res.json(artists))
    //   .catch(err => res.send(err));
  });

//
// router.route('/artists/:artist_id')
//   .get((req, res) => {
//     Artist.findById(req.params.artist_id)
//       .then(artist => res.json(artist))
//       .catch(err => res.send(err));
//   })
//   .put((req, res) => {
//     Artist.findById(req.params.artist_id)
//       .then(artist => {
//         artist.name = req.body.name;
//
//         artist.save()
//           .then(() => res.json({message: 'Artist updated'}))
//           .catch(err => res.send(err));
//       })
//       .catch(err => res.send(err));
//   })
//   .delete((req, res) => {
//     Artist.remove({_id: req.params.artist_id})
//       .then(() => res.json({ message: 'Successfully deleted' }))
//       .catch(err => res.send(err));
//   });

module.exports = {
  router
};
