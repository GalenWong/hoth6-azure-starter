const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();

// Setup express
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get env variables
const port = process.env.PORT || 3000;
const perPage = process.env.PAGE_SIZE || 10;
const defaultPassword = process.env.HACKERLOG_PASSWORD || 'P@ssw0rd!';

// global variable to store the posts
/**
 * posts is an array of post
 * post looks like this
 * {
 *    name: String,
 *    update: String,
 *    createdAt: timestamp (millesecond),
 * }
 * posts should be sorted according to createdAt
 */
let posts = [];

// Routes
app.get('/', (req, res) => {
  let page = Math.max(0, req.query.page);
  if (!page) page = 0;
  const wrongPassword = req.query.wrongPassword;

  const postToDisplay = posts.slice(perPage * page, perPage * page + perPage);
  const pages = posts.length / perPage;

  res.render('index', { title: 'HackerLog', updates: postToDisplay, wrongPassword, page, pages, moment});
});

// Posting update
app.method('/whatIsTheRoute', (req, res) => {
  const { body: { name, update, password } } = req;
  if (!name || !update) {
    // what happens if nothing is in the input
  } else if (/* how to check password */) {
    // how do we add an the post
  } else {
    // what to do when the password is wrong
  }
});

// Some debug messages
console.log("Starting app..");

app.listen(port, '0.0.0.0', () => console.log(`HackerLog app listening on port ${port}!`));
