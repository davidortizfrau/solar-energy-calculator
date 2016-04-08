Template.sponsor.helpers({
  financing: function() {
    let _n = 180;
    let rate = 3.5;
    let _ratePerPeriod = rate / 12 / 100;
    let _P = InstalationEstimator(Session.get('kWhDailyAvg')).estimate();

    let termYears = function() { return _n / 12 };

    let payment = function() {
      return Finance(_P, _n, _ratePerPeriod).payment().toFixed(2);
    };

    return { termYears, rate, payment };
  }

});