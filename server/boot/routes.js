module.exports = function(app) {
  app.get('/newmethod2', function(req, res) {
    res.send('new method working');
  });
}