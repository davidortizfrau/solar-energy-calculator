Session.set('kWhDailyAvg', 30);

Meteor.startup( function () {
  $(document).on('keyup', function (e) {
    let keyCode = e.keyCode;
    let kWhDailyAvg = Number(Session.get('kWhDailyAvg'));

    switch(keyCode) {
      case 39:
        Session.set('kWhDailyAvg', (kWhDailyAvg + 1))
        break;
      case 37:
        Session.set('kWhDailyAvg', (kWhDailyAvg - 1))
        break;
      default:
        return null;
    }
  });
});