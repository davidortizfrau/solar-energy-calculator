InstalationEstimator = function(kWhDailyAvg) {
  let _wattsPerFoot = 250 / 20;
  let _chargePerWatt = 3.25;
  let _increment = 0.25;
  let _discountSystemPoint = 5000

  let systemCapacitykWh = function() {
    return Math.ceil(kWhDailyAvg / 4);
  };

  let instalationArea = function() {
    return (systemCapacitykWh() * 1000 / _wattsPerFoot);
  };

  let estimate = function() {
    systemCapacityWh = systemCapacitykWh() * 1000
    if (systemCapacityWh > _discountSystemPoint) {
      return systemCapacityWh * (_chargePerWatt - _increment)
    } else {
      return systemCapacityWh * _chargePerWatt
    };
  };

  return { systemCapacitykWh, instalationArea, estimate }
}

