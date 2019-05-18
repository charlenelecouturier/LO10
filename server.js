const express = require('express');
const Twitter = require('twit');
const app = express();


const client = new Twitter({
 consumer_key: 'yBj9dvWUP7Ea0Ny9zIetVhpVm',
 consumer_secret: 'DrYuD5LOxkazBrGGzn0wRdKfhp108tXg1cjwcf3Lxp8KsLEHuI',
 access_token: '1425546774-9zB4wh0l2206mp4kqJz0FwxYqo8BmoD1HPGQjrK',
 access_token_secret: 'g0KX8YnWAmzIX5JWGjkFFFnP2W0NXtnb3PYlgjKH7m32D'
});

const cors = require('cors')
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));
app.get('/home_timeline', (req, res) => {
    const params = { q: 'plage', lang :'fr', geocode : '48.3,4.0833,10km', count: 10 };

    client
    .get(`search/tweets`, params)
  .catch(function (err) {
      console.log('caught error', err.stack)
    })
    .then(function (result) {
      // `result` is an Object with keys "data" and "resp".
      // `data` and `resp` are the same objects as the ones passed
      // to the callback.
      // See https://github.com/ttezel/twit#tgetpath-params-callback
      // for details.

      console.log('data', result.data.statuses);
      res.json(result.data.statuses);
    })


});

app.listen(3000, () => console.log('Server running'))
