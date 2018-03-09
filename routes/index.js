var express = require('express');
var router = express.Router();
var config = require('../config');

// do some checking here => check the default user profile
// ternary statement => MDN ternary

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Welcome to Video App',
    message : "Video App",
  });
});


// movie-1 page
router.get('/movie-1', (req, res) => {
  console.log('link with the movie image');
  res.render('movie-1', {
    title: 'MARTAIN',
    p : "When astronauts blast off from the planet Mars, they leave behind Mark Watney (Matt Damon), presumed dead after a fierce storm. With only a meager amount of supplies, the stranded visitor must utilize his wits and spirit to find a way to survive on the hostile planet. Meanwhile, back on Earth, members of NASA and a team of international scientists work tirelessly to bring him home, while his crew mates hatch their own plan for a daring rescue mission.",
  });
});



// movie-2 page
router.get('/movie-2', (req, res) => {
  console.log('link with the movie image');
  res.render('movie-2', {
    title: 'GRAVITY',
    p : "Dr. Ryan Stone (Sandra Bullock) is a medical engineer on her first shuttle mission. Her commander is veteran astronaut Matt Kowalsky (George Clooney), helming his last flight before retirement. Then, during a routine space walk by the pair, disaster strikes: The shuttle is destroyed, leaving Ryan and Matt stranded in deep space with no link to Earth and no hope of rescue. As fear turns to panic, they realize that the only way home may be to venture further into space.",
  });
});

// movie-3 page
router.get('/movie-3', (req, res) => {
  console.log('link with the movie image');
  res.render('movie-3', {
    title: 'TITANIC',
    p : "RMS Titanic was a British passenger liner that sank in the North Atlantic Ocean in the early morning hours of 15 April 1912, after it collided with an iceberg during its maiden voyage from Southampton to New York City.",
  });
});
module.exports = router;
