const request = require('request')

class RingoCatFacts {
  static responseFor(message, rtm) {
    if (message.text.match(/facts? about cats/i)) {
      this.sendCatFact(message.channel, rtm);
    }
  }

  static sendCatFact(channel, rtm) {
    request.get("http://catfacts-api.appspot.com/api/facts", function(err, res, body) {
      let catFact = JSON.parse(body).facts[0];
      rtm.sendMessage(catFact, channel);
    })
  }
}

module.exports = RingoCatFacts
