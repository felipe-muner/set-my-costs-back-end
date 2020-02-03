module.exports = {
  getAll: function(req, res, next) {
    polls.polls.forEach(e => e.formattedDate = Util.formatDate(e.publishedDate))
    req.polls = polls
    next()
  }
}
