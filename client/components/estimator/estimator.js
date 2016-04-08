Template.estimator.helpers({
  kW: function() {
    return Session.get('kWhDailyAvg')
  },
  capacity: function() {
    return InstalationEstimator(Session.get('kWhDailyAvg')).systemCapacitykWh()
  },
  installationArea: function() {
    return InstalationEstimator(Session.get('kWhDailyAvg')).instalationArea()
  },
  estimate: function() {
    return InstalationEstimator(Session.get('kWhDailyAvg')).estimate()
  }
});

Template.estimator.events({
  'click #control-plus': function(e) {
    e.preventDefault();
    let kWhDailyAvg = Number(Session.get('kWhDailyAvg')) + 1;
    Session.set('kWhDailyAvg', kWhDailyAvg)
  },
  'click #control-minus': function(e) {
    e.preventDefault();
    let kWhDailyAvg = Number(Session.get('kWhDailyAvg')) - 1;
    Session.set('kWhDailyAvg', kWhDailyAvg)
  }
});